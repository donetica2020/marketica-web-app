import { useEffect } from "react"
import './donate.css'

export default function Donate({set_current_route}){

    useEffect(() =>{
        set_current_route('donate')
    },[])

    return(
        <body>
            <div className="donate">
                
                
            <div className="section-wrapper">
           <div className="text-wrapper">
            <p>Coming soon...</p>
       
            </div>

           </div> 
            
            </div>
        </body>
    )
}