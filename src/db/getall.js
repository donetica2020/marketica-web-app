import axios from "axios";
const getallOrg = async() =>{
    let data = await axios({
        method:'get',
        url:'http://ec2-54-82-252-133.compute-1.amazonaws.com:4000/all-org',
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