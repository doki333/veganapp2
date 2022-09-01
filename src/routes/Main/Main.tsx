import { useState } from 'react'
import DietModal from 'components/DietModal/DietModal'
import InfoBlocks from 'components/InfoBlock/InfoBlock'
import Portal from 'components/DietModal/Portal'
import styles from './main.module.scss'

const dietTypeArr = ['vegan', 'lacto', 'lactoOvo', 'ovo', 'pesce']

const Main = () => {
  const [isShown, setIsShown] = useState(false)
  const handleClickQuestionMark = () => {
    setIsShown((prev) => !prev)
  }
  return (
    <section className={styles.mainBlock}>
      <h1>Choose the type of vegetarian diets</h1>
      <button type='button' onClick={handleClickQuestionMark} className={styles.detailBtn}>
        ?
      </button>
      <div className={styles.infoWrapper}>
        {dietTypeArr.map((diet) => (
          <InfoBlocks key={`infoblocks-${diet}`} keyword={diet} />
        ))}
      </div>
      <Portal>{isShown && <DietModal handleClickQuestionMark={handleClickQuestionMark} />}</Portal>
    </section>
  )
}

export default Main
