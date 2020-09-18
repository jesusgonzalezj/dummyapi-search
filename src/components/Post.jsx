import moment from 'moment';
import React from 'react';


const Post = ({post}) => {
    
    return ( 
        <div>
            <div className="card">
                <div className="container">
                <p className="card-title"><img src={post.owner.picture} alt="Avatar" className="avatar"/>{post.owner.firstName} {post.owner.lastName}</p>  
                <p>{post.owner.email}</p>
                <hr/>
                </div>
                    <img className="card-img-top" src={post.image} alt={post.id}/>
                    {
                        post.tags.map(tag =>(<span key={tag}>{tag}</span>))
                    }
                
                    <div className="card-body">
                    <p className="card-text">{post.text}</p>
                    <a href={post.link}>{post.link}</a>
                    <div>{post.likes} Likes</div>
                    <div>{moment(post.publishDate).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </div>
            </div>
        </div>
    );
  
}

export default Post;
