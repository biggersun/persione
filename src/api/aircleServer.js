/**
 * Mocking client-server
 */
const _aircles = [
  {"id": 1, "title": "javascript优化", "time": 'MAR 5,2016',"year":2015, "content": 'asdasdasdasd'},
  {"id": 2, "title": "python最牛逼", "time": 'JUNE 5,2016',"year":2016, "content": 'dasdasdasdasd'},
  {"id": 3, "title": "php世界第一", "time": 'NUM 5,2016',"year":2015, "content":'sdasdasdbadb阿斯顿白色的'},
  {"id": 3, "title": "php世界第二", "time": 'NUM 5,2016',"year":2017, "content":'sdasdasdbadb阿斯顿白色的'},
  {"id": 3, "title": "php世界第三", "time": 'NUM 5,2016',"year":2015, "content":'sdasdasdbadb阿斯顿白色的'}
]

const TIMEOUT = 1000

export default {
  getAircle(cb, timeout) {
    return setTimeout(() => cb(_aircles), timeout || TIMEOUT)
  }
}