;; BlockBet: Predict the Chain, Not the Market
;; Real-time on-chain prediction game

(define-constant ERR-NOT-AUTHORIZED (err u401))
(define-constant ERR-INVALID-STAKE (err u402))
(define-constant ERR-ROUND-CLOSED (err u403))
(define-constant ERR-ROUND-NOT-FOUND (err u404))

;; Data Vars
(define-data-var protocol-admin principal tx-sender)
(define-data-var round-nonce uint u0)

;; Prediction Rounds
(define-map rounds 
    uint 
    {
        creator: principal,
        target-block: uint,
        outcome-type: (string-ascii 20), ;; "block-size", "tx-count"
        status: (string-ascii 10),       ;; "open", "resolved"
        total-pool: uint,
        outcome: (optional uint)
    }
)

;; User Stakes
(define-map stakes 
    { round-id: uint, user: principal }
    { amount: uint, prediction: uint }
)

;; Public Functions

(define-public (create-round (target-block uint) (outcome-type (string-ascii 20)))
    (let
        (
            (round-id (var-get round-nonce))
        )
        (asserts! (is-eq tx-sender (var-get protocol-admin)) ERR-NOT-AUTHORIZED)
        (map-set rounds round-id {
            creator: tx-sender,
            target-block: target-block,
            outcome-type: outcome-type,
            status: "open",
            total-pool: u0,
            outcome: none
        })
        (var-set round-nonce (+ round-id u1))
        (ok round-id)
    )
)

(define-public (place-stake (round-id uint) (amount uint) (prediction uint))
    (let
        (
            (round (unwrap! (map-get? rounds round-id) ERR-ROUND-NOT-FOUND))
        )
        (asserts! (is-eq (get status round) "open") ERR-ROUND-CLOSED)
        (asserts! (> amount u0) ERR-INVALID-STAKE)
        
        ;; Transfer stake to contract
        (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
        
        ;; Update stake and pool
        (map-set stakes { round-id: round-id, user: tx-sender } { amount: amount, prediction: prediction })
        (map-set rounds round-id (merge round { total-pool: (+ (get total-pool round) amount) }))
        
        (ok true)
    )
)

(define-public (resolve-round (round-id uint) (final-outcome uint))
    (let
        (
            (round (unwrap! (map-get? rounds round-id) ERR-ROUND-NOT-FOUND))
        )
        (asserts! (is-eq tx-sender (var-get protocol-admin)) ERR-NOT-AUTHORIZED)
        (map-set rounds round-id (merge round { 
            status: "resolved", 
            outcome: (some final-outcome) 
        }))
        (ok true)
    )
)

;; Read-only Functions

(define-read-only (get-round (round-id uint))
    (map-get? rounds round-id)
)

(define-read-only (get-user-stake (round-id uint) (user principal))
    (map-get? stakes { round-id: round-id, user: user })
)
