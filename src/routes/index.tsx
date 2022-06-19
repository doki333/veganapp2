import { Route, Routes } from 'react-router-dom'
import { Detail } from './Detail/Detail'
import Main from './Main/Main'
import styles from './routes.module.scss'
import StoreList from './StoreList/StoreList'

const App = () => {
  return (
    <div className={styles.app}>
      <h1>hello</h1>
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/:category' element={<StoreList />} />
        <Route path='/:category/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
