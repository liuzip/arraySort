var randomArray = require("./common").randomArray;
var arrayDump = require("./common").arrayDump;

var bubbleSort = require("./bubbleSort").bubbleSort;
var insertSort = require("./insertSort").insertSort;
var quickSort = require("./quickSort").quickSort;
var selectSort = require("./selectSort").selectSort;
var shellSort = require("./shellSort").shellSort;
var mergeSort = require("./mergeSort").mergeSort;


var src = randomArray(50000);
//console.log(src);
var arr = [];
/******************************************************************************************************/
var d = new Date();
var former = d.getTime();
arr = arrayDump(src);

bubbleSort(arr);

d = new Date();
console.log("bubble sort " + (d.getTime() - former) + " milli seconds");
/******************************************************************************************************/
d = new Date();
former = d.getTime();
arr = arrayDump(src);

insertSort(arr);

d = new Date();
console.log("insert sort " + (d.getTime() - former) + " milli seconds");
/******************************************************************************************************/
d = new Date();
former = d.getTime();
arr = arrayDump(src);

quickSort(arr);

d = new Date();
console.log("quick sort " + (d.getTime() - former) + " milli seconds");
/******************************************************************************************************/
d = new Date();
former = d.getTime();
arr = arrayDump(src);

selectSort(arr);

d = new Date();
console.log("select sort " + (d.getTime() - former) + " milli seconds");
/******************************************************************************************************/
d = new Date();
former = d.getTime();
arr = arrayDump(src);

shellSort(arr);

d = new Date();
console.log("shell sort " + (d.getTime() - former) + " milli seconds");
/******************************************************************************************************/
d = new Date();
former = d.getTime();
arr = arrayDump(src);

mergeSort(arr);

d = new Date();
console.log("merge sort " + (d.getTime() - former) + " milli seconds");
/******************************************************************************************************/
