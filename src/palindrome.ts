export const isPalindrome = (str: string) => {
  const str_len = str.length;
  const perulangan = Math.ceil(str_len / 2);

  for (let i = 1; i <= perulangan; i++) {
    if (str.charAt(i - 1) !== str.charAt(str_len - i)) {
      return false;
    }
  }
  return true;
};
