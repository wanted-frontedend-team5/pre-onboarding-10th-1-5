export function emailRegexpMathcher(string) {
  const regExp = /@/;
  if (regExp.test(string)) return true;
  return false;
}

export function passwordRegexpMathcher(string) {
  const regExp = /......../;
  if (regExp.test(string)) return true;
  return false;
}
