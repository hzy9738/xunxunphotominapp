import * as dayjs from 'dayjs'

export const API_PRE = "https://nas.yixun.run"

export const ERR_MES = '网络开了小差，请稍后重试～'

export const PREVIEW_TOKEN = 'previewToken'

export const SESSION_ID = 'sessionId'

export const MIN_DATE = dayjs().format('YYYY-MM-DD')

export const MAX_DATE = dayjs().add(60, 'day').format('YYYY-MM-DD')

