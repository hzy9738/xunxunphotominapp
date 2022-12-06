import {View, Image, Button} from '@tarojs/components'
import Taro, {FC} from "@tarojs/taro"
import './index.scss'
import {login, LoginParam, LoginResponseInfo} from "@/api/login";
import Tools from "@/common/tools";
import {ERR_MES, PREVIEW_TOKEN, SESSION_ID} from "@/common/constant";
import {useEffect} from "react";


const PageIndex: FC = () => {

  useEffect(() => {
    if (Taro.getStorageSync(PREVIEW_TOKEN) && Taro.getStorageSync(SESSION_ID)) {
      Taro.switchTab({
        url: '/pages/calendar/index'
      })
    }
  }, [])

  // const getUserInfo = () => {
  //   Taro.getUserProfile({
  //     lang: 'zh_CN',
  //     desc: "获取你的昵称、头像、地区",
  //     success: (res) => {
  //       setLogin(res.userInfo.nickName)
  //     },
  //     fail: () => {
  //       console.log('拒绝授权')
  //       return
  //     }
  //   })
  // }


  const setLogin = async (param: LoginParam) => {
    try {
      const data = await login(param) as LoginResponseInfo
      if (data?.previewToken && data?.sessionId) {
        Taro.setStorageSync(PREVIEW_TOKEN, data.previewToken)
        Taro.setStorageSync(SESSION_ID, data.sessionId)
        Tools.showToast("授权成功^_^")
        setTimeout(() => {
          Taro.switchTab({
            url: '/pages/calendar/index'
          })
        }, 2000)
      }
    } catch (e) {
      Tools.showToast(ERR_MES)
    }
  }

  const getTel = (event) => {
    const {iv, encryptedData} = event.detail
    Taro.login({
      success: async res => {
        const params = {
          iv,
          encryptedData,
          code: res?.code,
        }
        await setLogin(params)
      }
    }).then(() => {

    })
  }

  return (
    <View className='index-page'>
      <View className='index-content'>
        <Image className='image' src={require('@/assets/images/xunxun.png')}/>
        <Button onGetPhoneNumber={getTel} openType='getPhoneNumber' type='primary'>授权登陆</Button>
      </View>
    </View>
  )
}

export default PageIndex
