let arr = [10, 20, 30, 40, 50, 60, 70];
let key = 50;
let flag = 0;
let high = arr.length - 1;
let low = 0;

while (low <= high) {
  let mid = Math.trunc((high + low) / 2);

  if (arr[mid] == key) {
    flag = 1;
    break;
  } else if (arr[mid] < key) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

if (flag == 1) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
