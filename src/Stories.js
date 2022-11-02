import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStoryHandler } = useGlobalContext();

  if (isLoading) {
    return <div className='loading' />
  }

  return <section className='stories'>
    {hits.map(story => {
      const { objectID, title, num_comments, author, url, points } = story;

      return <article className='story' key={objectID}>
        <h4 className='title'>{title}</h4>
        <p className='info'>{points} points by <span>{author} | </span> {num_comments} comments</p>
        <div>
          <a href={url} className='read-link' target='_blank' rel="noopener noreferrer"> read more </a>
          <button className='remove-btn' onClick={() => removeStoryHandler(objectID)}> remove </button>
        </div>
      </article>
    })}
  </section>
}

export default Stories
