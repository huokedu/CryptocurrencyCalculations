	function hasNumbers(string){
		var reg = /\d/;
		var results = reg.test(string);
		return results;	
	}
		
	function formatValue(value, format='0,000.00') {
			var number = numeral(value).format(format);
			//var value = number.value();
			return number;
	}
	
	function log(log) {
		return console.log(log);	
	}
	
	function validInput(value) {
		return (value >= 0) ? true : false;
	}
	
	function v(value,setValue='0',newValue='') {
		if( validInput( document.getElementById(value).value ) )  {
			return document.getElementById(value).value;
		}	
		return;
	}
	
	function isEmpty(value) {
		if( value == '' ) {
			return 1;
		} else { return 0; }
	}
		
	function roundUP(number) {
		return Math.round10(number, -4);
	}
	
	function moneyFormat(price, sign = '$') {
		if(Number.isInteger(price)){
			const pieces = parseFloat(price).toFixed(2).split('')
			let ii = pieces.length - 3
			while ((ii-=3) > 0) {
				pieces.splice(ii, 0, ',')
			}
		return sign + pieces.join('')
		}
	}
	
	function stringToInteger(input){
		let number = parseFloat(input);
		if(typeof number == "number") {
			return number;
		}
	}


	function getBootstrapDeviceSize() {
		return $('#users-device-size').find('div:visible').first().attr('id');
	}

	//console.log(getBootstrapDeviceSize());

	function smallWindowSize(){
		//log(window.outerWidth);	// <= 991px
		if(window.outerWidth <= 991){
			return true;
		}
		return false;
	}
