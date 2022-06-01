import React from 'react'

function ProductSearch(props) {
  return (
      <>
        <input className='search_input'
        placeholder='Search by Title'

        onChange={(e)=>props.handleChange(e.target.value)}
        />
        <button style={{padding:5}}>search</button>
      </>
  )
}

export default ProductSearch