import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section
      id='Home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span>
            <span> Discount for </span>
            <span className='text-white'>1 month </span>
            Account
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full ss-leading-[100px] leading-[75px]'>
          <h1 className='font-semibold font-poppins flex-1 text-white ss:text-[72px] text-[52px]'>
            The Next <br className='sm:block hidden' />
            <span className='text-gradient'> Generation </span>
          </h1>
          <div className='hidden ss:flex  mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold text-white ss:text-[68px] text-[52px] w-full'>
          Payment Method.
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            libero voluptates, nostrum minus voluptatum repellendus consectetur
            quos exercitationem quae excepturi.
          </p>
        </h1>
      </div>
      <div className={`${styles.flexCenter} md:my-0 my-10 relative my-10`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full botom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
