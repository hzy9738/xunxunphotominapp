import {FC} from "@tarojs/taro";
import {StoreProvider} from "easy-peasy";
import store from "./stores";
import './app.scss'

const App: FC = (props) => {
  const {children} = props
  return (
    <StoreProvider store={store}>
      {children}
    </StoreProvider>
  )
}

export default App
