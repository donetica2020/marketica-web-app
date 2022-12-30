
const saveOrg = async (data) => {
    let x = await fetch('http://ec2-54-82-252-133.compute-1.amazonaws.com:4000/save-org', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
    }).then(async (res) => {
        console.log(res)
        return res
    }).catch(err =>{
        console.log(err)
    })
}
export default saveOrg;