import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import BlogList from "../Components/BlogList.jsx";
import {postLatest} from "../APIRequest/APIRequest.js";

const HomePage = () => {
    const [list, setList] = useState([])

    useEffect(()=>{
        (async()=>{
            let res = await postLatest()
            setList(res)
        })()

    },[])




    return (
     <Layout>
         <BlogList list={list}/>
     </Layout>
    );
};

export default HomePage;