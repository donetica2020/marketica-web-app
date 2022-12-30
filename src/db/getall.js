import axios from "axios";
const getallOrg = async() =>{
    let data = await axios({
        method:'get',
        url:'https://apimarketica.org/all-org',
        responseType:'json',
    }).then((response) =>{
        return response.data
    })
    .catch(err =>{
        console.log(err)
        return 'error'
    })
    return data

}
export default getallOrg