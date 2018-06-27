import request from '../request'

export function getActivityList (data) {
  return request.get(
    '/Api/patent/adminlist',
    { params: data }
  )
}
