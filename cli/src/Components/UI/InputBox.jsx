import { RiSearch2Line } from '@remixicon/react'
import React from 'react'

const InputBox = ({handleSearch,placeholder,search,styl}) => {
  return (
    <div className='search-input'  style={styl}>
        <input type='text' onChange={handleSearch} placeholder={placeholder}/>
        {search?(<RiSearch2Line  style={{cursor:'pointer'}} size={15}/>):""}
    </div>
  )
}

export default InputBox;