import React, { useState } from 'react'
import { Link, Prompt } from 'react-router-dom'
import Card from '../ui/Card'

const AddProduct = ({ location }) => {
  const [isDirty, setIsDirty] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Card style={{ minHeight: '15em' }}>
      <form className="spacing" onSubmit={handleSubmit}>
        <Prompt when={isDirty} message="Are you sure you want to leave the form, it is unsaved?" />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Product Name" required />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Product Description" required />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Product Type" required />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Add Source Material" />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Add Manufacturer" />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Add Shipper" />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Add Vendor" />
        
        <footer className="horizontal-spacing">
          <button type="submit" className="button">
            Add product
          </button>
          <Link to={(location.state && location.state.cancelPathname) || '/product'}>Cancel</Link>
        </footer>
      </form>
    </Card>
  )
}

export default AddProduct
