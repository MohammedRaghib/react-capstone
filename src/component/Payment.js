import React from 'react'
import './RoleBasedView.css'

function Payment({ handleview }) {
    const recruiter = () => {
        handleview('recruiter')
    }
  return (
    <div className='payment-form'>
        <span className='pay-method'>Payment and stuff</span>
        <button onClick={recruiter}>Next</button>
    </div>
  )
}

export default Payment