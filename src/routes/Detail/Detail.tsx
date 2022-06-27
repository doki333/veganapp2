import { useParams } from 'react-router-dom'
import VEGAN_DATA from 'data/data.json'
import styles from './detail.module.scss'

const Detail = () => {
  const { id } = useParams()
  const filteredDB = Object.values(VEGAN_DATA.datas).filter((store) => store.crtfc_upso_mgt_sno === Number(id))[0]
  if (!filteredDB) return null

  return (
    <section className={styles.detailWrapper}>
      <div>캐러셀 있을 곳</div>
      <h1>{filteredDB.upso_nm}</h1>
      <dl>
        <dt>Tel</dt>
        <dd>{filteredDB.tel_no}</dd>
      </dl>
      <dl>
        <dt>Address</dt>
        <dd>{filteredDB.rdn_code_nm}</dd>
        <dt className={styles.detailAddr}>Detail Address</dt>
        <dd>{filteredDB.rdn_detail_addr}</dd>
      </dl>
      <dl>
        <dt>Menu</dt>
        <dd>{filteredDB.food_menu}</dd>
      </dl>
    </section>
  )
}

export default Detail
