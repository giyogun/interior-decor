import React from 'react'
import './AppWrap.css';

const AppWrap = (Component, id) => function HOC() {
    return (
      <div className="app-container" id={id}>
        <div className='app-wrapper'>
          <Component />
        </div>
      </div>
    )
  
} 

export default AppWrap