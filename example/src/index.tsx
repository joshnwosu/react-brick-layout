import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrickLayout } from 'react-brick-layout'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <BrickLayout
        className='react-brick-layout'
        rtl={true}
        animateOnResize={true}
        column={3}
        breakPoint={{
          350: 1,
          450: 2,
          645: 3,
          900: 4,
          1200: 5,
        }}
        style={{ backgroundColor: 'red', border: '1px solid blue' }}
      >
        <div className='card'>1</div>
        <div className='card'>2</div>
        <div className='card'>3</div>
        <div className='card'>4</div>
        <div className='card'>5</div>
        <div className='card'>6</div>
        <div className='card'>7</div>
      </BrickLayout>
    </div>
  </React.StrictMode>,
)
