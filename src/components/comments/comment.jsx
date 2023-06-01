import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singlecomment from './singlecomment'

const Comment1 = ({id}) => {
    
const[Comm , useComm] = useState({})
        function DisplayComment(){
            axios.get(`https://dummyjson.com/posts/1/comments`)
            .then(res =>{
                 useComm(res.data)
                 console.log(Comm);

            })
        }
useEffect(()=>{
    DisplayComment()
})
 let isComment= Object.keys(Comm)>0?  true:false
  return (
    
        <div>
    
    {isComment?
    <div>
      <Singlecomment title={Comm.title} body= {Comm.body}/>
    </div>
      
       :'Loading Page'
    }
    
   <Comment id={postId}/>
</div>
  
  )
}

export default Comment1