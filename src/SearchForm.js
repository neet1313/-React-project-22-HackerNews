import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { searchQueryhandler, query } = useGlobalContext();

  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  const inputChangeHandler = (e) => {
    searchQueryhandler(e.target.value);
  }

  return <form className='search-form' onSubmit={formSubmitHandler}>
    <h2>search hacker rank</h2>
    <input type="text" className='form-input' placeholder='Enter your search here' onChange={inputChangeHandler} value={query} />
  </form>
}

export default SearchForm
