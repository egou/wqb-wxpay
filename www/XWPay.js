var wxpay = {
    pay: function(params, success, failure) {
        cordova.exec(
            success, // success callback function
            failure, // error callback function
            'WXPay', // mapped to our native Java class called "CalendarPlugin"
            'pay', // with this action name
            [
				params
			]
        ); 
    }
}
module.exports = wxpay;