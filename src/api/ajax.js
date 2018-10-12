/*
使用axios封装一个ajax请求函数
函数的返回值是promise
改良版
 */
import axios from 'axios'

export default function ajax(url,data={},type='GET') {

  return new Promise(function (resolve,reject) {
    let promise
    // 发异步请求
    if (type==='GET'){
      // 将data中所有数据转换成query参数字符串接到url中
      // Object.keys(obj): 得到obj对象自身所有属性的属性名组成的数组
      let queryString= ''
      Object.keys(data).forEach(key=>{
        const value = data[key]
        queryString += key+ "=" + value +"&"
      })
      if (queryString){  // 如username=tom&password=123&
        queryString = queryString.substring(0,queryString.length-1)
        url += '?' + queryString
      }
      // 发get请求
      promise = axios.get(url)
    }else{
      // 发post请求
      promise = axios.post(url,data)
    }
    //调用promise对象
    promise.then(
      reponse=>{
      resolve(reponse.data) //请求成功的回调  异步执行成功后传递的数据不再是response, 而是response里的data
      },
      error =>{
        reject(error)  //请求失败的回调
      }
    )
  })
}
