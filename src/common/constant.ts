import * as dayjs from 'dayjs'

export const API_PRE = "https://nas.yixun.run/api/v1/"

export const ERR_MES = '网络开了小差，请稍后重试～'

export const MIN_DATE = dayjs().format('YYYY-MM-DD')

export const MAX_DATE = dayjs().add(60, 'day').format('YYYY-MM-DD')

export const DITU_KEY = 'V6WBZ-3PTR4-TSOU5-DBNZC-BWBO5-6PFEX'
// export const DITU_KEY = 'JKLBZ-WN3K4-HFSU6-DB5UU-2FGCS-CLB4J'
