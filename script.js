function makeid(l) {


	let char ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let res= "";
	while(l){
		res += char.charAt(
			Math.floor(Math.random()* char.length)
		 )
		l--;
	}
	return res;

}

const l = prompt("Enter a number.");
alert(makeid(l));
     