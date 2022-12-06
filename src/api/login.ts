import tools from "@/common/tools";

export type LoginParam = {
  iv: string;
  encryptedData: string;
  code: string;
}

export interface LoginResponseInfo {
  sessionId: string;
  previewToken: string;
}

//登录
export const login = (data: LoginParam) => tools.request({
  url: `/node/api/login`,
  data,
  method: 'POST'
})


export interface phoneParam {
  code: string;
  encryptedData: string;
  iv: string;
}

// 获取手机号
export const getPhone = (data: phoneParam) => tools.request({
  url: `/node/api/getPhone`,
  method: 'POST',
  data
})
