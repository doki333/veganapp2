# Vegan Map App With React   

> 서울시 지정업소 현황 데이터(https://data.seoul.go.kr/dataList/OA-2741/S/1/datasetView.do) 를 바탕으로 한 채식음식점 지도 웹앱입니다. 예전에 짜놓은 코드에서 타입스크립트로 작성하고, 클래스 컴포넌트를 사용했던 것을 함수형 컴포넌트로 수정하였습니다. 또한 재사용할 수 있는 것들은 컴포넌트 단위로 재사용할 수 있게 수정하였습니다.

1. 기술 스택   
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">   

2. 기능   
- 비건, 페스코, 오보, 락토오보, 락토 별로 음식점을 분류하여 취향에 맞는 음식점 조회 가능 (페이지네이션)
   * mapbox api를 사용하여 표시   
   * 마커를 누르고 상세페이지로 이동
   * 서울 자치구 별로 식당 필터링 가능   
- 식당 별 메뉴와 전화번호, 주소 등 제공   
- 즐겨찾기 등록, 조회 기능    
    


3. 폴더 구조 (추후 수정)  

```` 
src
├─components
│  ├─DietModal
│  ├─ImgCarousel
│  ├─InfoBlock
│  ├─Map
│  │  └─Marker
│  ├─PageNumber
│  ├─RegionTable
│  ├─StoreItem
│  └─StorePopUp
├─data
├─recoil
├─routes
│  ├─Bookmark
│  ├─Detail
│  ├─Main
│  └─StoreList
│      └─ColorPanel
├─styles
│  ├─base
│  └─constants
└─types
````

4. 라이브러리
- classnames : 조건부 클래스 네임 지정   
- mapbox-gl, react-map-gl : mapbox 관련 라이브러리   
- react-js-pagination : 식당 목록 페이지네이션   
- react-slick, slick-carousel : 캐러셀      
- recoil: 전역 관리 라이브러리      
- react-use: modal 열고 닫는 hook 관련 라이브러리    
- worker-loader: mapbox babel 오류 해결을 위한 라이브러리    
- react-indiana-drag-scroll : 가로 스크롤 라이브러리    

