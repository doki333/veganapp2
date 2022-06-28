import styles from './colorPanel.module.scss'

const ColorPanel = () => {
  return (
    <ul className={styles.colorPanel}>
      <li>
        <span />
        한식
      </li>
      <li>
        <span />
        중국식
      </li>
      <li>
        <span />
        카페
      </li>
      <li>
        <span />
        경양식
      </li>
      <li>
        <span />
        기타
      </li>
    </ul>
  )
}

export default ColorPanel
