import { useParams } from 'react-router-dom'

import VEGAN_DATA from 'data/data.json'
import CustomMap from 'components/Map/CustomMap'
import StoreItem from 'components/StoreItem/StoreItem'
import RegionTable from 'components/RegionTable/RegionTable'
import PageNumber from 'components/PageNumber/PageNumber'
import ColorPanel from './ColorPanel/ColorPanel'

import styles from './storeList.module.scss'
import { useRecoilValue } from 'recoil'
import { pageState, regionState } from 'recoil/vegan.atom'

const StoreList = () => {
  const { category } = useParams()
  const regionInfo = useRecoilValue(regionState)
  const pageNumber = useRecoilValue(pageState)
  const indexOfLastData = pageNumber * 18
  const indexOfFirstData = indexOfLastData - 18

  const veganSort =
    category &&
    {
      vegan: '비건',
      lactoOvo: '락토오보',
      lacto: '락토',
      ovo: '오보',
      pesce: '페스코',
    }[category]

  const categoryFilteredData = Object.values(VEGAN_DATA.datas).filter((store) =>
    store.food_menu.includes(`${veganSort}`)
  )

  const regionData =
    regionInfo === '전체'
      ? categoryFilteredData
      : categoryFilteredData.filter((region) => region.rdn_code_nm.includes(`${regionInfo}`))

  const perPageData = regionData.slice(indexOfFirstData, indexOfLastData)

  return (
    <section>
      <CustomMap baseData={regionData} />
      <ColorPanel />
      <div className={styles.underMap}>
        <h1>{veganSort}</h1>
        <RegionTable />
        <ul className={styles.storeCards}>
          {perPageData.map((item) => (
            <StoreItem key={`item-${item.crtfc_upso_mgt_sno}`} data={item} />
          ))}
        </ul>
        {regionData.length === 0 && <p>No Datas!</p>}
      </div>
      {regionData.length !== 0 && <PageNumber dataLength={regionData.length} />}
    </section>
  )
}

export default StoreList
