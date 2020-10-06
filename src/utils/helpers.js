export const groupBy = function (arr, prop) {
  return arr.reduce(function (groups, item) {
    const val = `${new Date(item[prop]).getFullYear()}/${
      new Date(item[prop]).getMonth() + 1
    }/${new Date(item[prop]).getDate()}`

    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}
