function copyArr(arr){
  var copiedArr = [];
  for(var i = 0; i < arr.length; i++){
    copiedArr.push(arr[i]);
  }
  return copiedArr;
}
function sortByCategory(array, category, left, right){
  if(left === undefined){
    left = 0;
    right = array.length - 1;
  }
  if((right - left) >= 1){
    var wall = left;
    var pivot = array[right];
    for (var i = left; i < right; i++){
      if(array[i][category] < pivot[category]){
        var temp = array[i];
        array[i] = array[wall];
        array[wall++] = temp;
      }
    }
    array[right] = array[wall];
    array[wall] = pivot;
    sortByCategory(array, category, left, wall - 1);
    sortByCategory(array, category, wall + 1, right);
  }
  return array;
}

module.exports = {
  copy: copyArr,
  sortByCategory: quickSort
};