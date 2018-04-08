# Hapi 17 Async Await example

w/ a lil'bit o' React thrown in

```bash
$ nvm install                          # node
$ npm install                          # node dependencies
$ npm run build                        # webpack
$ npm start                            # hapi server
$ open localhost:8080/                 # react frontend
$ open localhost:8080/_hc              # healthcheck
$ open localhost:8080/documentation    # swagger
```

## Plus Docker

```bash
$ npm run docker:build          # build a docker image on localhost
$ npm run docker:build+push     # build a docker image on localhost and push to a container registry
$ npm run docker:build+start    # builds a docker image on localhost and starts it up on localhost
```

_`docker:build+push` needs `gcloud container clusters get-credentials [CLUSTER_NAME] --zone [ZONE]`
to have been run at some point previously._

## Plus Kubernetes

_assumes `docker:build+push` has been done previously_

```bash
$ vim k8-app-deployment.yml                                     # edit the image version
$ kubectl apply -f k8-app-deployment.yml                        # apply the changes
$ kubectl rollout status deployment/hapi-async-await-example    # monitor changes being applied
```

## Reqs

- gcloud - https://cloud.google.com/sdk/downloads#interactive

```
$ curl https://sdk.cloud.google.com | bash
$ exec -l $SHELL
$ gcloud init
```

