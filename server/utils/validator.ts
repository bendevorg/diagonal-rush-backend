export function isValidJSON(JSONToValidate: string): boolean {
  try {
    JSON.parse(JSONToValidate);
  } catch (err) {
    return false;
  }
  return true;
}

export function isValidString(stringToValidate: any): boolean {
  return (
    typeof stringToValidate === 'string' && stringToValidate.trim().length > 0
  );
}
