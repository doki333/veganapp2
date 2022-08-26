import CustomMap from 'components/Map/CustomMap'
import RegionTable from 'components/RegionTable/RegionTable'
import StoreItem from 'components/StoreItem/StoreItem'
import { useRecoilValue } from 'recoil'
import { bookmarkInfoState } from 'recoil/vegan.atom'
import ColorPanel from 'routes/StoreList/ColorPanel/ColorPanel'
import styles from './bookmark.module.scss'

const Bookmark = () => {
  const entireBK = useRecoilValue(bookmarkInfoState)
  return (
    <>
      <CustomMap baseData={entireBK} />
      <ColorPanel />
      <RegionTable />
      <ul className={styles.bookmarkList}>
        {entireBK.map((item) => (
          <StoreItem key={`bookmark-${item.crtfc_upso_mgt_sno}`} data={item} />
        ))}
      </ul>
      {entireBK.length === 0 && <p>No Datas!</p>}
    </>
  )
}

export default Bookmark
