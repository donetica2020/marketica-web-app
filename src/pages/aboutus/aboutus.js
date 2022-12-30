import { useEffect } from "react"


export default function Aboutus({set_current_route}) {

    useEffect(() =>{
        set_current_route('about')
    },[])
    return (
        <div className="AboutUs">
           
        </div>
    )
}