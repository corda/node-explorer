# Node-Explorer

#### Description: 
Stand alone desktop app for Win/Osx/Linux that allows connecting to a local or remote Corda node. Examine transactions, run flows and view node and network properties in a few simple clicks.

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



