import {useStoreActions, useStoreState} from "@/stores";
import {useEffect} from "react";
import Taro from "@tarojs/taro";
import {PREVIEW_TOKEN, SESSION_ID} from "@/common/constant";


const useSession = () => {
  const sessionValue = useStoreState((state) => state.session.value)
  const setSession = useStoreActions((state) => state.session.setSession)

  useEffect(() => {
    if (!sessionValue.sessionId && !sessionValue.previewToken) {
      const sessionId = Taro.getStorageSync(SESSION_ID)
      const previewToken = Taro.getStorageSync(PREVIEW_TOKEN)
      setSession({
        sessionId, previewToken
      })
    }
  })
  return {
    sessionId: sessionValue.sessionId, previewToken:sessionValue.previewToken
  }
}
export default useSession
