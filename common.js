function randomArray(n){
	var arr = [];
	for(var i = 0; i < n; i ++){
		arr.push(Math.floor(Math.random() * n * 10));
	}

	return arr;
}

function arrayDump(src){
	var arr = [];
	for(var i = 0; i < src.length; i ++){
		arr.push(src[i]);
	}

	return arr;
}

exports.randomArray = randomArray;
exports.arrayDump = arrayDump;
