import React from 'react'
import "./Sidebar.scss";
import Links from './links/Links';
import Toggle from './toggle/Toggle';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='links'><Links/>
      </div>
      <Toggle/>
    </div>
  )
}

export default Sidebar
