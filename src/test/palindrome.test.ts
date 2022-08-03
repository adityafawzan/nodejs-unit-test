import { isPalindrome } from "../palindrome";

test("palindrome test", () => {
  const result = isPalindrome("kodok");
  const result2 = isPalindrome("ab");
  const result3 = isPalindrome("aba");

  expect(result).toBe(true);
  expect(result2).toBe(false);
  expect(result3).toBe(true);
});
