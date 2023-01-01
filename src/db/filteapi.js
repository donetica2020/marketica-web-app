import axios from "axios"

const filterSerch = async (data) => {
    console.log(data)
    let x = await axios({
        method: 'get',
        url: `https://apimarketica.org/search-filter?country=${data.country}&continent=${data.continent}&keyword=${data.keyword}`,
        responseType: 'json',
    }).then((response) => {
        return response.data
    })
        .catch(err => {
            console.log(err)
            return 'error'
        })
    return x
}

export default filterSerch;


