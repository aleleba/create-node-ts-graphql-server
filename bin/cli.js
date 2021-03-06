#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/aleleba/create-node-ts-graphql-server ${repoName}`;
const installDepsCommand = `cd ${repoName} && rm -rf .git && git init && git add . && git commit -m "Initial commit" && npm install --legacy-peer-deps`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName}`);
console.log('Create a .env file with ENV=development(defauld: production), PORT=4000 (default: 4000), WHITELIST_URLS=your_url(default: http://localhost), GRAPHIQL=true(default: false)');
console.log(`Then you can run: npm start:dev`);