// 正常 只导出一个 只需 export default
// 但考虑到后期导出多个
// 将关于网络请求方面的文件导入此处 
import axios from "axios";
// success failure 本身是函数  
export function request(config) {  //, success, failure
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 6000
  })
  // 拦截器 可拦截全局可拦截实例
  // 请求成功/失败 响应成功/失败 四个拦截 两个参数 一个成功/一个失败
  instance1.interceptors.request.use(
    config => {
      console.log(config);
      // 拦截下来 一定要返回出去 否则拿不到数据
      // 1.比如config中的一些信息不符合服务器的要求
      // 2.比如每次发送网络请求时 都希望在界面中显示一个请求的图标
      // 3.某些网络请求(比如登录(token)) 必须携带一些特殊的信息
      return config
    },
    error => {
      console.log(error);
    }
  )
  instance1.interceptors.response.use(
    result => {
      console.log(result.data);
    },
    error => {
      console.log(error);
    }
  )



  // 发送真正的网络请求
  //   instance1(config)
  //     .then(value => {
  //       success(value);
  //     })
  //     .catch(error => {
  //       failure(error);
  //     })
  return instance1(config)

}