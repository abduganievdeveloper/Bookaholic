const fetchData=(relativeUrl, method, data, store)=>{
    const rootUrl='http://api.openweathermap.org/data'
    const absUrl=rootUrl+relativeUrl
    if(method==='GET'){
        fetch(absUrl,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response=>store(response.json()))
        .catch(err=>console.log(err))
    }else if(method==='POST'){
        fetch(absUrl,{
            method:method,
            headers:{
                "Content-Type":"application/json"
            },
            body:data
        })
        .then(response=>store(response.json()))
        .catch(err=>console.log(err))
    }
}
export default fetchData