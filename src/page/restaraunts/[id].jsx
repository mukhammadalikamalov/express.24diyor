// RestaurantById.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantById = () => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurantById = async () => {
            try {
                const response = await axios.get('https://api.express24.uz/client/v5/catalog/stores/your_store_id_here');
                setRestaurant(response.data);
            } catch (error) {
                console.error('Error fetching restaurant by ID:', error);
            }
        };

        fetchRestaurantById();
    }, []);

    return (
        <div>
            <p>Name: {restaurant.name}</p>
            {restaurant && (
                <div>
                    <p>ID: {restaurant.id}</p>
                </div>
            )}
        </div>
    );
};

export default RestaurantById;
