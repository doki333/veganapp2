import { useParams } from 'react-router-dom'
import VEGAN_DATA from 'data/data.json'
import styles from './detail.module.scss'
import ImgCarousel from 'components/ImgCarousel/ImgCarousel'

const Detail = () => {
  const { id } = useParams()
  const filteredDB = Object.values(VEGAN_DATA.datas).filter((store) => store.crtfc_upso_mgt_sno === Number(id))[0]
  if (!filteredDB) return null

  return (
    <section className={styles.detailWrapper}>
      <ImgCarousel />
      <div className={styles.detailInfo}>
        <h1>{filteredDB.upso_nm}</h1>
        <dl>
          <dt>
            <span>Sort</span>
          </dt>
          <dd>
            {filteredDB.bizcnd_code_nm}({filteredDB.crtfc_gbn_nm})
          </dd>
        </dl>
        <dl>
          <dt>
            <span>Tel</span>
          </dt>
          <dd>{filteredDB.tel_no}</dd>
        </dl>
        <dl>
          <dt>
            <span>Address</span>
          </dt>
          <dd>{filteredDB.rdn_code_nm}</dd>
          <dt className={styles.detailAddr}>Detail Address</dt>
          <dd>{filteredDB.rdn_detail_addr}</dd>
        </dl>
        <dl>
          <dt>
            <span>Menu</span>
          </dt>
          <dd>{filteredDB.food_menu}</dd>
        </dl>
      </div>
    </section>
  )
}

export default Detail
