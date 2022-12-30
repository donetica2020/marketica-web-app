import { useEffect } from "react"

export default function Donate({set_current_route}){

    useEffect(() =>{
        set_current_route('donate')
    },[])

    return(
        <div className="Donate">

        </div>
    )
}