function mergeSort(arr){
	function mergeArray(arr1, arr2){
		var arr = [], i = 0, j = 0, k = 0;

		if(arr2 == undefined){
			return arr1;
		}

		while(arr1[i] != undefined || arr2[j] != undefined){
			if(arr2[j] == undefined || arr1[i] < arr2[j]){
				arr[k] = arr1[i];
				k ++;
				i ++;
			}
			else{
				arr[k] = arr2[j];
				k ++;
				j ++;
			}
		}

		return arr;
	}

	var b = (function(arr){
		if(arr.length == 1){
			return arr[0];
		}

		var tmp = [], j = 0;
		for(var i = 0; i < arr.length; i += 2){
			var a1N = [], a2N = [];
			if(typeof arr[i] === "number"){
				a1N.push(arr[i]);
			}
			else{
				a1N = arr[i];
			}

			if(typeof arr[i + 1] === "number"){
				a2N.push(arr[i + 1]);
			}
			else{
				a2N = arr[i + 1];
			}

			tmp[j] = mergeArray(a1N, a2N);
			j ++;
		}
		if(i == arr.length - 1){
			tmp.push(arr[i - 1]);
		}

		return arguments.callee(tmp);
	})(arr);


	return b;
}

exports.mergeSort = mergeSort;