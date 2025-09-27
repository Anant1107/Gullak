import React from 'react'
import barchart_expense from "../../assets/images/barchart_expense.jpg"

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
        <div>
            <h2 className='font-bold'>Expense Tracker</h2>
            {children}
        </div>

        <div>
            <div />
            <div />
            <div />

            <img src={barchart_expense} alt="" />
        </div>
    </div>
  )
}

export default AuthLayout
