import Taro, {FC} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './index.scss'
import {uploadFileApi} from "@/api/upload";
import tools from "@/common/tools";

interface UploadFileButtonProps {
  className: string;
  callback: () => void
}

const UploadFileButton: FC<UploadFileButtonProps> = (props) => {
  const {className} = props

  const chooseFile = () => {
    Taro.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: (res) => {
        const pathList = res.tempFiles?.map(item => item.tempFilePath) || []
        uploadFile(pathList)
        console.log(res.type)
      }
    })
  }

  const uploadFile = async (pathList) => {
    Taro.showLoading({
      title: '正在上传',
      mask: true
    })

    if (Array.isArray(pathList) && pathList.length) {
      const startId = Date.now().toString()
      await Promise.all(
        pathList.map(path => {
          return uploadFileApi({startId, path})
        })
      )
      Taro.hideLoading()
      tools.showToast('上传成功^_^')
    } else {
      Taro.hideLoading()
    }
  }


  return (
    <View className={className} onClick={chooseFile}>
      <View className='at-icon at-icon-download-cloud'></View>
    </View>
  )
}

export default UploadFileButton
