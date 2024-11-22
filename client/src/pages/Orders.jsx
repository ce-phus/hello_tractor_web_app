import React, { useEffect } from 'react'
import { Layout } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import logout from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { getOrders } from '../actions/orderActions'
import Login from './Login'

const Orders = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLoginReducer = useSelector((state)=> state.userLoginReducer)
    const {userInfo} = userLoginReducer

    const getAllOrdersReducer = useSelector((state)=> state.getAllOrdersReducer)
    const {orders, loading, error} = getAllOrdersReducer
    console.log("Orders: ", orders)

    useEffect(()=>{
        dispatch(getOrders())
    }, [dispatch])

    const handlelogout = () => {
        dispatch(logout());
        navigate('/')
    }

    if (!userInfo?.access) {
        return (
            <Login />
        )
    }
  return (
    <Layout>
        <div className='mt-10 mx-3'>
            <h1 className='text-3xl font-bold tracking-wide dark:text-white'>ORDERS</h1>
            <div className='flex flex-col mt-5'>
                {loading ? (
                    <div>Loading</div>
                ) : error ? 
            (<div className='bg-red-500 p-1.5 rounded-lg text-white'>{error}</div>
            ) : (
                <div>
                    {orders && orders.length > 0 ?(
                        <div></div>
                    ): (
                        <p className='text-2xl dark:text-white mt-5'>No orders made....</p>
                    )}
                </div>
            )}
            </div>
        </div>
    </Layout>
  )
}

export default Orders