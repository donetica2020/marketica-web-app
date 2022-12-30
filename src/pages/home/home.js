import { useEffect, useState } from "react";
import './home.css'
import Top from "./components/top/top";
import OrgList from "./components/orglist/orglist";
import RecommendedOrganization from "./components/recommended/recommended";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
//data functions
import getallOrg from "../../db/getall";
export default function Home({ set_current_route }) {

    async function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    const [list, set_list] = useState([]);
    const [recommended, set_recommended] = useState([])
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
    return (
        <div className="home">
            <Top list={list} />
            <RecommendedOrganization recommended={recommended} />
            <Form />
            <Footer />
        </div>
    )
}