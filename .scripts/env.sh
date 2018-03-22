# these are used in the docker container
export ENVIRONMENT="local"
export GCP_CLUSTER_NAME="cnn-barge-01-dev"
export IMAGE_CONTAINER_HOST="gcr.io"
export PACKAGE_NAME="$(jq -r .name package.json)"
export PORT="80"
export VERSION="$(jq -r .version package.json)-local.$(uuidgen | cut -b1-7)"

export IMAGE_NAME="${IMAGE_CONTAINER_HOST}/${GCP_CLUSTER_NAME}/${PACKAGE_NAME}:${VERSION}"

{
  echo ENVIRONMENT="${ENVIRONMENT}"
  echo GCP_CLUSTER_NAME="${GCP_CLUSTER_NAME}"
  echo IMAGE_CONTAINER_HOST="${IMAGE_CONTAINER_HOST}"
  echo IMAGE_NAME="${IMAGE_NAME}"
  echo PACKAGE_NAME="${PACKAGE_NAME}"
  echo PORT="${PORT}"
  echo VERSION="${VERSION}"
} > .env

cat .env