function createPhoneNumber(nums) {
  return `(${nums[0].toString() + nums[1] + nums[2]}) ${nums[3].toString() + nums[4] + nums[5]}-${nums[6].toString() + nums[7] + nums[8] + nums[9]}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))