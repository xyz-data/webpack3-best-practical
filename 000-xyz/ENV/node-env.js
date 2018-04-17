

/*

# Windows CMD
set NODE_ENV=production


# Windows PowerShell:
$env:NODE_ENV="production"

# https://www.npmjs.com/package/cross-env
cross-env NODE_ENV=production my-command


//package.json

"scripts": {
    "start": "node index.js"
    "start_windows": "set NODE_ENV=production && npm start"
}

# https://docs.npmjs.com/cli/run-script
npm run env NODE_ENV=production

*/


/*

https://www.npmjs.com/package/cross-env

# Bash on Windows

https://msdn.microsoft.com/en-us/commandline/wsl/about
https://docs.microsoft.com/zh-cn/windows/wsl/about


$ npm install --save-dev cross-env
$ npm i -D cross-env

{
    "scripts": {
        "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js",
        "prod": "cross-env NODE_ENV=production webpack -p",
        "dev": "cross-env NODE_ENV=development webpack -w",
    }
}


# dotenv(.env) is a zero-dependency module that loads environment variables from a .env file into process.env.

$ npm install dotenv --save

# https://www.npmjs.com/package/dotenv
$ npm i -D dotenv

*/


/*

# Windows:

SET NODE_ENV=development
#
set NODE_ENV=development


# OS X / Linux:

export NODE_ENV=development



*/

/*

npm i -D dotenv

{
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=s1mpl3
}

var db = require('db');;

db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
});


$ node -r dotenv/config your_script.js
$ node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars


*/


/*

# https://nodejs.org/api/process.html#process_process_env

# bad
$ node -e 'process.env.foo = "bar"' && echo $foo

# good
process.env.foo = 'bar';
console.log(process.env.foo);

# Assigning a property on process.env will implicitly convert the value to a string.

process.env.test = null;
console.log(process.env.test);
// => 'null'
process.env.test = undefined;
console.log(process.env.test);
// => 'undefined'

# Use delete to delete a property from process.env.

process.env.TEST = 1;
delete process.env.TEST;
console.log(process.env.TEST);
// => undefined

# On Windows operating systems, environment variables are case-insensitive.

process.env.TEST = 1;
console.log(process.env.test);
// => 1

delete process.env.TEST;
console.log(process.env.TEST);
// => undefined

*/


/*

Crayon Syntax Highlighter

https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html


# sysdm.cpl

https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html

echo %TWILIO_ACCOUNT_SID%




http://npm.im/dotenv

# dotenv

console.log('No value for FOO yet:', process.env.FOO);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

console.log('Now the value for FOO is:', process.env.FOO);



$ npm install if-env --save

"scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:dev": "webpack",
    "start:prod": "start-cluster"
}

*/


/*

# node env


https://davidwalsh.name/node-environment-variables

# sensitive information

> security

https://davidwalsh.name/node-environment-variables

> One of the best ways to use `sensitive information` in `open source repositories` without `hard-coding `the information within publicly available repositories is `setting environment variables`.


![image](https://user-images.githubusercontent.com/29531779/35491863-2fcc796c-04e4-11e8-997f-dbb56bb2f37d.png)

process.env.NODE_ENV

*/
