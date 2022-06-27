import { atom } from 'recoil'
import { IBasicData } from 'types/veganData'

export const popUpInfoState = atom<IBasicData | null>({
  key: '#popUpInfoState',
  default: null,
})

export const regionState = atom<string | undefined>({
  key: '#regionState',
  default: '전체',
})

export const pageState = atom<number>({
  key: '#pageState',
  default: 1,
})
