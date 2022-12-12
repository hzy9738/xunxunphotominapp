import {View, Video} from '@tarojs/components'
import Taro, {FC, useRouter} from "@tarojs/taro"
import {PageMeta, NavigationBar} from "tarojs-plugin-platform-miniprogram/dist/components";
import './index.scss'
import Tools from "@/common/tools";

const VideoIndex: FC = () => {
  const router = useRouter();
  const {title, url, previewUrl, percentage} = router.params
  let heightPx = 750 * 3 / 4
  if (percentage && parseFloat(percentage).toString() === 'NaN') {
    heightPx = 750 * parseFloat(percentage)
  }

  const onPlay = () => {
    // let videoContext = Taro.createVideoContext('video')
    // videoContext.requestFullScreen({
    //   direction: heightPx > 1 ? 0 : 90
    // })
  }

  const onError = () => {
    Tools.showToast('视频出现点小错误-_-||')
    setTimeout(() => {
      Taro.navigateBack()
    }, 2000)
  }
  return (
    <>
      <PageMeta backgroundTextStyle='dark'>
        <NavigationBar title={title}/>
      </PageMeta>
      <View className='video-page'>
        <Video
          id='video'
          src={url || ''}
          style={{width: Taro.pxTransform(750), height: Taro.pxTransform(heightPx)}}
          poster={previewUrl}
          initialTime={0}
          controls={true}
          autoplay={true}
          loop={false}
          muted={false}
          enablePlayGesture
          onPlay={() => onPlay()}
          onError={() => onError()}
        />
      </View>
    </>
  )
}

export default VideoIndex
