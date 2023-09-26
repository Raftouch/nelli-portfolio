import React, { useContext } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'

export default function ButtonsRight() {
  const { open, style } = useContext(PortfolioContext)
  const button =
    'rounded-full border-white bg-white border-2 w-[50px] hover:bg-slate-500'

  return (
    <div className="fixed top-1/3 right-2 flex flex-col items-end space-y-5">
      <button className={button} onClick={open}>
        <img src="../images/exp.png" alt="experience" />
      </button>
      <button className={button} onClick={style}>
        <img src="../images/lightDark.png" alt="light-dark icon" />
      </button>
    </div>
  )
}
