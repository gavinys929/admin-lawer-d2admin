import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export function CheckLogin () {
  return request({
    url: '/api/check_login',
    method: 'get'
  })
}

export function AccountLogout () {
  return request({
    url: '/api/logout',
    method: 'get'
  })
}
