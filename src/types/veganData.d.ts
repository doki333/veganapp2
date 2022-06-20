export interface IBasicData {
  tel_no: string
  crtfc_gbn: string
  cob_code_nm: string
  crtfc_class: null
  rdn_detail_addr: null | string
  upso_sno: null | string
  bizcnd_code_nm: null | string
  upso_nm: string
  gnt_no: null | string
  map_indict_yn: string
  latitude: number
  cob_code: string
  longitude: number
  bizcnd_code: null | string
  crtfc_ymd: string
  crtfc_sno: null | string
  crtfc_yn: null | string
  rdn_addr_code: null | string
  rdn_code_nm: string
  cgg_code: string
  cgg_code_nm: string
  crtfc_upso_mgt_sno: number
  use_yn: string
  crtfc_gbn_nm: string
  food_menu: string
}

export interface IColorData {
  경양식: string
  한식: string
  카페: string
  [key: string]: string
}
