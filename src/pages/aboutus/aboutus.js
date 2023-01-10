import { useEffect } from "react"
import './about.css'

export default function Aboutus({set_current_route}) {

    useEffect(() =>{
        set_current_route('about')
    },[])
    return (
        <body>

            <div className="about">
           
           <div className="section-wrapper">
           <div className="text-wrapper">
            <p>Marketica.org was established in order to give an answer for a growing problem:</p>
            <p>How I can donate to organization if I don't know its name ? <br></br>
               How do I search for organizations with different agendas ? <br></br>
               Where I can search for these organizations ?</p>
            <p>Marketica.org is the answer. </p>
            <p>With a vast database collected carefully through the web we present you the solution, a small but effective search engine for donation organizations around the world.</p>
            <p>You can also easily sign up your organization (must have a valid url and a donation page). Just fill out the form at Marketica.org</p>
                
            </div>

           </div>
           
            
            </div>

        </body>
        
    )
}
