import { memo } from 'react'
import { Marker } from 'react-map-gl'
import { useSetRecoilState } from 'recoil'
import { popUpInfoState } from 'recoil/vegan.atom'
import { IBasicData } from 'types/veganData'

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z`

interface IPinsProps {
  data: IBasicData
}

const CustomMarker = ({ data }: IPinsProps) => {
  const sortWord = data.bizcnd_code_nm
  const colorSort =
    (sortWord &&
      {
        중국식: '#F46278',
        한식: '#F59562',
        카페: '#F4DE62',
        경양식: '#7AF562',
      }[sortWord]) ??
    '#6762F5'

  const setPopUpInfo = useSetRecoilState(popUpInfoState)
  const handleClickInfo = () => setPopUpInfo(data)
  return (
    <Marker latitude={data.latitude} longitude={data.longitude}>
      <svg
        height={15}
        viewBox='0 0 24 24'
        style={{
          cursor: 'pointer',
          fill: `${colorSort}`,
          stroke: 'none',
        }}
        onClick={handleClickInfo}
      >
        <path d={ICON} />
      </svg>
    </Marker>
  )
}

export default memo(CustomMarker)
