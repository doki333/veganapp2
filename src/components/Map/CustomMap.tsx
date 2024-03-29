import React, { useState } from 'react'
import Map, { GeolocateControl, NavigationControl, ViewStateChangeEvent, Popup } from 'react-map-gl'

import { useRecoilState } from 'recoil'
import { popUpInfoState } from 'recoil/vegan.atom'

import StorePopUp from 'components/StorePopUp/StorePopUp'
import CustomMarker from './Marker/CustomMarker'
import { IBasicData } from 'types/veganData'

// added the following 6 lines.
import mapboxgl from 'mapbox-gl'

interface IMapProps {
  baseData: IBasicData[]
}

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

const MAP_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
const basicViewPort = {
  latitude: 37.55,
  longitude: 126.99,
  zoom: 10,
  bearing: 0,
  pitch: 0,
}

const CustomMap = ({ baseData }: IMapProps) => {
  const [viewport, setViewPort] = useState(basicViewPort)
  const [popUpInfo, setPopUpInfo] = useRecoilState(popUpInfoState)

  const handleMoveMap = (e: ViewStateChangeEvent) => {
    setViewPort(e.viewState)
  }

  const handleClose = () => {
    setPopUpInfo(null)
  }

  return (
    <Map
      initialViewState={viewport}
      mapboxAccessToken={MAP_TOKEN}
      style={{ width: '100vw', height: '50vh', minWidth: '320px' }}
      onMove={handleMoveMap}
      mapStyle='mapbox://styles/mapbox/streets-v11'
    >
      {baseData.map((place) => (
        <CustomMarker key={`store-${place.crtfc_upso_mgt_sno}`} data={place} />
      ))}
      {popUpInfo && (
        <Popup
          anchor='top'
          longitude={popUpInfo.longitude}
          latitude={popUpInfo.latitude}
          closeOnClick={false}
          onClose={handleClose}
        >
          <StorePopUp info={popUpInfo} />
        </Popup>
      )}
      <GeolocateControl position='top-left' />
      <NavigationControl position='top-left' />
    </Map>
  )
}

export default CustomMap
