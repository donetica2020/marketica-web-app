import { useEffect } from "react"
import './contact.css'

export default function Contactus({set_current_route}){

    useEffect(() =>{
        set_current_route('contact')
    },[])

    return(

        <body>
        <div className="contact">
        <div className="section-wrapper">
           <div className="text-wrapper">
            <p>You may contact us at info@marketica.org for any other questions or queries arise.</p>
            <p>Marketica.org is powered by Donetica Inc. <br></br>
               850 NEW BURTON ROAD SUITE 201<br></br>
               DOVER<br></br>
               DE 19904<br></br>
               USA</p>
                
            </div>

           </div>
        </div>
        </body>
        
    )
}
