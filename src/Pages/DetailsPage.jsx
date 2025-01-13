import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postDetails} from "../APIRequest/APIRequest.js";
import Loader from "../Components/Loader.jsx";
import BlogDetails from "../Components/BlogDetails.jsx";

const DetailsPage = () => {

    let {postID} = useParams();

    const [list, setList] = useState(null)

    useEffect(()=>{
        (async()=>{
            let res = await postDetails(postID)
            setList(res)
        })()

    },[postID])


    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetails list = {list}/>}

        </Layout>
    );
};

export default DetailsPage;