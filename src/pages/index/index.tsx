import {View, Image} from '@tarojs/components'
import Taro, {FC} from "@tarojs/taro"
import './index.scss'
import {AtButton} from "taro-ui";
import {useState} from "react";


const PageIndex: FC = () => {
  // const [isNum, setIsNum] = useState(false)


  const getUserInfo = () => {
    Taro.getUserProfile({
      lang: 'zh_CN',
      desc: "获取你的昵称、头像、地区",
      success: response => {
        console.log(response.userInfo)
      },
      fail: () => {
        console.log('拒绝授权')
        return
      }
    })
    Taro.getUserInfo()
    // console.log(e.detail)
    // setIsNum(true)
    // Taro.checkSession({
    //   success: () => {
    //     console.log('有session,已登录')
    //   },
    //   fail: () => {
    //     console.log('未登录')
    //     Taro.login({
    //       success: res => {
    //         console.log(res)
    //       }
    //     })
    //   }
    // })
  }

  return (
    <View className='index-page'>
      <View className='index-content'>
        <Image className='image' src={require('@/assets/images/xunxun.png')}></Image>
        <AtButton type='primary' openType='getPhoneNumber' onClick={() => getUserInfo()}>授权登陆</AtButton>
      </View>
    </View>
  )
}

export default PageIndex
