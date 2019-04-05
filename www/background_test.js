function CDVJSBridge() {
}

CDVJSBridge.prototype.run = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CDVJSBridge", "run", [""]);
};

CDVJSBridge.install = function () {
  window.backgroundJsBridge = new CDVJSBridge();
  return window.backgroundJsBridge;
};

cordova.addConstructor(CDVJSBridge.install);