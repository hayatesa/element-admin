import request from '@/utils/request'
import prefix from '@/config/apiAddress'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: `${prefix.AUTH_ADDRESS}/auth/token`,
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: `${prefix.AUTH_ADDRESS}/auth/logout`,
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: `${prefix.SYS_ADDRESS}/user/info`,
    method: 'get'
  })
}

