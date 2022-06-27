import { useParams } from 'react-router-dom'

import VEGAN_DATA from 'data/data.json'
import CustomMap from 'components/Map/CustomMap'
import StoreItem from 'components/StoreItem/StoreItem'
import RegionTable from 'components/RegionTable/RegionTable'

import styles from './storeList.module.scss'
import { useRecoilValue } from 'recoil'
import { regionState } from 'recoil/vegan.atom'
import ColorPanel from './ColorPanel/ColorPanel'

const StoreList = () => {
  const { category } = useParams()
  const regionInfo = useRecoilValue(regionState)

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

  return (
    <section>
      <CustomMap baseData={regionData} />
      <ColorPanel />
      <div className={styles.underMap}>
        <h1>{veganSort}</h1>
        <RegionTable />
        {regionData.map((item) => (
          <StoreItem key={`item-${item.crtfc_upso_mgt_sno}`} data={item} />
        ))}
        {regionData.length === 0 && <p>No Datas!</p>}
      </div>
    </section>
  )
}

export default StoreList
