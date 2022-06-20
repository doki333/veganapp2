import { useParams } from 'react-router-dom'
import CustomMap from 'components/Map/CustomMap'

import VEGAN_DATA from 'data/data.json'
import StoreItem from 'components/StoreItem/StoreItem'

const StoreList = () => {
  const { category } = useParams()

  const veganSort =
    category &&
    {
      vegan: '비건',
      lactoOvo: '락토오보',
      lacto: '락토',
      ovo: '오보',
      pesce: '페스코',
    }[category]

  const filteredData = Object.values(VEGAN_DATA.datas).filter((store) => store.food_menu.includes(`${veganSort}`))

  return (
    <div>
      <CustomMap baseData={filteredData} />
      <h1>여기는 {category}</h1>
      {filteredData.map((item) => (
        <StoreItem key={`item-${item.crtfc_upso_mgt_sno}`} data={item} />
      ))}
    </div>
  )
}

export default StoreList
