$(document).ready(function() {
	var temp = "0";
	var equal = false;
	var sum = 0;
	var r = true;
	var Decimal = true;
	var pre_operator = "";
	var operator = "";

	$(".button").click(function () {
		
		if ( this.classList[0]=="operator" ) {

			if (equal)equal=false;

			Decimal = true;

			if (operator!="") {

				switch (operator) {
					case "Division":
						sum/=Number(temp);
						operator = "";
						break;

					case "Multiply":
						sum*=Number(temp);
						operator = "";
						break;

					case "Subtraction":
						sum-=Number(temp);
						operator = "";
						break;

					case "Addition":
						sum+=Number(temp);
						operator = "";
						break;
					default:
						break;
				}

				$("#terminal").text(String(sum));
				temp = "0";
			}
			
			if (this.id!="Equal"){
				operator = this.id;

				if (r) {
					sum = Number(temp);
					temp = "0";
					r = false;
				}
			}	else {
				equal = true;

			}
			
		} else {

			if (equal) {
				console.log("Equal");
				// temp = "0";
				r = true;
				Decimal = true;
				operator = "";
				equal = false;
			}
			switch(this.id) {
				case "clear":
					temp = "0";
					sum = 0;
					r = true;
					Decimal = true;
					operator = "";
					break;
				case "Num_0":
					if ( temp!="0")temp += "0"; 
					break;
				case "Num_1":
					if ( temp!="0")temp += "1";
					else temp = "1"; 
					break;
				case "Num_2":
					if ( temp!="0")temp += "2";
					else temp = "2"; 
					break;
				case "Num_3":
					if ( temp!="0")temp += "3";
					else temp = "3"; 
					break;
				case "Num_4":
					if ( temp!="0")temp += "4";
					else temp = "4"; 
					break;
				case "Num_5":
					if ( temp!="0")temp += "5";
					else temp = "5"; 
					break;
				case "Num_6":
					if ( temp!="0")temp += "6";
					else temp = "6"; 
					break;
				case "Num_7":
					if ( temp!="0")temp += "7";
					else temp = "7"; 
					break;
				case "Num_8":
					if ( temp!="0")temp += "8";
					else temp = "8"; 
					break;
				case "Num_9":
					if ( temp!="0")temp += "9";
					else temp = "9"; 
					break;
				case "Decimal":
					if (Decimal) {
						temp += "."; Decimal = false;
					}
					break;	
				case "PN":
					temp = Number($("#terminal").text());
					temp *= -1;
					break;
				case "percent":
					temp = Number($("#terminal").text());
					temp /= 100;
					break;
				default:
					$("#terminal").text('錯誤');
					break;
			}
			$("#terminal").text(temp);
			
		}
		console.log("operator "+operator);
		console.log("sum "+sum);
		console.log("temp "+temp);
		
	})
});