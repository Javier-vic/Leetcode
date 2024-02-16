/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){              
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

let aux = twoSum([-1,-2,-3,-4,-5], -8);
console.log(aux);