import { useEffect, useState } from "react";
import './home.css'
import Top from "./components/top/top";
import RecommendedOrganization from "./components/recommended/recommended";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
//data functions
import getallOrg from "../../db/getall";
import { FiSearch } from 'react-icons/fi';

export default function Home({ set_current_route }) {

    async function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    const [list, set_list] = useState([]);
    const [recommended, set_recommended] = useState([]);
    useEffect(() => {
        set_current_route('home');
        getallOrg().then(res => {
            if (res !== 'error') {
                set_list(res)
                let array = []
                for (let i = 0; i < 4; i++) {
                    getRandomInt(0, res.length).then(rand_Number => {
                        array.push(res[rand_Number])
                    })
                }
                set_recommended(array)
            }
        }).catch(er => {
            console.log(er)
        })
    }, []);
    useEffect(() => {
        window.addEventListener('wheel', myScrollFunction)
        return (() => { window.removeEventListener('wheel', myScrollFunction) })
    }, [])

    const myScrollFunction = () => {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("hiddenForm").style.top = "0";
        } else {
            document.getElementById("hiddenForm").style.top = "-200px";
        }
    }
    const [searched, set_Searched] = useState();
    const handleSearched = (e) => {
        if (e.target.value !== undefined && e.target.value.length > 0) {
            set_Searched(e.target.value)
        } else {
            set_Searched(undefined)
        }
    }


    return (
        <div className="home">
            <div id="hiddenForm">
                <div  className='hidden-searchbar'>
                    <input name='searched_text' id='hidden-searchbar-input' type='text' onChange={handleSearched} placeholder='SUPPORT US BY SEARCHING THE WEB' />
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.bing.com/?q=${searched == undefined ? '' : searched}`}><FiSearch id='hidden-search-icon' /></a>
                </div>
            </div>
            <Top list={list} />
            <RecommendedOrganization recommended={recommended} />
            <Form />
            <Footer />
        </div>
    )
}