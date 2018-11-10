import io from './io'

export function getHomeTableList (data) {
  return io.get( // 获取列表
    '/Api/home/list',
    { params: data }
  )
}

export function getReportDtl (data) {
  return io.get( // 获取列表
    '/Api/home/detail',
    { params: data }
  )
}
