
from
https://scotch.io/tutorials/google-cloud-platform-i-deploy-a-docker-app-to-google-container-engine-with-kubernetes
https://scotch.io/tutorials/google-cloud-platform-ii-continuously-deploying-a-docker-application-on-google-container-engine
https://scotch.io/tutorials/google-cloud-platform-iii-handling-sensitive-data-in-a-docker-application-with-kubernetes-secrets

last updated 2 years ago at 03/01/2019
https://github.com/johnkariuki/k8s-docker


updated to 
circleci version=2

todo
environment varibles between jobs, for project

?$BASH_ENV

echo 'export FULL_IMAGE_NAME="gcr.io/${PROJECT_ID}/node-app:$CIRCLE_SHA1"' >> $BASH_ENV
export FULL_IMAGE_NAME="gcr.io/${PROJECT_ID}/node-app:$CIRCLE_SHA1"

source $BASH_ENV