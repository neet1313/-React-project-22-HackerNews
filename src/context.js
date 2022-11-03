import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  query: ' ',
  page: 0,
  hits: [],
  nbPages: 0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      dispatch({ type: SET_STORIES, payload: { hits: jsonData.hits, nbPages: jsonData.nbPages } })
    } catch (error) {
      console.log(error.message)
    }
  }

  const removeStoryHandler = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  }

  const searchQueryhandler = (query) => {
    console.log(query);
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  const pageHandler = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page])

  return <AppContext.Provider value={{ ...state, removeStoryHandler, searchQueryhandler, pageHandler }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
