function insertSort(arr){
	for(var i = 1; i < arr.length; i ++){
		for(var j = i; j > 0 && arr[j] < arr[j - 1]; j --){
			var tmp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = tmp;
		}
	}
}

exports.insertSort = insertSort;



