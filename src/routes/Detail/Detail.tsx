import { useParams } from 'react-router-dom'
import VEGAN_DATA from 'data/data.json'
import styles from './detail.module.scss'
import ImgCarousel from 'components/ImgCarousel/ImgCarousel'
import { useRecoilState } from 'recoil'
import { bookmarkInfoState } from 'recoil/vegan.atom'
import { useState } from 'react'

const Detail = () => {
  const { id } = useParams()
  const filteredDB = Object.values(VEGAN_DATA.datas).filter((store) => store.crtfc_upso_mgt_sno === Number(id))[0]
  const [bookmark, setBookmark] = useRecoilState(bookmarkInfoState)

  const filteredBK = bookmark.filter((store) => store.crtfc_upso_mgt_sno === Number(id))[0]
  const isStarred = filteredBK ? '⭐' : '⚝'
  const [star, setStar] = useState(isStarred)

  if (!filteredDB) return null

  const handleClickBookmark = () => {
    if (filteredBK) {
      const filteredBM = bookmark.filter((store) => store.crtfc_upso_mgt_sno !== Number(id))
      setBookmark(filteredBM)
      setStar('⚝')
      return
    }
    setStar('⭐')
    setBookmark((prev) => [...prev, filteredDB])
  }

  return (
    <section className={styles.detailWrapper}>
      <ImgCarousel />
      <div className={styles.detailInfo}>
        <div className={styles.nameWrapper}>
          <h1>{filteredDB.upso_nm}</h1>
          <button type='button' onClick={handleClickBookmark}>
            {star}
          </button>
        </div>
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
