import dayjs from 'dayjs'
let oneDayTime = 24 * 60 * 60 * 1000
// 今天 0 点的时间戳
let toDay = new Date()
toDay.setHours(0, 0, 0, 0)
toDay = toDay.getTime()
// 上个月 0 点的时间戳
let lastMonth = dayjs(toDay).subtract(1, 'month').$d.getTime()
// 上个月 0 点的时间戳
let nextMonth = dayjs(toDay).add(1, 'month').$d.getTime()
// 去年 0 点的时间戳
let lastYear = dayjs(toDay).subtract(1, 'year').$d.getTime()

export {
  oneDayTime,
  toDay,
  lastMonth,
  nextMonth,
  lastYear
}