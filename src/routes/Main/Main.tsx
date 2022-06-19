import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      Main
      <section>뭔가 화살표를 누르면 선택하는 창을 보여줬으면 좋겠음</section>
      <Link to='/vegan'>비건</Link>
      <Link to='/lacto'>락토</Link>
      <Link to='/lactoOvo'>락토오보</Link>
      <Link to='/ovo'>오보</Link>
      <Link to='/pescs'>페스코</Link>
    </div>
  )
}

export default Main
