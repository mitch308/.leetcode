/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (x === 0) {
      return 0;
  }
  if (n === 0) {
      return 1;
  }
  if (n < 0) {
      x = 1 / x;
      n = -n;
  }
  let ans = 1;
  let currentProduct = x;
  while (n > 0) {
      if ((n & 1) === 1) {
          ans *= currentProduct;
      }
      currentProduct *= currentProduct;
      n = Math.floor(n / 2);
  }
  return ans;
}
// @lc code=end

