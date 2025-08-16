#!/usr/bin/env sh
set -eu

: "${MINIO_ROOT_USER:=minio}"
: "${MINIO_ROOT_PASSWORD:=miniopass}"
: "${MINIO_ENDPOINT:=http://localhost:9000}"

apk add --no-cache curl >/dev/null 2>&1 || true

if ! command -v mc >/dev/null 2>&1; then
  curl -L -o /usr/local/bin/mc https://dl.min.io/client/mc/release/linux-amd64/mc
  chmod +x /usr/local/bin/mc
fi

mc alias set local "$MINIO_ENDPOINT" "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD"
mc mb -p local/antgasp-media || true
mc anonymous set download local/antgasp-media
echo "Bucket antgasp-media prêt."
