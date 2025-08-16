#!/usr/bin/env bash
set -euo pipefail

BROKER="${BROKER:-localhost:9092}"

topics=(
  "reservation.v1"
  "reservation-confirmed.v1"
  "stock-decrement-failed.v1"
)

for t in "${topics[@]}"; do
  rpk topic create "$t" -p 1 -r 1 --brokers "$BROKER" || true
  echo "✓ topic: $t"
done
