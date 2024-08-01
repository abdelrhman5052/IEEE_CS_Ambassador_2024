
function searchAboutTarget(nums, target) {

  // .1 Example one
  nums = [5,7,7,8,8,10];
  target = 8;

  // .2 Example two 
  // nums = []
  // target = 0

// .3 Example three
  // nums = [5,7,7,8,8,10]
  // target = 6

  //--------

  if (nums.length === 0) {
    return [-1, -1];
  } 

  let left = 0;
  let right = nums.length-1;
  let lower = -1;
  let higher = -1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  lower = left; 
  left = 0;
  right = nums.length-1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < nums[mid]) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
  }

  higher = right;

  return lower <= higher ? [lower, higher] : [-1, -1]

}

console.log(searchAboutTarget())