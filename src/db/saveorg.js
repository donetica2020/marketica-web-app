
const saveOrg = async (data) => {
    let x = await fetch('https://apimarketica.org/save-org', {
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