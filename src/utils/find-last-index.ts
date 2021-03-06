/**
 * Returns the index of the last element in the array where predicate is true, and `-1`
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns index of that element. Otherwise, find returns `-1`.
 */
export function findLastIndex<T>(arr: T[], predicate: (value: T, index?: number, obj?: T[]) => unknown): number {
  arr = arr || [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i];
    if (predicate(value, i, arr)) {
      return i;
    }
  }
  return -1;
}
