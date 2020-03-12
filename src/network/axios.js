import axios from 'axios'

export function HomeInstance(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh/',
    timeout: 10000
  })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 处理代码...

    // 同意继续发送
    return config
  })
  instance.interceptors.response.use(config => {
    
    return config.data
  })
  return instance(config)
}