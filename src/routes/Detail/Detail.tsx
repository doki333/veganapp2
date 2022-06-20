import { useParams } from 'react-router-dom'
import VEGAN_DATA from 'data/data.json'

const Detail = () => {
  const { id } = useParams()
  const filteredDB = Object.values(VEGAN_DATA.datas).filter((store) => store.crtfc_upso_mgt_sno === Number(id))
  if (!filteredDB) return null

  return (
    <div>
      This is Detail
      <h1>Id is {id}</h1>
    </div>
  )
}

export default Detail
