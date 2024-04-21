import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    const categoryHandler = (item) => {
        let selectedItem = item
        setCategory((prev) => prev === selectedItem.menu_name ? "All" : selectedItem.menu_name)
    }

    console.log("Category", category)
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse featuring a delectable array of dishes. Our main mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className='explore-menu-list'>
            {
                menu_list.map((item, index) => {
                    return (
                        <div className='explore-menu-list-item' key={index} onClick={() =>categoryHandler(item)}>
                            <img src={item.menu_image} className={category === item.menu_name ? "active" : null} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu