import io from './io'
import { apiFn } from '@/constant'
import { api } from '@/constant'

export function apiFn[ACCOUNT_USER_INFO] (data, path = '') {
  return io.get(
    api[apiFn.ACCOUNT_USER_INFO] + path,
    data
  )
}
