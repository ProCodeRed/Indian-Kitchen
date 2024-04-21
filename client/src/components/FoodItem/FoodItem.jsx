import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({item}) => {
    const { _id, name, description, price, image} = item
    
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt={name} />
            {
                !cartItems[_id] ? 
                <img className='add' src={assets.add_icon_white} alt="add icon" srcset={assets.add_icon_white} onClick={() => addToCart(_id)} />
                : 
                <div className='food-item-counter'>
                    <img src={assets.remove_icon_red} alt="remove icon" srcset={assets.remove_icon_red} onClick={() => removeFromCart(_id)} />
                    <p>{cartItems[_id]}</p>
                    <img src={assets.add_icon_green} alt="add icon" srcset={assets.add_icon_green} onClick={() =>addToCart(_id)} />
                </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">&#8377;{price}</p>
        </div>
    </div>
  )
}

export default FoodItem