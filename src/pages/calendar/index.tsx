import {Image, View, Text} from '@tarojs/components'
import {FC} from "@tarojs/taro"
import './index.scss'
import {useEffect, useState} from "react";
import {CalendarResponseData, getCalendarList} from "@/api/calendar";
import {API_PRE} from "@/common/constant";
import Tools from "@/common/tools";


const CalendarIndex: FC = () => {
  const [calendarList, setCalendarList] = useState<CalendarResponseData[]>([])
  useEffect(() => {
    getCalendarApi()
  }, [])

  const getCalendarApi = async () => {
    const params = {
      count: 48,
      offset: 0,
      q: '',
      category: '',
      type: 'month',
      order: 'newest'
    }
    const data = await getCalendarList({...params}) as CalendarResponseData[]
    setCalendarList(data)
  }

  const toPhotoPage = (item: CalendarResponseData) => {
    Tools.navigateTo({
      url: '/pages/photo/index',
      data: {
        uid: item.UID,
        year: item.Year,
        month: item.Month
      }
    })
  }

  return (
    <View className='calendar-page'>
      {
        calendarList.map(item => (
          <View className='calendar-item' key={item.UID} onClick={() => toPhotoPage(item)}>
            <Image
              className='calendar-image'
              src={`${API_PRE}t/${item.Thumb}/7d5f6201/tile_500`}
            />
            <View className='calendar-text'>
              <Text>{item.Year}年{item.Month}月</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default CalendarIndex
