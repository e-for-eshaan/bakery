import React from 'react'
import './ProductSection.scss'
import { Link, Outlet } from 'react-router-dom'
import data from '../../data/categories.json'

const ProductSection = () => {

    return (
        < div className='productSection' >
            <div className='links'>
                {data.data.categories.map(item => <Link style={{ textDecoration: "none", color: 'inherit', flex: 1 }} to={`/${item.link}`}>
                    <div>
                        {item.title}
                    </div>
                </Link>)}
            </div>
            <Outlet />
        </ div >
    )
}

export default ProductSection