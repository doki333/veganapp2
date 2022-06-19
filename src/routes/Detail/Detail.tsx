import React from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { id } = useParams()
  return (
    <div>
      This is Detail
      <h1>Id is {id}</h1>
    </div>
  )
}
