/**
 *  Diagnostic plugin for Windows 10 Universal
 *
 *  Copyright (c) Next Wave Software, Inc.
**/
var Diagnostic = function () { };

/**
 * Checks if location is enabled.
 *
 * @param {Function} successCallback - The callback which will be called when diagnostic is successful. 
 * This callback function is passed a single boolean parameter with the diagnostic result.
 * @param {Function} errorCallback -  The callback which will be called when diagnostic encounters an error.
 *  This callback function is passed a single string parameter containing the error message.
 */
Diagnostic.prototype.isLocationEnabled = function (successCallback, errorCallback) {
    return cordova.exec(successCallback,
		errorCallback,
		'Diagnostic',
		'isLocationEnabled',
		[]);
};

/**
 * Checks if Wifi is enabled.
 * On Android this returns true if the WiFi setting is set to enabled.
 *
 * @param {Function} successCallback -  The callback which will be called when diagnostic is successful.
 * This callback function is passed a single boolean parameter with the diagnostic result.
 * @param {Function} errorCallback -  The callback which will be called when diagnostic encounters an error.
 *  This callback function is passed a single string parameter containing the error message.
 */
Diagnostic.prototype.isWifiEnabled = function (successCallback, errorCallback) {
    return cordova.exec(successCallback,
		errorCallback,
		'Diagnostic',
		'isRadioEnabled',
		['wifi']);
};

/**
 * Checks if Bluetooth is enabled
 *
 * @param {Function} successCallback -  The callback which will be called when diagnostic is successful.
 * This callback function is passed a single boolean parameter with the diagnostic result.
 * @param {Function} errorCallback -  The callback which will be called when diagnostic encounters an error.
 *  This callback function is passed a single string parameter containing the error message.
 */
Diagnostic.prototype.isBluetoothEnabled = function (successCallback, errorCallback) {
    return cordova.exec(successCallback,
		errorCallback,
		'Diagnostic',
		'isRadioEnabled',
		['bluetooth']);
};

/**
 * Checks if camera exists.
 *
 * @param {Function} successCallback -  The callback which will be called when diagnostic is successful.
 * This callback function is passed a single boolean parameter with the diagnostic result.
 * @param {Function} errorCallback -  The callback which will be called when diagnostic encounters an error.
 *  This callback function is passed a single string parameter containing the error message.
 */
Diagnostic.prototype.isCameraEnabled = function (successCallback, errorCallback) {
    return cordova.exec(successCallback,
		errorCallback,
		'Diagnostic',
		'isCameraEnabled',
		[]);
};

/**
 * Switches to the Location page in the Settings app
 */
Diagnostic.prototype.switchToLocationSettings = function () {
    return cordova.exec(null,
		null,
		'Diagnostic',
		'switchToLocationSettings',
		[]);
};

/**
* Switches to the Mobile Data page in the Settings app
*/
Diagnostic.prototype.switchToMobileDataSettings = function () {
    return cordova.exec(null,
		null,
		'Diagnostic',
		'switchToMobileDataSettings',
		[]);
};

/**
 * Switches to the Bluetooth page in the Settings app
 */
Diagnostic.prototype.switchToBluetoothSettings = function () {
    return cordova.exec(null,
		null,
		'Diagnostic',
		'switchToBluetoothSettings',
		[]);
};

/**
 * Switches to the WiFi page in the Settings app
 */
Diagnostic.prototype.switchToWifiSettings = function () {
    return cordova.exec(null,
		null,
		'Diagnostic',
		'switchToWifiSettings',
		[]);
};

/**
 * Enables/disables WiFi on the device.
 *
 * @param {Function} successCallback - function to call on successful setting of WiFi state
 * @param {Function} errorCallback - function to call on failure to set WiFi state.
 * This callback function is passed a single string parameter containing the error message.
 * @param {Boolean} state - WiFi state to set: TRUE for enabled, FALSE for disabled.
 */
Diagnostic.prototype.setWifiState = function (successCallback, errorCallback, state) {
    return cordova.exec(successCallback,
		errorCallback,
		'Diagnostic',
		'setRadioState',
		['wifi', state]);
};

/**
 * Enables/disables Bluetooth on the device.
 *
 * @param {Function} successCallback - function to call on successful setting of Bluetooth state
 * @param {Function} errorCallback - function to call on failure to set Bluetooth state.
 * This callback function is passed a single string parameter containing the error message.
 * @param {Boolean} state - Bluetooth state to set: TRUE for enabled, FALSE for disabled.
 */
Diagnostic.prototype.setBluetoothState = function (successCallback, errorCallback, state) {
    return cordova.exec(successCallback,
		errorCallback,
		'Diagnostic',
		'setRadioState',
		['bluetooth', state]);
};

module.exports = new Diagnostic();
