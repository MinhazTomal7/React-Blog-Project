import React, {useEffect, useState} from 'react';
import {postCategories} from "../APIRequest/APIRequest.js";
import {NavLink} from "react-router-dom";

const Layout = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        (async()=>{
            let res = await postCategories()
            setCategories(res)
        })()

    },[])






    return (
        <div>
            <div className="navbar fixed z-50 top-0 shadow bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                             <li><NavLink to = {"/"}>Home</NavLink></li>
                            {
                                categories.map((item,index)=> {
                                    return <li key={index.toString()}><NavLink key={index}
                                                   to = {"/byCategory/"+item['id']}>{item['name']}</NavLink></li>
                                })

                            }


                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Code Master  </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        {
                            categories.map((item, index) => {
                                return <li key={index.toString()}><NavLink
                                    to={"/byCategory/" + item['id']}>{item['name']}</NavLink></li>
                            })

                        }
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;