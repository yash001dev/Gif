import React, { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://api.giphy.com/v1/stickers/trending?api_key=OOroeS13E4kFJDfwrDqGEfAtqdSlERBK&limit=25&rating=g'

function Mainpg() {
    const [giphy, setGiphy] = useState();

    const alldata = async (user) => {
        const giphys = await axios(`${url}`)
            // .then(console.log(giphys.data));
            .catch(err => console.log(err));
        if (giphys) {
            const data = giphys.data.data.map((obj) => {
                <h1>{data.id}</h1>
            })
        }
    }

    useEffect(() => {
        alldata();
    }, []);


    <div>

    </div>

}

export default Mainpg
