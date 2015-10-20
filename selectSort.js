function selectSort(arr){
	var tmp = null, k = 0;

	for(var i = 0; i < arr.length; i ++){
		k = i;
		for(j = i; j < arr.length; j ++){
			if(arr[k] > arr[j]){
				k = j;
			}
		}

		if(k != i){
			tmp = arr[k];
			arr[k] = arr[i];
			arr[i] = tmp;
		}
	}
}

exports.selectSort = selectSort;
