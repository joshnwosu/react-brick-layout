import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrickLayout } from 'react-brick-layout'
import './index.css'

const DATA = [
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
  { title: 'Mission impossible', description: 'Ethan in mission impossible' },
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <BrickLayout
        className='react-brick-layout'
        rtl={false}
        animateOnResize={true}
        column={3}
        gutter={20}
        breakPoint={{
          350: 1,
          450: 2,
          645: 3,
          900: 4,
          1200: 5,
        }}
        // style={{ backgroundColor: 'black' }}
      >
        <div className='card'>1</div>
        <div className='card'>2</div>
        <div className='card'>3</div>
        <div className='card'>4</div>
        <div className='card'>5</div>
        <div className='card'>6</div>
        <div className='card'>7</div>
        <div className='card'>8</div>
        <div className='card'>9</div>
        <div className='card'>10</div>
        <div className='card'>11</div>
        <div className='card'>12</div>
        <div className='card'>13</div>
        <div className='card'>14</div>
        <div className='card'>15</div>
        <div className='card'>16</div>
        <div className='card'>17</div>
        <div className='card'>18</div>
        <div className='card'>19</div>
        <div className='card'>20</div>
      </BrickLayout>

      <BrickLayout
        className='boxes'
        column={6}
        animateOnResize={true}
        breakPoint={{
          350: 1,
          450: 2,
          645: 3,
          900: 4,
          1100: 5,
          1300: 6,
        }}
      >
        {DATA.map((item, index) => (
          <div className='box' key={index}>
            <div className='box-img'>IMAGE</div>
            <div className='box-content'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </BrickLayout>
    </div>
  </React.StrictMode>,
)
