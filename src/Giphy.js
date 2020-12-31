import React, { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios';
const url = 'https://api.giphy.com/v1/gifs/trending?api_key=OOroeS13E4kFJDfwrDqGEfAtqdSlERBK';
const url2 = 'https://api.giphy.com/v1/gifs/search?api_key=OOroeS13E4kFJDfwrDqGEfAtqdSlERBK&q=';
const Giphy = () => {
    const [giphy, setGiphy] = useState([]);
    const [search, setSearch] = useState('trending');

    const finalData = async (search) => {
        const responce = await axios(`${url}`)
            .catch(err => { console.log(err) })
        if (responce) {
            setGiphy(responce.data.data);
            console.log(responce.data.data);
        }

    }
    const searchData = async (search) => {
        const responce = await axios(`${url2}${search}`)
            .catch(err => { console.log(err) })
        if (responce) {
            setGiphy(responce.data.data);
            console.log(responce.data.data);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            searchData(search);
        }
    }
    useEffect(() => {

        finalData();

    }, [])

    return (
        <ul>
            <div class="mx-auto st" >
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder='search gif' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="btn btn-dark" type="submit" >Search</button>
                </form>
            </div>


            <div className="container-fluid containers">

                {giphy.map(data => (
                    //{/* <h1>{data.images.downsized.url}</h1> */}
                    <img className="col-lg-3 col-md-4 col-sm-6 col-lg-offset-2 bac" key={data.id} src={data.images.downsized.url} alt={data.title} width="330px" height="300px" />
                ))}
            </div>

        </ul>
    )
}

export default Giphy
