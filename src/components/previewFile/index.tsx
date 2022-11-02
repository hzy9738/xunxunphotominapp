import {View, Image, Video} from '@tarojs/components'
import {FC} from "@tarojs/taro"
import './index.scss'
import {useEffect, useState} from "react";
import {AtCurtain, AtIcon} from 'taro-ui'
import {FileType} from "@/api/photo";



interface PreviewFileProps {
  file: FileType;
  isOpened: boolean;
  onFileToggle: (isOpened: boolean) => void;
}

const PreviewFile: FC<PreviewFileProps> = (props) => {
  const {file, isOpened, onFileToggle} = props
  const [fileShow, setFileShow] = useState(false)

  useEffect(() => {
    if (isOpened) {
      setFileShow(true)
    }
  }, [isOpened])

  const onItemClose = () => {
    onFileToggle(false)
    setTimeout(() => {
      setFileShow(false)
    })
  }

  return (
    <AtCurtain
      isOpened={isOpened} onClose={() => onItemClose()}>
      <View className={`curtain-view`} onClick={() => onItemClose()}>
        {
          fileShow ?
            <>
              {
                file?.type === 'video' ? (
                  <View className='curtain-video-view'>
                    <Video
                      className='curtain-video'
                      id='video'
                      src={file.url}
                      poster={file.previewUrl}
                      initialTime={0}
                      controls={true}
                      autoplay={true}
                      loop={false}
                      muted={false}
                    />
                    <AtIcon value='close-circle' size='30' color='#f8f9f9'></AtIcon>
                  </View>

                ) : (
                  <Image
                    onClick={() => onItemClose()}
                    className='curtain-image'
                    src={file.url}
                  />
                )
              }
            </> : <></>
        }
      </View>

    </AtCurtain>
  )
}

export default PreviewFile
