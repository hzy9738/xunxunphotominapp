import dayjs from 'dayjs'

export const objectToString = (data) => {
  const objArray:string[] = []
  if (Object.prototype.toString.call(data) === "[object Object]" && Object.keys(data).length) {
    for (let i in data) {
      objArray.push(`${i}=${data[i]}`)
    }
  }
  return objArray.join('&')
}

export const weekDay = (date = "") => {
  const day = dayjs(date).day()
  switch (day) {
  case 1:
    return '周一'
  case 2:
    return '周二'
  case 3:
    return '周三'
  case 4:
    return '周四'
  case 5:
    return '周五'
  case 6:
    return '周六'
  case 0:
    return '周日'
  default:
    return ''
  }
}
