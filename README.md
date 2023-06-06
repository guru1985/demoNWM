# demoNWM
www.saucedemo.com UI automation for demo
"http://jsonplaceholder.typicode.com" API Automation for demo

1. Clone the Repo
2. Install Node (v18.16.0)
3. check your chrome version - it might need a change in the chromedriver version in the package.json
4. change to the right chromedriver version and run npm i
5. npm i
6. Run UI Tests command: npm run e2e-test
7. Run API Tests command: npm run api-test
8. If you face issue like "No test files found:"$(find"
9. Change the package.json - set api-test under scripts as "mocha --recursive $(find testAPI -name '*.js')"

You are all Set!!

This project is also run via Jenkins
It is a local host setup and both API and UI tests can be run with a single build .
