function showStr(a: number | string): string {
  // Check if 'a' is a number and return a fixed decimal string if true
  if (typeof a === 'number') {
    return a.toFixed(2); // Converts number to string with 2 decimal places
  }
  // If 'a' is a string, simply return it
  return a;
}
