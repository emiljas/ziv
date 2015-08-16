var wd = require('wd');

var webdriver = require("selenium-webdriver");
var By = require('selenium-webdriver').By;

var appSteps = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^I load the app$/, function(callback) {
    var driver = this.driver;

driver.switchTo().window("NATIVE");

    // callback();

    // driver.getAllWindowHandles().then(function() {
    //   console.log(arguments);
    // });

// setTimeout(callback, 21000);
    // console.log("1");
    // var browser = wd.remote('http://localhost:4723/wd/hub', 'promiseChain');
    // console.log("2");

    // callback();
    // console.log("Y");
    // driver.getAllWindowHandles().then(function(handles) {
      // console.log("X", handles);
      // callback();
    //   // console.log("B");
    //   driver.switchTo().window(handles[0]).then(function() {
    //     callback();
    //   });
    // });
  });

  this.Then(/^I should see "([^"]*)"$/, function(text, callback) {
    var self = this;

console.log("NOW!");
// setTimeout(function() {
//
//
//   // self.driver.switchTo().window("NATIVE");
//   // for(var prop in self.driver) console.log(prop);
//
//
//
//     var browser = wd.remote('http://localhost:4723/wd/hub', 'promiseChain');
//     // console.log("1");
//     browser.contexts().then(function() {
//       console.log("2");
//       console.log(arguments);
//       callback();
//     });
//
// }, 20000);

    // var driver = wd.promiseChainRemote();
    // for(var prop in this.driver)
    // console.log(prop);


    // for(var prop in wd) console.log(prop);

    // console.log(wd.SPECIAL_KEYS);
    // console.log("X", browser.deviceKeyEvent.toString());
    // var self = this;
    // setTimeout(function() {
    //   console.log(self.driver.context);

      // console.log(wd.SPECIAL_KEYS['Up arrow']);
      // browser.deviceKeyEvent(wd.SPECIAL_KEYS['Up arrow']);
      // console.log("NOW");

      // for(var prop in wd.SPECIAL_KEYS)
      // browser.deviceKeyEvent(wd.SPECIAL_KEYS[prop]);
      //
      // self.driver.switchTo().window("NATIVE_APP")
      // .then(function() {
      //   self.driver.findElement(By.id("xyzBtn")).click();
      // });

      // self.driver.getAllWindowHandles().then(function(handles) { console.log(handles); });
      // self.driver.context("NATIVE_APP");

      // for(var prop in self.driver) console.log(prop);

      // var c = self.driver.switchTo();//.window("NATIVE_APP");
    // for(var prop in c.driver) console.log(prop);

    // self.driver.findElement(webdriver.By.id('com.android.camera2:id/shutter_button')).click();
    // console.log(self.driver.findElements());
    // driver.findElement(By.name('q'))
    // browser.quit().then(function() { console.log("QUIT"); callback(); });


  // }, 1000);



      // self.driver.getAllWindowHandles().then(function(handles) { console.log(handles); });

// browser.contexts().then(function() {
//   console.log("C", arguments);
//   callback();
// });


    // this.driver.findElement(webdriver.By.id('xyzBtn')).click()
    // .then(function() {
    //   console.log("AFTER CLICK");
    //
    //   // self.driver.contexts().then(function() { console.log("C"); });
    //
    //   setTimeout(function() {
    //
    //   // browser.contexts().then(function() { console.log(arguments); });
    //   self.driver.switchTo().window("NATIVE");
    //
    //   }, 2000);
    //
    // });


    // driver.elementById('xyzBtn').tap().done();



    // console.log(browser);
    //
    // setTimeout(function() {
    //
    // driver.elementById('xyzBtn')
    // .then(function() {
    //   console.log("HERE", arguments);
    // })
    // .catch(function() {
    //   console.log("2HERE", arguments);
    // });
    // }, 8000);


    // this.driver.getPageSource().then(function(source) {
    //   if(source.match(new RegExp(text))) {
    //     callback();
    //   }
    //   else {
    //     callback.failure();
    //   }
    // });
  });
};

module.exports = appSteps;
