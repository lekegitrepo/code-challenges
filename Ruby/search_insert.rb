# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
  return nums.index(target) if nums.index(target)

  low = 0
  high = nums.length-1
    while low <= high
      mid = low + (high-low)/2
      return mid if nums[mid]==target 
      if nums[mid]<target
          low = mid +1
      else
      high  = mid -1
      end
    end
  low
end

p search_insert([1,3,5,6], 5)
