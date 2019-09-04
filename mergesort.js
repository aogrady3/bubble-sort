function split(wholeArray) {
    const length = wholeArray.length / 2;
    const firstHalf = wholeArray.slice(0, length);
    const secondHalf = wholeArray.slice(length);
    return [firstHalf, secondHalf];
  }
  //-----------------
  function merge(arr1, arr2) {
    let final = [];
    let combinedLength = arr1.length + arr2.length;
    for (let i = 0; i < combinedLength; i++) {
      let firstArr1 = arr1[0];
      let firstArr2 = arr2[0];
      if (firstArr1 < firstArr2 || firstArr2 === undefined) {
        final.push(firstArr1);
        arr1.shift();
      } else if (firstArr2 < firstArr1 || firstArr1 === undefined) {
        final.push(firstArr2);
        arr2.shift();
      }
    }
    return final;
  }
  //---------------
  function mergeSort(array) {
    // if (array.length !== 1) {
    //   console.log(array);
    //   return mergeSort(split(array));
    // } else {
    //   return array;
    // }
    console.log(array);
    if (array.length <= 1) {
      return array;
    }
    const splitArray = split(array);
    const left = splitArray[0];
    const right = splitArray[1];
    return merge(mergeSort(left), mergeSort(right));
  }
  