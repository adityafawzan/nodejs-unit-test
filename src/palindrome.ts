export const isPalindrome = (str: string) => {
  const str_len = str.length;

  for (let i = 0; i < str_len; i++) {
    if (str.charAt(i) !== str.charAt(str_len - 1 - i)) {
      return false;
    }
  }
  return true;
};
