import React from 'react'
import Button from './Button'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} cursor-pointer rounded-full w-[140px] h-[140px] bg-blue-gradient p-[2px] `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins mr-2 font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get</span>
          </p>
          <img
            src={arrowUp}
            alt='arrowup'
            className='w-[23px] h-[23px] object-contain '
          />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
