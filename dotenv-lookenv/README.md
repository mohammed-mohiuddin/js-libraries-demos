# install required packages
yarn add express    
yarn add nodemon
yarn add dotenv
yarn add lookenv

# create environment variables file
create a .env file in the root(default), which includes all the required environment variables to be loaded, as key value pairs. If we would like to place the .env file at a different location. then we can specify the custom path, using options object given to config.(e.g config({path: 'custom/path/to/file'})).

# preload the environment variables
preload the dotenv module, using the --require(-r) option provided by node. Dotenv module can be loaded from the code, but i prefer preloading the module.

# use it in the code
All the environment variables are injected into the process.env object. Suppose if we would like to access the DEVELOPMENT_HOST variable, it can accessed as process.env.DEVELOPMENT_HOST.

# lookenv
lookenv is used to validate the environment variables and provide defaults to some variables. It also works with dotenv. Dotenv should be started before lookenv. In case, if the .env file is located in onother location, than the default(project root), it can be passed as an argument (--dotenv=path/to/the/file). Here dotenv is loaded first, then the validation or substitution takes place.

Since lookenv is starting the dotenv, we don't need to manually call config from code.
