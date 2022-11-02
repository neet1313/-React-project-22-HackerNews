import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { pageHandler, isLoading, page, nbPages } = useGlobalContext();
  return <div className='btn-container'>
    <button type='button' disabled={isLoading} onClick={() => pageHandler('prev')}>prev</button>
    <p>{page + 1} of {nbPages}</p>
    <button type='button' disabled={isLoading} onClick={() => pageHandler('next')}>next</button>
  </div>
}

export default Buttons
