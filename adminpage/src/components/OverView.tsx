import React, { useEffect, useState } from 'react'

const OverView = () => {

    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("https://67ed31d44387d9117bbcac6b.mockapi.io/overView")
            .then((res) => res.json())
            .then((data) => setdata(data));
    }, []);
    console.log(data)
    return (
        <div>
            <div>
                {data.map((item) => {
                    return <div>
                            <h1>{}</h1>
                                
                        </div>
                })};
            </div>
        </div>
    )
}

export default OverView
