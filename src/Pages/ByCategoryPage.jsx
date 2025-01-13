import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postByCategory, postLatest} from "../APIRequest/APIRequest.js";
import Loader from "../Components/Loader.jsx";
import BlogList from "../Components/BlogList.jsx";

const ByCategoryPage = () => {

    let {categoryID} = useParams();

    const [list, setList] = useState(null)

    useEffect(()=>{
        (async()=>{
            let res = await postByCategory(categoryID)
            setList(res)
        })()

    },[categoryID])



    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list = {list} />}
        </Layout>
    );
};

export default ByCategoryPage;