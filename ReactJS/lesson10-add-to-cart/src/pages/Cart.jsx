import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const { isEmpty, items, updateItemQuantity, removeItem, cartTotal,emptyCart } = useCart();
    return (
        <>
            {isEmpty ? <div className="my-5 d-flex align-items-center justify-content-center"><img src="https://supershopping.lk/images/home/Cart-empty.gif" /></div> : <div className='d-flex align-items-center justify-content-center flex-column'>
                <h1 className='my-5'>Basket</h1>
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img width={100} src={item.images[0]} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-dark'>-</button>
                                        <span className='mx-3'>{item.quantity}</span>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-dark'>+</button>
                                    </td>
                                    <td><button className='btn btn-danger' onClick={() => { removeItem(item.id) }}>X</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <h4 className='my-5'>Total price:<span className='text-danger'> ${cartTotal}</span></h4>
                    <button className=' btn btn-dark' onClick={()=>{emptyCart()}}>Clear all</button>
                </div>

            </div>}

        </>

    )
}

export default Cart