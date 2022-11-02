import Taro from '@tarojs/taro'
import {objectToString} from '@/common/utils'
import {API_PRE} from "@/common/constant";

const tools = {
  /**
   * 网络请求
   * @{param}   opts
   */
  request: (opts) => {
    let {url = '', params = {}, method = 'GET', ...request} = opts
    url = `${API_PRE}${url}`
    if (method === 'GET') {
      url = `${url}?${objectToString(params)}`
    }
    return new Promise((resolve, reject) => {
      Taro.request({
        url, params, method, ...request, header: {
          'Content-Type': 'application/json',
          'X-Client-Hash': '5de22ed1',
          'X-Client-Version': '211215-93b26f19-Linux-x86_64',
          'X-Session-ID': '66b827aa32e1bf281ead1a76b56269e94f69c5f904024750',
        }
      }).then((res) => {
        const {data} = res
        if (res?.statusCode === 200) {
          resolve(data)
        } else {
          reject(res)
        }
      }).catch(e => {
        reject(e)
      })
    })
  },
  /**
   * 页面loading
   * @{param}
   */
  showLoading: (param: object | string) => {
    let dptOpts = {
      title: '加载中...',
      mask: true // 防止触摸穿透
    }
    if (Object.prototype.toString.call(param) === '[object String]') {
      dptOpts.title = param as string
    } else if (Object.prototype.toString.call(param) === '[object Object]') {
      dptOpts = {
        ...dptOpts,
        ...param as object
      }
    }
    return Taro.showLoading(dptOpts)
  },
  hideLoading: () => {
    Taro.hideLoading()
  },
  /**
   * 页面提示
   * @{param}
   */
  showToast: (param: string | object) => {
    if (Object.prototype.toString.call(param) === '[object String]') {
      return Taro.showToast({
        title: param as string, // 提示内容
        icon: 'none',
        mask: true,
        duration: 2000 // 提示时间
      })
    } else if (Object.prototype.toString.call(param) === '[object Object]') {
      return Taro.showToast({
        title: '温馨提示', // 提示内容
        icon: 'none',
        mask: true,
        duration: 2000, // 提示时间
        ...param as object
      })
    } else {
      throw new Error('参数类型有误，应该是字符串或者对象')
    }
  },
  /**
   * 页面路由跳转
   */
  navigateTo: ({url, data}) => {
    const queryStr = objectToString(data)

    return Taro.navigateTo({url: `${url}?${queryStr}`})
  }
}


export default tools
