function shellSort(arr){
	if(arr.length % 2 == 0){
		gap = arr.length / 2;
	}
	else{
		gap = Math.floor(arr.length / 2) + 1;
	}

	while(gap > 0){
		for(var i = 0; i < gap; i ++){
			for(var j = gap + i; arr[j] != undefined; j += gap){
				for(var k = j; k > i - 1 && arr[k] < arr[k - gap]; k -= gap){
					var tmp = arr[k];
					arr[k] = arr[k - gap];
					arr[k - gap] = tmp;
				}
			}
		}

		if(gap % 2 == 0){
			gap = gap / 2;
		}
		else if(gap == 1){
			break;
		}
		else{
			gap = Math.floor(gap / 2) + 1;
		}
	}
}

exports.shellSort = shellSort;
