import React from 'react';
import Post from "../post/Post";
import './PostList.css';

function PostList({loading, posts}) {
    return (
        <section className='post-list'>
            {loading && <div className='loading'>loading...</div>}
            {!loading && posts.map(
                (post) => {
                    return <Post key={post.id} title={post.title} link={'/subreddit/' + post.subreddit} label={post.subreddit_name_prefixed} comments={post.num_comments} ups={post.ups} />
                }
            )
            }
        </section>
    );
}

export default PostList;