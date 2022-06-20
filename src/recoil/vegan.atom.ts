import { atom } from 'recoil'
import { IBasicData } from 'types/veganData'

export const popUpInfoState = atom<IBasicData | null>({
  key: '#popUpInfoState',
  default: null,
})
