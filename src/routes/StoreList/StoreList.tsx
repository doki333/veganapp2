import { useParams } from 'react-router-dom'

import VEGAN_DATA from 'data/data.json'

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
  console.log(filteredData)

  return (
    <div>
      <h1>여기는 {category}</h1>
      <section>맵이 있을 곳</section>
      스토어 리스트가 나올 곳..
    </div>
  )
}

export default StoreList
