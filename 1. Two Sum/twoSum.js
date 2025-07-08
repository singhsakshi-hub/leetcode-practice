function twoSum(nums, target) {
    const map = new Map();
    for (i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        if (map.has(rem)) {
            return [map.get(rem), i];
        }
        map.set(nums[i], i);
    }

}

