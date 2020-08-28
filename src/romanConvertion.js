// Implement the romanConvertion function here
function romanConvertion(nb) {
    let A = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
	R = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
	Alength = A.length;
    
    let x = parseInt( nb, 10 ) || 1,
		str = "";
 
	if ( x < 1 ){
		x = 1;
	} else if ( x > 3999 ){
		x = 3999;
	}

	for ( let i = 0; i < Alength; ++i ){
		while ( x >= A[ i ] ){
			x -= A[ i ];
			str += R[ i ];
		}
 
		if ( x == 0 ){
			break;
		}
	}
 
    return str;
}
module.exports = romanConvertion;

//https://www.developpez.net/forums/d1276262/webmasters-developpement-web/general-conception-web/contribuez/conversion-chiffres-arabes-chiffres-romains-inversement/