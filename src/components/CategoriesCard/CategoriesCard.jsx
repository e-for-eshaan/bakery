import React from 'react'
import "./CategoriesCard.scss"
import { Link } from 'react-router-dom'

const CategoriesCard = ({ title, image, description, link }) => {
    return (
        <Link style={{ textDecoration: "none" }} to={link} className='categoryCard'>
            <div className="categoryContent">
                <div className="categoryText">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <img src={image} width={100} alt="" />
            </div>
        </Link>
    )
}

export default CategoriesCard