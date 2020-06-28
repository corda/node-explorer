# Node-Explorer

NOTE: The node-explorer original repo can be found here --> https://github.com/corda/node-explorer

The original app is standalone. I have made a docker-compose file so that it can be run on cloud machines as webapp.

Web application app for Win/Osx/Linux that allows connecting to a local or remote Corda node. Examine transactions, run flows and view node and network properties in a few simple clicks.

### Starting node-explorer as docker

##### Set cordapps path

```
export CORDAPPS_PATH=Your cordapps path here
```
example

```
export CORDAPPS_PATH=/home/karthik/github/samples-java/Basic/yo-cordapp/build/nodes/PartyA/cordapps
```


##### Run docker-compose file

```
docker-compose up -d
```

##### Node explorer UI

explorer runs at port 3000

```
http://localhost:3000/
```


##### explorer cordapps settings

Provide cordapps path as /cordapps in settings tab.

```
/cordapps
```