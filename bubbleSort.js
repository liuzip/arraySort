function bubbleSort(arr){
	var tmp = null;

	for(var i = arr.length - 1; i > -1; i --){
		for(var j = 0; j < i; j ++){
			if(arr[j] > arr[i]){
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

exports.bubbleSort = bubbleSort;

