import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConfig, apiEndPoint } from '../axios'
import { Spinner } from '../components'

export const Home = () => {

    const loadSpinner = useSelector((state) => state.spinner.loading)
    //console.log(loadSpinner)

    const [data, setData] = useState([])
    //console.log(data)

    useEffect(() => {
        const getProducts = async () => {
            const res = await apiConfig.get(`${apiEndPoint.products}`);
            //console.log(res.data)
            setData(res.data)
        }
        getProducts();
    }, [])

    return (
        <>
            {/* <Spinner /> */}
            <div className='container my-4'>
                <div className='row'>
                    {loadSpinner && <Spinner />}
                    {
                        data.map((item) => {
                            return (
                                <div className='col-4' key={item.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}
