function quickSort(arr, l, r){
	var i = l, j = r, tmp = null;
	if(l == undefined){
		i = 0;
	}

	if(r == undefined){
		j = arr.length - 1;
	}

	tmp = arr[i];

	if(i < j){
		while(i < j){
			while(arr[i] <= arr[j] && i < j){
				j --;
			}
			if(arr[i] > arr[j] && i < j){
				arr[i] = arr[j];
				arr[j] = tmp;
				tmp = arr[i];
			}

			while(arr[i] <= arr[j] && i < j){
				i ++;
			}

			if(arr[i] > arr[j] && i < j){
				tmp = arr[j];
				arr[j] = arr[i];
				arr[i] = tmp;
			}
		}
		arguments.callee(arr, l, i - 1);
		arguments.callee(arr, i + 1, r);
	}
}

exports.quickSort = quickSort;
