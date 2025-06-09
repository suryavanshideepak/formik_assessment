import React, { useEffect } from 'react'
import { getAllData } from '../app/getApiSlice'
import { useDispatch, useSelector } from 'react-redux'

const DemoApiCall = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.getData.getData)
    useEffect(() => {
        dispatch(getAllData())
    },[dispatch])
  return (
    <div>
         {
                user?.products?.map((item, index ) => {
                    return(
                        <p key={item.id}>{item.title}</p>
                    )
                })
            }
    </div>
  )
}

export default DemoApiCall