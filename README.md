# jOTP
A node module for generating TOTP base on implementation of [https://tools.ietf.org/html/rfc6238] (IETF rfc6238). This will produce thesame OTP with other implemented languages here listed.

##Usage
    install via npm
    npm install jotp

    Generate Time-One Time Password(TOTP) as follow. The below approach uses timestamp

        var otp = require('jOTP');

        The below approach uses timestamp

        var secretKey = 'secretKey';  // The key to use in computing OTP. Keep this secret as possible, It should be considered a private key betwwen server and client. Hence will be use for OTP validations
        var x = 0; // Specify start time for OTP Calculation
        var expiry = 30; // Specify the time in future which OTP will be valid for
        var time_in = otp.TIME_IN_SECONDS; // Specify expiry of OTP in seconds, milliseconds, minutes, etc
        var otpCodeDigit = 6; // Specify number of character to obtain as OTP

        // var otpToken = otp.tOTP('secretKey', 0, 30, otp.TIME_IN_SECONDS, 6);
        var otpToken = otp.tOTP(secretKey, x, expiry, time_in, otpCodeDigit);
        console.log(otpToken);


        You can explicitly specify the time you want OTP to be computed for as follow.

        //var otpToken = otp.tOTPTime('secretKey', new Date().getTime(), 0, 30, otp.TIME_IN_SECONDS, 6);
        var otpToken = otp.tOTPTime(secretKey, new Date().getTime(), x, expiry, time_in, otpCodeDigit);
        console.log(otpToken);


All issues and pull request should be submitted to [jOTP](https://github.com/olyjosh/jotp)

## Author
### Joshua Aroke (Olyjosh)

Implemetation of
+ [https://tools.ietf.org/html/rfc6238] (IETF rfc6238)




###MIT License

Copyright (c) 2017 olyjosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

