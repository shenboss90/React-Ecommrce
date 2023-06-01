import React from 'react'
import { Link } from 'react-router-dom';


const Post = (props) => {
  return (
    <div>
      <Link to={`../BlogSinglePage/${props.id}`}>
        <h1>{props.title}</h1>
      </Link>
      <p>{props.body}</p>
    





    </div>
  )
}

export default Post;