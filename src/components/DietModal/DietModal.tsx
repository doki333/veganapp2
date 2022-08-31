import { useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './dietModal.module.scss'

interface IDietModal {
  handleClickQuestionMark: () => void
}

const DietModal = ({ handleClickQuestionMark }: IDietModal) => {
  const imgRef = useRef(null)
  useClickAway(imgRef, handleClickQuestionMark)
  return (
    <div className={styles.imgWrapper}>
      <img
        ref={imgRef}
        alt='vegetarian diet type table'
        width='100%'
        height='100%'
        src='https://yourveganjourney.com/wp-content/uploads/2019/07/Big-PBD-Categories.png'
      />
    </div>
  )
}

export default DietModal
