import React, { useEffect, useState } from 'react'
import './styleMeals.css'
import axios from 'axios'

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                setItems(res.data.meals);
            }).catch((err) => {
                console.log(err);
            })
    }, []);

    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
        <section className="card" key={idMeal}>
            <img src={strMealThumb} alt={strMeal} />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    ))

    return (
        <div className="meals-wrapper">
            <h1 className="main-heading">Seafood Meals</h1>
            <div className="items-container">
                {itemsList}
            </div>
        </div>
    )
}

export default Meals