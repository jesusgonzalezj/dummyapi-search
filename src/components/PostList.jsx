import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input'
import Post from './Post';


const BASE_URL = 'https://dummyapi.io/data/api/tag/'
const APP_ID = '5f626f5c70f7c41e06620653'

const PostLists = () => {
    
    const [posts, setPosts] = useState (null)
    
    const handlerSearch = (e) => {
      fetchData(e)
  }
    const fetchData = (search) => {
        axios.get(`${BASE_URL}${search}/post`, { headers: { 'app-id': APP_ID } })
        .then( ({data})  => setPosts(data))
        .catch(console.error)
    }
        
    return (
        <div>  
            <Input handleSearch={handlerSearch}/>
            <div className="card-columns mt-5">
                 {
                    posts && posts.data.map((post) => (
                            <Post key={post.id} post={post}/>
                        
                    ))
                 }
            </div>
        </div>
    )
}

export default PostLists