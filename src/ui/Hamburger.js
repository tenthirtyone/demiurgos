import React from 'react'
import classnames from 'classnames'

const Hamburger = ({ showSidebar, toggleSidebar}) => (
  <div className={classnames('hamburger')}>
   <nav className="menu" >
   <input type="checkbox" href="#" className="menu-open" name="menu-open" checked={showSidebar} id="menu-open" onChange={toggleSidebar}/>
   <label className="menu-open-button" htmlFor="menu-open">
    <span className="lines line-1"></span>
    <span className="lines line-2"></span>
    <span className="lines line-3"></span>
  </label>
</nav>
  </div>
)

export default Hamburger
