export const flattenObject = (obj: any, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "_" : "";
    if (typeof obj[k] === "object")
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {})

  export const reOrderArray = (arr: any, from: number, to: number) => {
    
    arr.splice(to, 0, arr.splice(from, 1)[0])
    return arr;
};
