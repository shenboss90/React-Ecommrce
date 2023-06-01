import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Post from '../blog/post';
import Comment1 from '../comments/comment';

const BlogSinglePage = () => {
    const[Page, setPage] = useState({});
    const{postId} = useParams()
    
    function SinglePost() {
  
        axios.get(`https://dummyjson.com/posts/${postId}`)
        .then(response =>{
        setPage(response.data)
        console.log('page', Page);
    })
}
    useEffect(()=>{
        SinglePost()
    },[])
    let isBlog = Object.keys(Page).length>0? true:false;
  return (
    <div>
    
        {isBlog?
        <div>
          <Post title={Page.title} body= {Page.body}/>
        </div>
          
           :'Loading Page'
        }
        
       
    </div>
  )
    
    
}

export default BlogSinglePage