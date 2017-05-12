/**
 * Created by olyjosh on 10/05/2017.
 */

!function (globals) {
    'use strict'

    const crypto = require('crypto'),
        convertHex = require('convert-hex');

    var jOTP = {

        TIME_IN_MILLI_SECONDS: 1,
        TIME_IN_SECONDS: 1000,
        TIME_IN_MINUTES: 60 * 1000,
        TIME_IN_HOURS: 60 * 60 * 1000,
        TIME_IN_DAYS: 24 * 60 * 60 * 1000,


        /**
         * @param secretKey is the key you use in generating others.OTP. Keep this secret and secure as possible.
         *                  You are advised to encrypt your secretKey and to even load it in ram while you use this for a short period of time
         * @param timeStamp is the time you want others.OTP to be generated for you. You are expected to use System.currentTimeMillis() to get system time.
         * @param t0 is the time in the past you are considering.
         * @param timeRange is the range of time the others.OTP is meant to be valid for. This is the same as expiry
         * @param time_in is the type of time you are computing others.OTP for. to specify others.OTP timeRange(validity) that last for seconds, minutes, hours, etc
         * @param codeDigits is the number of charaters that you want others.OTP to be
         * @return will return String of others.OTP
         */
        tOTPTime: function (secretKey, timeStamp, t0, timeRange, time_in, codeDigits) {
            return tOTP(secretKey, timeStamp, t0, timeRange, time_in, codeDigits);
        },

        /**
         * @param secretKey is the key you use in generating others.OTP. Keep this secret and secure as possible.
         *                  You are advised to encrypt your secretKey and to even load it in ram while you use this for a short period of time
         * @param t0 is the time in the past you are considering.
         * @param timeRange is the range of time the others.OTP is meant to be valid for. This is the same as expiry
         * @param time_in is the type of time you are computing others.OTP for. to specify others.OTP timeRange(validity) that last for seconds, minutes, hours, etc
         * @param codeDigits is the number of charaters that you want others.OTP to be
         * @return will return String of others.OTP
         */
        tOTP: function (secretKey, t0, timeRange, time_in, codeDigits) {
            return tOTP(secretKey, new Date().getTime(), t0, timeRange, time_in, codeDigits);
        }


    }


    function tOTP(secretKey, timeStamp, t0, timeRange, time_in, codeDigits) {
        var T = parseInt(((timeStamp - t0) / time_in) / timeRange);
        var hmac = crypto.createHmac('sha1', secretKey);
        hmac.update(T.toString(), 'ascii');
        var signature = hmac.digest('hex');
        var hash = convertHex.hexToBytes(signature);

        return truncate(hash, codeDigits);
    }

    // console.log(tOTP("Joshua", new Date().getTime(), 0, 30, 1000, 6));
    function truncate(x, codeDigit) {

        var DIGITS_POWER
            // 0 1  2   3    4     5      6       7        8
            = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];

        var hash = x;
        var offset = hash[hash.length - 1] & 0xf;

        var binary =
            ((hash[offset] & 0x7f) << 24) |
            ((hash[offset + 1] & 0xff) << 16) |
            ((hash[offset + 2] & 0xff) << 8) |
            (hash[offset + 3] & 0xff);

        var otp = binary % DIGITS_POWER[codeDigit];

        var result = otp.toString();
        ;
        while (result.length < codeDigit) {
            result = "0" + result;
        }
        return result;
    }


    if (typeof module !== 'undefined' && module.exports) { //CommonJS
        module.exports = jOTP
    } else {
        globals.jOTP = jOTP
    }

}(this);