import reactDom from 'react-dom'
import { ReactNode } from 'react'

interface IPortal {
  children: ReactNode
}

const Portal = ({ children }: IPortal) => {
  const el = document.getElementById('modal-root') as HTMLElement
  return reactDom.createPortal(children, el)
}

export default Portal
