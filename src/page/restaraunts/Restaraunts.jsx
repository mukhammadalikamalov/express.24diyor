import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Restaurants.css'; // Import CSS file for styling
import ButtonAppBar from './Header';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('https://api.express24.uz/client/v5/catalog/stores', {
                    params: {
                        latitude: 41.311191,
                        longitude: 69.279776,
                        limit: 25,
                        rootCategoryId: 2
                    }
                });
                console.log('API response:', response.data); // Log the response data
                setRestaurants(response.data.list || []); // Access the list array
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurants();
    }, []);

    return (

        <div className="restaurants-container"> {/* Apply a container class */}
            <ButtonAppBar />

            <h2>Restaurants</h2>
            <div className="restaurants-grid"> {/* Apply a grid class */}
                {restaurants.map(restaurant => (
                    <div className="restaurant-card" key={restaurant.id}>
                        {restaurant.cover && <img className="restaurant-cover" src={restaurant.cover} alt="Cover" />}
                        <div className="restaurant-info">
                            <div className="restaurant-name">Name: {restaurant.name}</div>
                            <div className="restaurant-category">Category: {restaurant.category}</div>
                            <div className="restaurant-price">Price: {restaurant.price}</div>
                            <NavLink to={`/restaurant/${restaurant.id}`} className="restaurant-more">More</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
