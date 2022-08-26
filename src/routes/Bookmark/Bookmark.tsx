import CustomMap from 'components/Map/CustomMap'
import RegionTable from 'components/RegionTable/RegionTable'
import ColorPanel from 'routes/StoreList/ColorPanel/ColorPanel'

const DUMMY_DATA = [
  {
    tel_no: '02-2613-3005',
    crtfc_gbn: '14',
    cob_code_nm: '일반음식점',
    crtfc_class: null,
    rdn_detail_addr: '1층',
    upso_sno: null,
    bizcnd_code_nm: '경양식',
    upso_nm: '롯데리아 (오류동역)',
    gnt_no: null,
    map_indict_yn: 'Y',
    latitude: 37.610309,
    cob_code: '101',
    longitude: 126.917271,
    bizcnd_code: '10103',
    crtfc_ymd: '2020-12-11',
    crtfc_sno: null,
    crtfc_yn: null,
    rdn_addr_code: null,
    rdn_code_nm: '서울 구로구 경인로20길 10',
    cgg_code: '3160000',
    cgg_code_nm: '구로구',
    crtfc_upso_mgt_sno: 10579,
    use_yn: 'Y',
    crtfc_gbn_nm: '채식음식점',
    food_menu: '리아미라클버거(비건), 어썸버거(비건)',
  },
  {
    tel_no: '02-3012-8718',
    crtfc_gbn: '14',
    cob_code_nm: '일반음식점',
    crtfc_class: null,
    rdn_detail_addr: null,
    upso_sno: null,
    bizcnd_code_nm: '경양식',
    upso_nm: '롯데리아 (오금)',
    gnt_no: null,
    map_indict_yn: 'Y',
    latitude: 37.5034151,
    cob_code: '101',
    longitude: 127.1379961,
    bizcnd_code: '10103',
    crtfc_ymd: '2020-12-11',
    crtfc_sno: null,
    crtfc_yn: null,
    rdn_addr_code: null,
    rdn_code_nm: '서울 송파구 동남로 313',
    cgg_code: '3230000',
    cgg_code_nm: '송파구',
    crtfc_upso_mgt_sno: 10578,
    use_yn: 'Y',
    crtfc_gbn_nm: '채식음식점',
    food_menu: '리아미라클버거(비건), 어썸버거(비건)',
  },
  {
    tel_no: '02-2677-0501',
    crtfc_gbn: '14',
    cob_code_nm: '일반음식점',
    crtfc_class: null,
    rdn_detail_addr: '타임스퀘어 B2 B209',
    upso_sno: null,
    bizcnd_code_nm: '경양식',
    upso_nm: '롯데리아 (영등포타임스퀘어B2)',
    gnt_no: null,
    map_indict_yn: 'Y',
    latitude: 37.5172058,
    cob_code: '101',
    longitude: 126.903714,
    bizcnd_code: '10103',
    crtfc_ymd: '2020-12-11',
    crtfc_sno: null,
    crtfc_yn: null,
    rdn_addr_code: null,
    rdn_code_nm: '서울 영등포구 영중로 15',
    cgg_code: '3180000',
    cgg_code_nm: '영등포구',
    crtfc_upso_mgt_sno: 10577,
    use_yn: 'Y',
    crtfc_gbn_nm: '채식음식점',
    food_menu: '리아미라클버거(비건), 어썸버거(비건)',
  },
]

const Bookmark = () => {
  return (
    <>
      <CustomMap baseData={DUMMY_DATA} />
      <ColorPanel />
      <RegionTable />
    </>
  )
}

export default Bookmark
