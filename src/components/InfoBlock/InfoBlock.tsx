import { Link } from 'react-router-dom'
import { IImojiObj, IInfoObj } from 'types/veganData'
import ScrollContainer from 'react-indiana-drag-scroll'
import styles from './infoBlock.module.scss'

const imojiObj: IImojiObj = {
  vegan: '🥑',
  lactoOvo: '🥛',
  ovo: '🧀',
  lacto: '🥚',
  pesce: '🐟',
}

const infoObj: IInfoObj = {
  vegan: ['Legumes', 'Grains', 'Fruit', 'Vegetables', 'Nuts/Seeds'],
  lactoOvo: ['Eggs', 'Dairy', 'Legumes', 'Grains', 'Fruit', 'Vegetables', 'Nuts/Seeds'],
  ovo: ['Eggs', 'Legumes', 'Grains', 'Fruit', 'Vegetables', 'Nuts/Seeds'],
  lacto: ['Dairy', 'Legumes', 'Grains', 'Fruit', 'Vegetables', 'Nuts/Seeds'],
  pesce: ['Fish', 'Eggs', 'Dairy', 'Legumes', 'Grains', 'Fruit', 'Vegetables', 'Nuts/Seeds'],
}

interface IInfo {
  keyword: string
}

const InfoBlock = ({ keyword }: IInfo) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.leftWing}>
        <div className={styles.infoImoji}>{imojiObj[keyword]}</div>
        <div>
          <p>{keyword}</p>
          <ScrollContainer className={styles.dietsWrapper}>
            {infoObj[keyword].map((list) => (
              <li key={`listThing-${list}`}>{list}</li>
            ))}
          </ScrollContainer>
        </div>
      </div>
      <Link to={`/${keyword}`}>GO</Link>
    </div>
  )
}

export default InfoBlock
