var twoSum = function (nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        const num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }

};

console.log(twoSum([2, 7, 11, 15], 9));