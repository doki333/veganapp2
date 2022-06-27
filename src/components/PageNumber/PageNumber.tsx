import Pagination from 'react-js-pagination'
import { useRecoilState } from 'recoil'
import { pageState } from 'recoil/vegan.atom'
import styles from './pageNumber.module.scss'

interface pageNumProps {
  dataLength: number
}

const PageNumber = ({ dataLength }: pageNumProps) => {
  const [pageNum, setPageNum] = useRecoilState(pageState)
  const handlePageChange = (page: number) => {
    setPageNum(page)
  }

  return (
    <Pagination
      innerClass={styles.pagination}
      itemClass={styles.pageList}
      activePage={pageNum}
      itemsCountPerPage={18}
      totalItemsCount={dataLength}
      pageRangeDisplayed={7}
      onChange={handlePageChange}
      itemClassFirst={styles.pageFirst}
      itemClassPrev={styles.pagePrev}
      itemClassNext={styles.pageNext}
      itemClassLast={styles.pageLast}
      activeClass={styles.isPageActive}
      firstPageText='≪'
      lastPageText='≫'
      prevPageText='<'
      nextPageText='>'
    />
  )
}

export default PageNumber
