import { MouseEvent } from 'react'
import { useRecoilState } from 'recoil'
import { regionState } from 'recoil/vegan.atom'
import styles from './regionTable.module.scss'

const seoulArea = [
  '전체',
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
]

const RegionTable = () => {
  const [regionInfo, setRegionInfoState] = useRecoilState(regionState)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setRegionInfoState(e.currentTarget.dataset.keyword)
  }
  return (
    <ul className={styles.regionTable}>
      {seoulArea.map((area) => (
        <li key={`area-${area}`}>
          <button type='button' onClick={handleClick} data-keyword={area}>
            {area}
          </button>
          {area === regionInfo && <span className={styles.isRegionActive} />}
        </li>
      ))}
    </ul>
  )
}

export default RegionTable
