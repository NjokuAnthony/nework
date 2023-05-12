import React from 'react'
import BlogList from '../blog list/BlogList'
import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "my new website", body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow.  It is a journey that we all must embark upon and it is up to us to make the most of it", author: "Juwon", id:1},
        {title: "trending", body: "", author: "Mr Ibukun", id:2},
        {title: "education", body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow.  It is a journey that we all must embark upon and it is up to us to make the most of it", author: "Frank", id:3},
        {title: "life style", body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow.  It is a journey that we all must embark upon and it is up to us to make the most of it", author: "Ibukun", id:4},
        {title: "entertainment", body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow.  It is a journey that we all must embark upon and it is up to us to make the most of it", author: "Juwon", id:5},
    ])
  return (
    <div className='home'>
        <BlogList chibuzor={blogs} title="All blog"/>
    </div>
  )
}

export default Home