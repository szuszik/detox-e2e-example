# detox-e2e-example

E2E tests written in Detox framework with usage of JavaScript, written for the React Native application created by Pinacle QA Academy

## Installation

Use following command to install required modules:

```nodejs
yarn install
```

## Usage

Run following commands to build the application in Debug Mode for Android Device that allows Detox injection, and run the Detox itself.

```nodejs
yarn detox:build:and-debug //Builds the application
yarn start //Runs Metro server in the background
adb reverse tcp:8081 tcp:8081 //If any issues that involve connecting to Metro server occur, ensure that emulator can properly connect to it
yarn detox:test:and-debug //Launches tests on Android device specified in .detoxrc.json file
```

