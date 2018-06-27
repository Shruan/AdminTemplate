import request from '../request'

export function getActivityList (data) {
  return request.get( // 获取列表
    '/Api/patent/adminlist',
    { params: data }
  )
}
