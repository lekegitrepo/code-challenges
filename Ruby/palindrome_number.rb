# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  x.to_s.reverse.to_i == x
end

p is_palindrome(121)

p is_palindrome(-121)

p is_palindrome(10)

p is_palindrome(-101)
