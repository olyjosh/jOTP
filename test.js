/**
 * Created by olyjosh on 12/05/2017.
 */
var otp = require('./jOTP');

var secretKey = 'secretKey';  // The key to use in computing OTP. Keep this secret as possible, It should be considered a private key betwwen server and client. Hence will be use for OTP validations
var x = 0; // Specify start time for OTP Calculation
var expiry = 30; // Specify the time in future which OTP will be valid for
var time_in = otp.TIME_IN_SECONDS; // Specify expiry of OTP in seconds, milliseconds, minutes, etc
var otpCodeDigit = 6; // Specify number of character to obtain as OTP
// var otpToken = otp.tOTP('key', 0, 30, otp.TIME_IN_SECONDS, 6);
var otpToken = otp.tOTP('key', x, expiry, time_in, otpCodeDigit);
console.log(otpToken);