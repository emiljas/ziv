require('path')
var appPath = __dirname + '/../../platforms/android/build/outputs/apk/android-debug.apk';
var webdriver = require("selenium-webdriver");

var driver = new webdriver.Builder().
  withCapabilities({
    /*deviceName: '192.168.1.102:5555',
    browserName: '',
    platformName: 'Android',
    version:     '4.4',
    app:         appPath,
    autoWebview: true*/

    platformName: 'Android',
    app: appPath,
    browserName: '',
    // automationName: "Selendroid",
    deviceName: 'emulator-5554',//,
    // appActivity: '.MainActivity',
    // appPackage: 'com.ziv',
    appWaitActivity: 'MainActivity',
    deviceReadyTimeout: 10000

  }).
  usingServer('http://localhost:4723/wd/hub').
  build();

var World = function World(callback) {
    this.driver = driver;

    callback();
};

exports.World = World;
