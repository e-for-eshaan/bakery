// lib
import React from 'react'

// styles
import "./Categories.scss"

// components
import { CategoriesCard } from '../../components/'

// assets
import cookies from "../../images/cookies.svg"
import cake from "../../images/cake.svg"
import bread from "../../images/bread.svg"
import data from "../../data/categories.json"

const Categories = () => {
    const images = [cake, cookies, bread]
    return (
        <section className='categories'>
            {data.data.categories.map((item, index) => {
                return <CategoriesCard
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    image={images[index]} />
            })}
        </section>
    )
}

export default Categories