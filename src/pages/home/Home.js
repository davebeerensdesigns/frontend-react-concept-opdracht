import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../../components/post/Post";
import PostList from "../../components/post-list/PostList";
import PageTitle from "../../components/page-title/PageTitle";

function Home() {

    const [hotPosts, setHotPosts] = useState({});
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        const getHotPosts = async () => {
            await axios.get('https://www.reddit.com/hot.json?limit=15').then(
                (response) => {
                    // handle success
                    const posts = response.data.data.children.map(obj => obj.data);
                    setHotPosts(posts);
                    toggleLoading(false)
                }).catch(
                (error) => {
                    // handle error
                    toggleLoading(false)
                    console.log(error);
                });
        };

        getHotPosts();
    }, []);

    console.log(hotPosts)

    return (
        <>
            <PageTitle>
                <h1>Hottest Posts <small>on Reddit right now</small></h1>
            </PageTitle>
            <PostList loading={loading} posts={hotPosts}/>
        </>
    );
}

export default Home;