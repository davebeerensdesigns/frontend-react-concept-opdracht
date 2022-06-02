import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import PageTitle from "../../components/page-title/PageTitle";
import axios from "axios";
import Article from "../../components/article/Article";
import {useLocation, useParams} from "react-router-dom";

function Post(props) {
    const [subReddit, setSubReddit] = useState({});
    const [loading, toggleLoading] = useState(true);

    let params = useParams();

    useEffect(() => {
        const getSubReddit = async () => {
            await axios.get(`https://www.reddit.com/r/${params.subredditId}/about.json`).then(
                (response) => {
                    // handle success
                    const posts = response.data.data;
                    setSubReddit(posts);
                    toggleLoading(false)
                }).catch(
                (error) => {
                    // handle error
                    toggleLoading(false)
                    console.log(error);
                });
        };

        getSubReddit();
    }, [params]);

    return (
        <>
            <Header>
                <PageTitle>
                    {loading && <div>loading...</div>}
                    {!loading && (<h1>r/<span>{subReddit.display_name}</span> <small>Subreddit specifications</small></h1>)}
                </PageTitle>
            </Header>
            <div className='container'>
                <Article title={subReddit.display_name} description={subReddit.description} subs={subReddit.subscribers}/>
            </div>
        </>
    );
}

export default Post;