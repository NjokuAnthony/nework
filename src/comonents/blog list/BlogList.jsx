import React from 'react'

const BlogList = ({chibuzor, title}) => {
  return (
    <div className='blog-list'>
        <h2>{title}</h2>
        {
            chibuzor.map((b)=> (
                <div className="blog-preview" key={b.id}> 
                    <h2>{b.title}</h2>
                    <p>{b.body}</p>
                    <p>written by: {b.author}</p>
                </div>
            ))
        }

    </div>
  )
}

export default BlogList