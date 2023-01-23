import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrickLayout } from 'react-brick-layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <BrickLayout>
        <div>Name</div>
      </BrickLayout>
    </div>
    <hr />
  </React.StrictMode>,
)
