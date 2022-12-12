import tools from "@/common/tools";
import Taro from "@tarojs/taro";
import {API_PRE, PREVIEW_TOKEN, SESSION_ID} from "@/common/constant";

export type uploadParam = {
  path: string;
  startId: string;
}


//上传
export const uploadFileApi = (data: uploadParam) => {
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url: `${API_PRE}/api/v1/upload/${data.startId}`,
      filePath: data.path,
      name: 'files',
      formData: {},
      header: {
        'Content-Type': 'multipart/form-data;charset=utf-8',
        'X-Client-Hash': Taro.getStorageSync(PREVIEW_TOKEN),
        'X-Session-ID': Taro.getStorageSync(SESSION_ID),
      },
      success(result) {
        console.log(result)
        importFileApi({
          albums: [], move: true, startId: data.startId
        }).then((res) => {
          console.log(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      },
      fail(error) {
        reject(error)
      }
    })
  })
}


export interface importParam {
  albums: string[];
  move: boolean;
  startId: string;
}

// 上传后续
export const importFileApi = (data: importParam) => tools.request({
  url: `/api/v1/import/upload/${data.startId}`,
  method: 'POST',
  data: {
    move: data.move,
    albums: data.albums,
  }
})
