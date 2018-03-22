# these are used to create the .env file used by docker-compose.yml
export ENVIRONMENT="local"
export GCP_CLUSTER_NAME="cnn-barge-01-dev"
export IMAGE_CONTAINER_HOST="gcr.io"
export PACKAGE_NAME="$(jq -r .name package.json)"
export PORT="80"
export VERSION="$(jq -r .version package.json)-local.$(uuidgen | cut -b1-7)"

export IMAGE_NAME="${IMAGE_CONTAINER_HOST}/${GCP_CLUSTER_NAME}/${PACKAGE_NAME}:${VERSION}"

{
  echo ENVIRONMENT="${ENVIRONMENT}"
  echo IMAGE_NAME="${IMAGE_NAME}"
  echo PORT="${PORT}"
} > .env

cat .env