import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    console.log("food_list", food_list)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {
                    food_list.map((item, index) => {
                        return <FoodItem key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay