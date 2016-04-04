# [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.oc9y0i2py) web, iOS and Android starter kit using React, React Native, Relay, Node.js and Cassandra

The Isomorphic Material Relay Starter Kit (IMRSK) project started as an off-shoot of multiple projects and boilerplates we use at [Code Foundries](http://codefoundries.com) and is developed with the help of the [contributors](https://github.com/codefoundries/isomorphic-material-relay-starter-kit/graphs/contributors). It was an attempt to provide and organize a well thought out starting point for future projects.

Since then it has added on several features and support for React Native, which makes it into a starter kit for web and native mobile applications with a common backend (native still without authentication and samples). It also contains samples of techniques that tie all the underlying technologies together. Baseline functionality like user log in, authentication, etc. is included.



## Demo

| How to try     | **Link**|
|----------------|----------------|
| Live Demo on [Heroku](https://www.heroku.com/) | [http://isomorphic-material-relay.herokuapp.com/](http://isomorphic-material-relay.herokuapp.com/). Configured with in-memory data store. This is a free dyno, so give it some time to spin up. |
| Live Demo on [Open Shift](https://www.openshift.com/) | [http://app-imrsk.rhcloud.com/](http://app-imrsk.rhcloud.com/). Configured with Cassandra data store. Under active development, might be down. |
| Run locally | [Local Setup](#local-setup). MacOS X. |
| Run on [Heroku](https://www.heroku.com/nodejs) | [Heroku Setup](#heroku-setup). With Heroku-specific troubleshooting instructions. |



## Documentation

The following documents explain in detail certain aspects of this repository in depth:

* [Cassandra, meet Relay. Relay, meet Cassandra](http://codefoundries.com/developer/cassandra/cassandra-meet-relay.html). Explanation of how Cassandra and Express GraphQL work together.
* [Isomorphic React Relay](http://codefoundries.com/developer/single-page-application/isomorphic-react-relay.html). Explains the approach to isomorphism taken in implementing the starter kit.
* [Isomorphic Server Variables](http://codefoundries.com/developer/single-page-application/isomorphic-server-variables.html). Using variables and settings in an isomorphic application - client rendering, server rendering.
* [SEO Using Isomorphic Application With Relay and Helmet](http://codefoundries.com/developer/single-page-application/seo-isomorphic-react-helmet.html). How to make SEO-friendly pages with React, Relay and Helmet.


## Additional resources

The following documents, while not explicitly related to the starter kit, can be useful while running and modifying the kit:

* [Cassandra Cheatsheet](http://codefoundries.com/developer/cassandra/cassandra-cheatsheet.html). List of common commands in CQL.
* [Cassandra Installation on Mac](http://codefoundries.com/developer/cassandra/cassandra-installation-mac.html). Simple steps for setting up an instance of Cassandra for development.
* [Git Cheatsheet](http://codefoundries.com/developer/git/git-cheatsheet.html). Some useful git commands.
* [React Cheatsheet](http://codefoundries.com/developer/react/react-cheatsheet.html). Techniques for working with React used in the starter kit.



## Features

| **Feature** | **Details**|
|-------------|------------|
| Single Page Application | The IMRSK is a Single Page Application. It has all the advantages that come with SPA, while using isomorphism and the Relay features allows to offset practically all negatives that come with this approach. |
| React and React Native | The use of both React (for the web) and React Native (for mobile apps), connected to the same GraphQL backend, allows for maximum reuse of code and developer skills. |
| Isomorphism | The kit is designed to be fully isomorphic. This allows for very quick rendering when the users first access a page in the application. All content is designed to be accessed in an isomorphic way allowing the use and sharing of links to any part of the SPA. |
| SEO | The combination of isomorphism with the use of the react helmet allows all the content in the application to be SEO ready. Samples will be added to the kit later. |
| ES6, ES7 | The IMRSK uses features of ES6 and ES7 extensively. All react components are implemented as ES6 classes. |
| JWT Tokens | JWT tokens are used for authentication. They are stored in server-only cookies which, together with the use of GraphQL, provides a fair amount of protection against several possible attacks. |
| CSRF Tokens | Tokens are passed with each GraphQL request to prevent Cross Site Request Forgery exploits. |
| HTTP Only cookies | The HTTP only cookies are currently the safest way to handle authentication in a web application. The JWT tokens are stored in HTTP only cookies making it harder for attackers to access. |
| Material Design | Expanding upon the "card" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows. |
| Responsive Design | Mainly through the features of the Material UI library, the examples in IMRSK work well on different form factors, ranging from desktop browsers to mobile phones. |
| Hot Reload | The webpack development server supports hot reload when components are changed, greatly improving developer productivity. The IMRSK is configured with hot reload. |
| Built for speed | The starter kit is configured to use established practices for optimizing speed like caching and compression. This entails certain requirements about how it is used, read in the Speed and Building section below. |
| Units | The examples are broken into semi-independent units containing all client and server side code necessary. Adding and removing units can be done fairly easily without affecting the application in a major way. |
| Cassandra/In Memory | The starter kit can be used with both Cassandra-based data storage, as well as in-memory structures. The latter are right now used only for testing, but can be later used for setting up mock tests cases for unit and regression testing. |
| User management | The starter kit contains code for managing user accounts. The different parts of the application can be accessed by anonymous or authenticated users, or both. |




## Underlying technologies

| **Technology** | **Description**|
|----------------|----------------|
| [React](https://facebook.github.io/react/) | Library for building SPA. |
| [React Native](https://facebook.github.io/react-native/) | React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. |
| [Material UI](http://www.material-ui.com/) | Library for implementing Material Design in React. All user interface in this kit is built exclusively with Material UI components. |
| [material-ui-country-flags](https://github.com/codefoundries/material-ui-country-flags) | Library with flag icons for Material-UI, used for the language selector. |
| [Relay](https://facebook.github.io/relay/) | A Javascript framework for building data-driven react applications. |
| [GraphQL](https://facebook.github.io/graphql/) | A query language created by Facebook in 2012 for describing the capabilities and requirements of data models for client‐server applications. |
| [Express GraphQL](https://github.com/graphql/express-graphql) | A Node.js express library that allows the creation of GraphQL servers. |
| [Isomorphic Relay](https://github.com/denvned/isomorphic-relay) | Adds server side rendering support to React Relay. IMRSK fully utilizes this library, while waiting for [https://github.com/facebook/relay/issues/589](https://github.com/facebook/relay/issues/589). The eventual goal is to have full isomorphism with authentication. |
| [Data Loader](https://github.com/facebook/dataloader) | Generic utility to be used as part of your application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching. |
| [Apache Cassandra](http://cassandra.apache.org/) | The right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages. |
| [JWT](https://jwt.io/) | JSON Web Tokens is an industry standard [RFC 7519](https://tools.ietf.org/html/rfc7519) method for representing claims securely between two parties. |
| [React Helmet](https://github.com/nfl/react-helmet) | Reusable React component will manage all of your changes to the document head with support for document title, meta, link, script, and base tags. |
| [Flow](http://flowtype.org/) | Static type checker, designed to find type errors in JavaScript programs. |
| [ESLint](http://eslint.org/) | Pluggable linting utility for JavaScript and JSX. |
| [Babel](http://babeljs.io) | Compiles ES6/ES7 to ES5. Allows using features from ES6 and ES7 today. |
| [Webpack](http://webpack.github.io) | Bundles npm packages and the application Java Script into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). Also, Webpack can bundle any required CSS. |
| [Node.js](https://nodejs.org)| Event-driven, non-blocking I/O runtime based on JavaScript that is lightweight and efficient. |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |



## Security considerations

* **Use of HTTP Only cookies** Why this is the best place is explained in [Where to Store Your JWTs - Cookies vs HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage/).



### <a name="heroku-setup"></a> Heroku setup

In order to set up the project on heroku, perform the following steps:

* **Install [Heroku Toolbelt](https://toolbelt.heroku.com/)**.
* **Clone from github** `git clone https://github.com/codefoundries/isomorphic-material-relay-starter-kit`.
* **Create an app** `heroku create`.
* **Specify JWT secret** using `heroku config:set JWT_SECRET=xyzxyzxyz` where you replace the secret value with a secret of your choosing. Verify that the value is set with `heroku config`.
* **Specify variables for Cassandra connection points** despite the fact that they are not used: `heroku config:set CASSANDRA_CONNECTION_POINTS=na` and `heroku config:set CASSANDRA_KEYSPACE=na`.
* **Specify object persistence** in memory: `heroku config:set OBJECT_PERSISTENCE=memory`.
* **Specify anomymous user auth token** using `heroku config:set ANONYMOUS_USER_AUTH_TOKEN=xyzxyzxyz` where you replace the token value with a token of your choosing.
* **Verify that the above values are set** with `heroku config`.
* **Deploy the app** `git push heroku master`.

For more information refer to excellent [Getting Started with Node.js on Heroku - Deploy the app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app). I do not have an available free Cassandra dyno on Heroku so I can not test how to configure Cassandra.

#### Running bash on Heroku

`heroku run bash` is your friend in need who is a friend indeed.

#### Troubleshooting unmet peer dependencies on Heroku

Whenever, when updating Heroku, an 'UNMET DEPENDENCY' message similar to the one below is displayed:

```
remote:        isomorphic-material-relay-starter-kit@0.7.2 /tmp/build_xxxxxxxxxxxx
remote:        ├─┬ material-ui@0.14.3
remote:        │ ├── inline-style-prefixer@0.6.7
remote:        │ └── UNMET PEER DEPENDENCY react@^0.14.3
remote:        ├── UNMET DEPENDENCY react@^0.14.6
remote:        ├── react-dom@0.14.7
remote:        └─┬ react-helmet@2.3.1
remote:        └── core-js@2.0.3
```

Try the following troubleshooting step from the Heroku troubleshooting manual: Each time you run `npm install`, npm leaves packages that meet your semver requirements untouched. That’s why an `npm install` today may lead to a different tree than the `npm install` you ran yesterday, even if your `package.json` didn’t change.
Therefore, it’s a good practice to periodically clear `node_modules` and reinstall from scratch to ensure that your` package.json` dependencies are still valid:

```
$ rm -rf node_modules
$ npm install --quiet --production
$ npm start
```

In fact, those are essentially the commands that Heroku runs when we build and launch your project. If they work locally, you’re likely to be cloud-ready.

If this does not work, running

```
npm shrinkwrap
```

will generate the `npm-shrinkwrap.json` file, which seems to resolve the above problem in most cases.

### <a name="local-setup"></a> Initial Development Machine Setup

* **Install [Node.js](https://nodejs.org)**.  
* **Install [Git](https://git-scm.com/downloads)**.
* **Install [Apache Cassandra](http://cassandra.apache.org/download/)**.
* **Make sure** that Node.js is at least version 5.0 and NPM is at least version 3.

We have only tested this running on MacOS. I am copying the instructions for other operating systems from the **[React Slingshot](https://github.com/coryhouse/react-slingshot)**. We have not had a chance to test them and would appreciate help with that. If you have done that please open an issue with the results whether successful or not, and feel free to PR to update this document.

#### **On Linux**  
Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).    
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

#### **On Windows**  
1. **Install [Python 2.7](https://www.python.org/downloads/)**. Browser-sync (and various other Node modules) rely on node-gyp, which requires Python on Windows.  
2. **Install C++ Compiler**. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

### Initial Project setup on local machine

In order to set up the project locally, perform the following steps:

* **Clone from github.** `git clone https://github.com/codefoundries/isomorphic-material-relay-starter-kit`.
* **Install node packages.** `npm install`.
* **Perform initial setup.** `npm run setup-local`.
* **Specify JWT_SECRET** by modifying the `.env` file. This step can be skipped if you do not care about the actual security and simply want to get the project running.
* **Start the server.** `npm run start`.
* **The application is available at:** `http://localhost:4444`.



## NPM tasks

### Setup

| **Task**               | **Details**|
|------------------------|------------|
| `postinstall`          | Called by NPM after `npm install`. Configures to use memory data access, re-builds the GraphQL schema and performs a webpack build. |
| `setup-local`          | Sets up the IMRSK for use on local dev machine. |
| `setup-cassandra-init` | Drops (if it exists), creates and initializes with sample data a local Cassandra database called `imrsk`. |
| `config-da-memory`     | Configure IMRSK for using in-memory data structures. |
| `config-da-cassandra`  | Configure IMRSK for using Cassandra for persistence. |

### Build

| **Task**               | **Details**|
|------------------------|------------|
| `build-schema`         | Rebuilds GraphQL schema from the JavaScript definition. |
| `build-mui-icon-list`  | Re-builds list of icons based on the ones available in Material-UI. If `if( key > 50 ) return;` is uncommented, all icons will be generated. It becomes quite the page and webpack voices objections, but it works. |
| `build-webpack`        | Runs a webpack build in order to run in production mode. Created and populates `public/assets/{Version}``. |

### Run

| **Task**               | **Details**|
|------------------------|------------|
| `start-webpack`        | Starts the webpack development server, responsible for asset compilation and hot reload. |
| `start-dev`            | Starts the application server in development mode. |
| `dev`                  | Starts the task at the same time: `start-webpack` and` start-dev`. |
| `start`                | Run in production mode. |

### Running in development mode

Two separate servers need to be started. The first one is the actual application in development mode. The second server is the webpack server which is to be run at all times for hot replace

* Start application HTTP and Webpack server: `npm run dev`.

To open the app:

* Navigate to `http://localhost:4444`, unless you specified a different port.



## Environment Variables

The following environment variables can be used to control the server:

| Variable Name                  | Description                                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------------------------|
| PORT                           | Port for serving the SPA web application and API.                                                       |
| HOST                           | Host for for serving, for instance `127.0.0.1`.                                                         |
| PUBLIC_URL                     | URL through which browsers and other clients can access the server - isomorphic pages, public, GraphQL. Optional. Should not be empty. Example: `https://example.com` |
| ANONYMOUS_USER_AUTH_TOKEN               | Secret passed by server rendered to GraphQL server telling it to trust the auth_token without requiring the user_auth_token in the header to be correct. Instead it constains this very secret. |
| JWT_SECRET                     | Secret used for JWT tokens.                                                                             |
| OBJECT_PERSISTENCE             | whenther to use `memory` or `cassandra` as persistence layer                                            |
| CASSANDRA_CONNECTION_POINTS    | Cassandra connection point comma separated list. `localhost` if on the same machine.                    |
| CASSANDRA_KEYSPACE             | Cassandra keyspace/database.                                                                            |
| CASSANDRA_USER                 | Optional Cassandra username.                                                                            |
| CASSANDRA_PASSWORD             | Optional Cassandra password.                                                                            |

They can be set in the `.env` file in the root of the project. `Example.env` in
the documents folder contains an example of such file.



## Project Structure

Naming conventions are used wherever possible. The following tags are used to comprise names of files:

| Tag                                    | Description                                                    |
| -------------------------------------- | ---------------------------------------------------------------|
| `{Entity}`                             | Name of entity in the data store, like User, ToDo item, etc. |
| `{Mutation}`                           | Indicates type of mutation applied to an entity, like add, delete, update, list_delete, etc. |
| `{Version}`                            | Version of the project, as specified in `package.json`, like 0.6.3. |
| `{Unit}`                               | Name of unit, for instance `starter-kit-example-compendium`. |

Below is the list of the main files and folders for this project. Asterisk on the right means link into the repository for quick viewing.

| Folder/File                                   | Description                                                    |  |
| --------------------------------------------- | ---------------------------------------------------------------| --- |
| `app/`                                        | Root for the react-native app. | [*](./app/) |
| `data/`                                       | Methods and data access functions. | [*](./data/) |
| `data/lib/`                                   | Wrappers around data loader, cassandra driver and in-memory persistence. | [*](./data/lib/) |
| `data/lib/CassandraClient.js`                 | Promisified Cassandra client. | [*](./data/lib/CassandraClient.js) |
| `data/lib/CassandraOptions.js`                | Options for connecting to Cassandra used by client and logger. | [*](./data/lib/CassandraOptions.js) |
| `data/lib/ObjectManagerBase.js`               | Manage objects for GraphQL resolvers using DataLoader and Cassandra or in-memory persistence. | [*](./data/lib/ObjectManagerBase.js) |
| `data/lib/ObjectPersisterCassandra.js`        | Persists objects in Cassandra. | [*](./data/lib/ObjectPersisterCassandra.js) |
| `data/lib/ObjectPersisterMemory.js`           | Persists objects in memory. | [*](./data/lib/ObjectPersisterMemory.js) |
| `data/model/`                                 | Models | [*](./data/model/) |
| `data/model/{Entity}.js`                      | Model for {Entity}. Default class for that entity is exported. |
| `data/ObjectManager.js`                       | Object manager instance with initialization for all types used by GraphQL server. | [*](./data/lib/ObjectManager.js) |
| `doc/`                                        | Misc. documentation. | [*](./doc/) |
| `doc/example.env`                             | Example of a `.env` file. Also copied into `\.env` in `setup-local` script. | [*](./doc/example.env) |
| `graphql/`                                    | Holds the elements of the GraphQL schema. | [*](./graphql/) |
| `graphql/type/`                               | System types. | [*](./graphql/type/) |
| `graphql/type/MutationType.js`                | Type that includes all the mutations. | [*](./graphql/type/MutationType.js) |
| `graphql/type/QueryType.js`                   | Query type that resolves nodes to entities. | [*](./graphql/type/QueryType.js) |
| `graphql/type/ViewerType.js`                  | Current user and entry point for any information retrieved. | [*](./graphql/type/ViewerType.js) |
| `graphql/NodeInterface.js`                    | The main node interface. | [*](./graphql/NodeInterface.js) |
| `graphql/schema.graphql`                      | Human readable representation of the schema. Generated by `build-schema`. | [*](./graphql/schema.graphql) |
| `graphql/server.js`                           | The GraphQL Express server. | [*](./graphql/server.js) |
| `graphql/schema.js`                           | Entry point for the schema, points at the query type and the mutation type. | [*](./graphql/schema.js) |
| `graphql/schema.json`                         | Schema in JSON format. Must exist for `build-schema` to run, but is re-generated by it. | [*](./graphql/schema.json) |
| `public/`                                     | This folder is served as root of the website. | [*](./public/) |
| `public/assets/`                              | Assets generated by webpack. |
| `public/assets/{Version}/app.css`             | CSS assets compiled by WebPack. Not much to see. |
| `public/assets/{Version}/app.js`              | All the nice ES5-compliant JavaScript for the SPA. |
| `scripts/build-mui-icon-list.js`              | Rebuilds the list of Materual-UI icons. Modify this file to control how many icons are displayed. | [*](./scripts/build-mui-icon-list.js) |
| `scripts/build-schema.js`                     | Rebuilds the GraphQL schema files. Must be run when the schema is modified. | [*](./scripts/build-schema.js) |
| `scripts/cassandra-init.cql`                  | CQL Script for creating and seeding the Cassandra database. | [*](./scripts/cassandra-init.cql) |
| `server/`                                     | The Node.js server serving isomorphic content, GraphQL, public files and authentication requests. | [*](./server/) |
| `server/auth.js`                              | Authentication service, verifies user name and password and creates JWT tokens. | [*](./server/auth.js) |
| `server/credentials_check.js`                 | Functions for verifying issued JWT tokens and protecting against CRSF. | [*](./server/credentials_check.js) |
| `server/server.js`                            | Main script. Loads all other servers. | [*](./server/server.js) |
| `units/`                                      | Units included in application, including all elements of the stack. | [*](./units/) |
| `units/_all/`                                 | Files with includes summarizing certain includes of all units. | [*](./units/_all/) |
| `units/_all/_mutations.js`                    | GraphQL Mutations from all units to be included in the mutation type. | [*](./units/_all/_mutations.js) |
| `units/_all/_ViewerFields.js`                 | Fields included in the viewer type from all units. | [*](./units/_all/_ViewerFields.js) |
| `units/{Unit}/`                               | A single unit. See table below for per-unit structure | [*](./units/starter-kit-example-compendium/) |
| `webapp/`                                     | Root for the entire web application. | [*](./webapp/) |
| `webapp/components/`                          | All the JSX components used by the web app. | [*](./webapp/components/) |
| `webapp/mui-themes/`                          | Material-UI themes. | [*](./webapp/mui-themes/) |
| `webapp/mui-themes/active-theme.js`           | Points to the theme that is currently active. | [*](./webapp/mui-themes/active-theme.js) |
| `webapp/scripts/`                             | Scripts used by the client. | [*](./webapp/scripts/) |
| `webapp/styles/`                              | Styles used by the client. | [*](./webapp/styles/) |
| `webapp/styles/main.css`                      | Example style included in the app. Currently not used. | [*](./webapp/styles/main.css) |
| `webapp/app.js`                               | Starts the client-side SPA using data generated during server rendering. | [*](./webapp/app.js) |
| `webapp/renderOnServer.ejs`                   | Template for the HTML served by the isomorphic server rendered. | [*](./webapp/renderOnServer.ejs) |
| `webapp/renderOnServer.js`                    | Performs server-side rendering. | [*](./webapp/renderOnServer.js) |
| `webapp/routes.js`                            | Routes in a data structure consumed both by express router and react router. | [*](./webapp/routes.js) |
| `webapp/server.js`                            | Server for the web app. | [*](./webapp/server.js) |

The structure of each unit is as follows:

| Folder/File                                   | Description                                                    |     |
| --------------------------------------------- | ---------------------------------------------------------------| --- |
| `/`                                           | Root of unit at relative path `units/{Unit}/` | [*](./units/starter-kit-example-compendium/) |
| `graphql/`                                    | All files included in the express-graphql server schema. | [*](./units/starter-kit-example-compendium/graphql/) |
| `graphql/type/`                               | Object types. | [*](./units/starter-kit-example-compendium/graphql/type/) |
| `graphql/type/*Connection.js`                 | Connection between two types. |
| `relay/`                                      | All Relay client side files shared between react DOM and native. | [*](./units/starter-kit-example-compendium/relay/) |
| `webapp/`                                     | React DOM files. | [*](./units/starter-kit-example-compendium/webapp/) |




## Customizing the look and feel

Material-UI provides powerful means for [customizing the colors and the overall look of the application](http://www.material-ui.com/#/customization/themes). The IMRSK uses a custom theme as indicated in [./webapp/mui-themes/active-theme.js](./webapp/mui-themes/active-theme.js). The `active-theme.js` file itself simply imports and re-exports one of the themes in the folder. By convention, all components will be importing `active-theme.js` whenever theme information is required on the component level. Here is an example of some of the settings from the [webapp/mui-themes/grayBlue.js](./webapp/mui-themes/grayBlue.js)

``` Javascript
primary1Color: blue500,
primary2Color: blue700,
primary3Color: lightBlack,
accent1Color: purpleA200,
accent2Color: blueGrey100,
accent3Color: blueGrey500,
textColor: darkBlack,
alternateTextColor: white,
canvasColor: white,
borderColor: grey300,
disabledColor: ColorManipulator.fade(darkBlack, 0.3),
pickerHeaderColor: blue500,
```



## Speed and asset version control

This project configured to use compression on all content, and caching on the static content. This delivers spectacular results. The numbers below were obtained using Google Chrome, development tools throttling and cache disabling, on a 2011 series Macbook Pro. The test is performed on the main page. Instance [deployed on Heroku](http://isomorphic-material-relay.herokuapp.com/) was used.

| Network Speed                  | Initial load (no cache) | Subsequent load (cached content) |
| ------------------------------ | ----------------------- | -------------------------------- |
| On Regular 2G (250 kb/s)       | 7.3 sec                 | 1.4 sec                          |
| On Regular 3G (750 kb/s)       | 3.1 sec                 | 1.1 sec                          |

In both cases the UI becomes visible in less than a second. The wait time is to get all the JavaScript loaded in order to continue working as an SPA.

While this is a desirable level of performance, it is important not to forget that caching the static content means caching the SPA code too. The assets generated with webpack are placed into a sub-folder bearing the version of the package as name. Make sure to increase the version number in `package.json` every time you deploy changes to production.

If you add other static content, you might want to revisit how caching of static content is implemented.



## Credits and Sources

This project contains a boilerplate with several simple code examples. It consists of modified versions of the following projects:

* [Facebook Relay Starter Kit TODO example](https://github.com/facebook/relay/tree/master/examples/todo). Implementation of the TODO MVC using Relay. In this kit the TODO example has been re-implemented with material UI.
* [Facebook Relay Todo MVC example](https://github.com/facebook/relay/tree/master/examples/TodoMVC). Implementation of the TODO MVC using Relay and React Native.
* [Isomorphic react-router-relay TODO example](https://github.com/denvned/isomorphic-relay-router/tree/master/examples/todo). The Facebook TODO example in this project has been modified to support isomorphism.
* [Xpepermint's isomorphic-react-relay-boilerplate](https://github.com/xpepermint/isomorphic-react-relay-boilerplate). The project organization was initially borrowed from this project, although it has since diverged.
* [coryhouse's react-slingshot](https://github.com/coryhouse/react-slingshot). Ideas about he documentation are borrowed from this project.
* [ryancole's league](https://github.com/ryancole/league). The organization of the GraphQL schema is borrowed from this project.
* [itayadler's cassandra-paginating-static-columns](https://github.com/itayadler/cassandra-paginating-static-columns/blob/master/index.js). The general approach to working with Cassandra was initially borrowed from this project. However, over time the implementation became very different.

Examples from other open source projects have also been incorporated.




## Help wanted

If you like to help, please review the list of items where [help is needed](https://github.com/codefoundries/isomorphic-material-relay-starter-kit/labels/Help%20wanted).
