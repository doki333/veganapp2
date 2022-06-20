import React from 'react'
import { IBasicData } from 'types/veganData'

interface IItemProps {
  data: IBasicData
}

const StoreItem = ({ data }: IItemProps) => {
  return <div>{data.upso_nm}</div>
}

export default StoreItem
