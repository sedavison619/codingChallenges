function arraysSimilar(arr1, arr2) {
  let sortedArr1 = arr1.sort()
  let sortedArr2 = arr2.sort()
  if (arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; i < arr1.length; i++){
    if (sortedArr1[i] !== sortedArr2[i]){
      return false
    }
  }
  return true
}