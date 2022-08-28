import { useState } from 'react'
import DietModal from 'components/DietModal/DietModal'
import Portal from 'components/DietModal/Portal'
import InfoBlock from 'components/InfoBlock/InfoBlock'
import styles from './main.module.scss'

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
        <InfoBlock keyword='vegan' />
        <InfoBlock keyword='lacto' />
        <InfoBlock keyword='lactoOvo' />
        <InfoBlock keyword='ovo' />
        <InfoBlock keyword='pesce' />
      </div>
      <Portal>{isShown && <DietModal handleClickQuestionMark={handleClickQuestionMark} />}</Portal>
    </section>
  )
}

export default Main
