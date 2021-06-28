# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  x.to_s.reverse.to_i == x
end

# def is_palindrome(x, y = x.to_s)
#   y == y.reverse
# end

# def is_palindrome(x)
#   n = x
#   reverse_x = 0
#   while(n > 0)
#     reverse_x = (reverse_x*10 + (n%10))
#     n /= 10
#   end
#   x == reverse_x
# end

p is_palindrome(121)

p is_palindrome(-121)

p is_palindrome(10)

p is_palindrome(-101)
