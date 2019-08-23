import React from 'react'
import Panel from './Panel'
import Card from './Card'
import classnames from 'classnames'

const Modal = ({ children, className }) => (
  <div className={classnames('modal', className )}>
  <Panel>
    <Card>
    <div className="spacing">
      {children}
    </div>
    </Card>
  </Panel>
    
  </div>
)

export default Modal
