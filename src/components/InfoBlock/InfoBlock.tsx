import { Link } from 'react-router-dom'
import { IInfoObj } from 'types/veganData'
import styles from './infoBlock.module.scss'

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
      <div>🥑</div>
      <div>
        <p>{keyword}</p>
        <ul className={styles.dietsWrapper}>
          {infoObj[keyword].map((list) => (
            <li key={`listThing-${list}`}>{list}</li>
          ))}
        </ul>
      </div>
      <Link to={`/${keyword}`}>GO</Link>
    </div>
  )
}

export default InfoBlock
