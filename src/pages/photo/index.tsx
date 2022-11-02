import {View, Image} from '@tarojs/components'
import {FC, useRouter} from "@tarojs/taro"
import {useEffect, useState} from "react";
import {getPhotoList, PhotoResponseData} from "@/api/photo";
import {API_PRE} from "@/common/constant";
import {PageMeta, NavigationBar} from "tarojs-plugin-platform-miniprogram/dist/components";
import './index.scss'
import tools from "@/common/tools";
import dayjs from "dayjs";
import {weekDay} from "@/common/utils";


const PhotoIndex: FC = () => {
  const [photoList, setPhotoList] = useState<PhotoResponseData[]>([])
  useEffect(() => {
    getPhotoApi()
  }, [])

  const router = useRouter();
  const {uid, year, month} = router.params

  const getPhotoApi = async () => {
    const params = {
      count: 60,
      offset: 0,
      album: uid as string,
      filter: `public:true year:${year} month:${month}`,
      merged: true,
      country: '',
      camera: 0,
      order: 'oldest',
      q: ''
    }
    const data = await getPhotoList({...params}) as PhotoResponseData[]
    setPhotoList(data)
  }

  const onItemClick = (item: PhotoResponseData) => {
    let title = ''
    if(item.TakenAt){
      title = dayjs(item.TakenAt).format('D号') + weekDay(item.TakenAt)
    }
    const [imageFile, videoFile] = item.Files
    if (item.Type === 'video') {
      tools.navigateTo({
        url: `/pages/video/index`,
        data: {
          title: `${title}的视频`,
          url:  `${API_PRE}videos/${videoFile?.Hash}/7d5f6201/avc`,
          previewUrl: `${API_PRE}t/${imageFile?.Hash}/7d5f6201/tile_500`,
          percentage: item.Height / item.Width
        }
      })
    } else {
      tools.navigateTo({
        url: `/pages/image/index`,
        data: {
          title: `${title}的照片`,
          url: `${API_PRE}t/${imageFile?.Hash}/7d5f6201/tile_500`,
          percentage: item.Height / item.Width
        }
      })
    }
  }


  return (
    <>
      <PageMeta backgroundTextStyle='dark'>
        <NavigationBar title={`${year}年${month}月的照片和视频`}/>
      </PageMeta>
      <View className='photo-page'>
        {
          photoList.map(item => (
            <View className='photo-item' key={item.Hash} onClick={() => onItemClick(item)}>
              <Image
                className='photo-image'
                src={`${API_PRE}t/${item.Hash}/7d5f6201/tile_500`}
              />
            </View>
          ))
        }
      </View>
    </>

  )
}

export default PhotoIndex
