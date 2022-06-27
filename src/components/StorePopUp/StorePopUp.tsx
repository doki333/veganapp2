import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IBasicData } from 'types/veganData'

interface IPopUpProps {
  info: IBasicData
}

const StorePopUp = ({ info }: IPopUpProps) => {
  const { pathname } = useLocation()

  return (
    <div>
      <dl>
        <dt>가게이름</dt>
        <dd>{info.upso_nm}</dd>
      </dl>
      <dl>
        <dt>전화번호</dt>
        <dd>{info.tel_no}</dd>
      </dl>
      <Link to={`${pathname}/${info.crtfc_upso_mgt_sno}`}>바로가기</Link>
    </div>
  )
}

export default StorePopUp
