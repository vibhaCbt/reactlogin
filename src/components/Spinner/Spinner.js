import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Spinner = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Skeleton circle={true} width={40} height={40} />
    </div>
  )
}