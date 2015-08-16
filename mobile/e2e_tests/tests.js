var wd = require('wd');
var _ = require('lodash');

var config = {
  host: 'localhost',
  port: 4723
};

var driver = wd.promiseChainRemote(config);

var appPath = __dirname + '/../platforms/android/build/outputs/apk/android-debug.apk';

var androidCapabilities = {
  browserName: '',
  'appium-version': '1.4.10',
  platformName: 'Android',
  platformVersion: '4.4.4',
  deviceName: '',
  /*
  deviceName is ignores?
  http://appium.io/slate/en/master/?ruby#appium-server-capabilities
  */
  app: appPath
};

driver.init(androidCapabilities)
.then(function() {
  return driver.contexts();
})
.then(function(contexts) {
  return switchToWebViewContext();
})
.then(function() {
  return test();
})
.catch(function(err) {
  console.log('catch', err);
});


function test() {
  return driver.elementById('ziv-take-photo-btn').click()
  .then(function() {
    return switchToNativeContext();
  })
  .then(function() {
    //click take picture
    var resId = 'com.android.camera2:id/shutter_button';
    return clickAndroidElementByResId(resId);
  })
  .then(function() {
    //click picture done
    var resId = 'com.android.camera2:id/btn_done';
    return clickAndroidElementByResId(resId);
  })
  .then(function() {
    return switchToWebViewContext();
  })
  .then(function() {
    return getCropBtn();
  })
  .then(function(btn) {
    btn.click();
  })
  .then(function() {
    return driver.elementsByClassName('ziv-slider-item');
  })
  .then(function(elements) {
    return elements[0].click();
  })
  .then(function() {
    return driver.elementById('ziv-edit-photo-continue-btn').click();
  })
  .catch(function(err) {
    console.log('TEST ERR', err)
  });
}

function getCropBtn() {
  return driver.elementsByClassName('jr-crop')
  .then(function(elements) {
    return elements[0].elementsByTagName('button');
  })
  .then(function(elements) {
    return elements[1];
  });
}

function clickAndroidElementByResId(resId) {
  return getAndroidElementByResId(resId)
  .then(function(element) {
    return element.click();
  });
}

function getAndroidElementByResId(resId) {
  return driver.elementsByAndroidUIAutomator('new UiSelector().resourceId("' + resId + '")')
  .then(function(elements) {
    return Promise.resolve(elements[0]);
  });
}

function switchToWebViewContext() {
  return driver.contexts()
  .then(function(contexts) {
    return getContext(contexts, 'WEBVIEW')
  })
  .then(function(context) {
    return driver.context(context);
  });
}

function switchToNativeContext() {
  return driver.contexts()
  .then(function(contexts) {
    return getContext(contexts, 'NATIVE')
  })
  .then(function(context) {
    return driver.context(context);
  });
}

function getContext(contexts, phrase) {
  var context = _.find(contexts, function(context) {
    return context.indexOf(phrase) != -1;
  });

  if (context) {
    return context;
  } else {
    throw new Error('cannot find ' + phrase + ' context');
  }
}
