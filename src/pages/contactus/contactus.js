import { useEffect } from "react"

export default function Contactus({set_current_route}){

    useEffect(() =>{
        set_current_route('contact')
    },[])

    return(
        <div className="Contactus">

        </div>
    )
}