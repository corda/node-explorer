# Node-Explorer

Stand alone desktop app for Win/Osx/Linux that allows connecting to a local or remote Corda node. Examine transactions, run flows and view node and network properties in a few simple clicks.

### Downloading the Node Explorer 

If you're looking to download the node explorer and get started using it; download the latest packaged release on this repo's [releases](https://github.com/corda/node-explorer/releases) page. 

You can find the releases page [here](https://github.com/corda/node-explorer/releases), there are packages for Linux, OSX and Windows. 


### Setting up for Node Explorer for Development 


#### Installation:
Requirements: NodeJS and Npm package manager.

1) ``git clone <this repo> <optional: target dir>``
2) ``cd node-explorer (or target directory)``
3) ``npm install``

Note this project uses the node-server submodule available at https://github.com/corda/node-server this must be initialised with the following commands.

1) ``git submodule init``
2) ``git submodule update``* 

*this command must also be run after any pull request which includes updates to the submodule. An alternative is to do pull requests with the following option:
``git pull --recurse-submodules``

**Other submodule commands:**

* Fetch and merge the latest node-server submodule code
  - ``git submodule update --remote``

* Doing work on the submodule i.e. changing files in ./server
  - submodules default to a detached head, so change to server directory and checkout a branch
  - ``cd ./server``
  - ``git checkout master``
  - Add or commit your changes as usual.

* To PULL submodule updates from server side, if there are changes on your local branch either merge or rebase with the pull
  - From MAIN project directory
  - `` git submodule update --remote --merge `` OR
  - ``git submodule update --remote --rebase``

* To PUSH submodule updates to server side
  - From MAIN project directory
  - ``git push --recurse-submodules=on-demand``

#### Packaging electron installers / app files

Note: You must have a compiled server jar in the directory root 
 - `cd ./server && ./gradlew bootJar`, move compiled jar in `./server/build/libs` to the root.

Then run: ``npm run electron-pack``

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