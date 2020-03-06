/*function iterativeLog(array) {
 array.forEach(`${index}: ${element}`);
}
return iterativeLog();
*/
function iterativeLog(array) {
 array.forEach((element,index)=> console.log(`${index}: ${element}`));
}
iterativeLog([1,2,3,4,5]);


function iterate(callback) {
  array.forEach(callback);
}
return array;

/*
function iterate(callback, [array]) {
  array.forEach((callback) => [array]);
return array(callback);
}
*/
