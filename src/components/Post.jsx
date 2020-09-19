import moment from 'moment';
import React from 'react';


const Post = ({post}) => {
    
    return ( 
        <div>
            <div className="card p-2">
                <div className="d-flex header-card">
                    <img src={post.owner.picture} alt="Avatar" className="avatar mr-3 mt-3"/>
                    <h5 className="card-title">{post.owner.firstName} {post.owner.lastName}</h5>  
                    <p>{post.owner.email}</p>
                <hr/>
                </div>
                    <img className="card-img-top img-fluid mb-3" src={post.image} alt={post.id}/>
                    {
                        post.tags.map(tag =>(<span key={tag}>#{tag}</span>))
                    }
                <div className="card-body">
                    <p className="card-text">{post.text}</p>
                <hr/>
                    <h5><i className="fas fa-heart mr-2"></i>{post.likes} Likes</h5>
                <hr/>
                    <a href={post.link}>{post.link}</a><br/>
                    <small className="text-muted">{moment(post.publishDate).format('MMMM Do YYYY, h:mm:ss a')}</small>
                </div>
            </div>
        </div>
    );
  
}

export default Post;
