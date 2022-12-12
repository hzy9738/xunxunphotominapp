import {View, Image} from '@tarojs/components'
import Taro, {FC, useRouter} from "@tarojs/taro"

import './index.scss'
import {
  NavigationBar,
  PageMeta
} from "tarojs-plugin-platform-miniprogram/dist/components";

const ImageIndex: FC = () => {
  const router = useRouter();

  const {title, url, percentage} = router.params
  let heightPx = 750 * 3/4
  if (percentage && parseFloat(percentage).toString() === 'NaN') {
    heightPx = 750 * parseFloat(percentage)
  }
  return (
    <>
      <PageMeta backgroundTextStyle='dark'>
        <NavigationBar title={title}/>
      </PageMeta>
      <View className='image-page'>
        <Image
          style={{ width: Taro.pxTransform(750)  ,height: Taro.pxTransform(heightPx)}}
          src={url || ''}
        />
      </View>
    </>

  )
}

export default ImageIndex
