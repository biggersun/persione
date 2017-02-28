/**
 * Mocking client-server
 */
const _aircles = [
  {"id": 1, "title": "Brendan Lim", "time": 'MAR 5,2016',"year":2015, "content": 'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 2, "title": "to me, Scott, Jennifer", "time": 'JUNE 5,2016',"year":2016, "content": 'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 3, "title": "Brunch this weekend?", "time": 'NUM 5,2016',"year":2015, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 4, "title": "php世界第二", "time": 'NUM 5,2016',"year":2017, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 5, "title": "php世界第一", "time": 'NUM 5,2016',"year":2016, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 6, "title": "php世界第二", "time": 'NUM 5,2016',"year":2015, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 7, "title": "js 世界第五", "time": 'NUM 5,2016',"year":2016, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 8, "title": "java 世界第四", "time": 'NUM 5,2016',"year":2014, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'},
  {"id": 9, "title": "ruby 世界第六", "time": 'NUM 5,2016',"year":2013, "content":'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'}
]

const TIMEOUT = 1000

export default {
  getAircle(cb, timeout) {
    return setTimeout(() => cb(_aircles), timeout || TIMEOUT)
  }
}