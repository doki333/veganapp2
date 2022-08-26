import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { bookmarkInfoState } from 'recoil/vegan.atom'
import { IBasicData } from 'types/veganData'
import styles from './storeItem.module.scss'

interface IItemProps {
  data: IBasicData
}

const StoreItem = ({ data }: IItemProps) => {
  const { pathname } = useLocation()
  const [bm, setBm] = useRecoilState(bookmarkInfoState)
  const handleClickDelete = () => {
    const filteredBM = bm.filter((store) => store.crtfc_upso_mgt_sno !== data.crtfc_upso_mgt_sno)
    setBm(filteredBM)
  }

  return (
    <li className={styles.storeItemWrapper}>
      <div className={styles.imgWrapper}>
        <img
          src='https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
          alt='vegan meal'
        />
      </div>
      <div className={styles.infoWrapper}>
        <span className={styles.mainStoreName}>{data.upso_nm}</span>
        <dl>
          <dt>Tel</dt>
          <dd>{data.tel_no}</dd>
        </dl>
        <dl>
          <dt>Menu</dt>
          <dd className={styles.menuBlock}>{data.food_menu}</dd>
        </dl>
        <div className={styles.linkBlock}>
          <Link to={`${pathname}/${data.crtfc_upso_mgt_sno}`}>바로가기</Link>
          {pathname === '/bookmark' && (
            <button type='button' onClick={handleClickDelete}>
              삭제
            </button>
          )}
        </div>
      </div>
    </li>
  )
}

export default StoreItem
