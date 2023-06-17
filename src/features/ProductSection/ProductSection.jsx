import React, { useState } from 'react'
import './ProductSection.scss'
import { Link, Outlet } from 'react-router-dom'
import data from '../../data/categories.json'
import Modal from '../../components/Modal/Modal'
const ProductSection = () => {
    const [show, setShow] = useState(true)


    return (
        < div className='productSection' >
            <div className='links'>
                {data.data.categories.map(item => <Link style={{ textDecoration: "none", color: 'inherit', flex: 1 }} to={`/${item.link}`}>
                    <div>
                        {item.title}
                    </div>
                </Link>)}
            </div>
            <Modal isOpen={show} onClose={() => setShow(false)}>
                <div style={{ color: "black" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum suscipit necessitatibus dicta blanditiis maiores temporibus
                    est voluptate accusantium placeat facilis quo culpa, officia omnis
                    cumque nobis iure aspernatur corrupti itaque nisi. Distinctio,
                    officiis rerum?
                </div>
            </Modal>
            <Outlet />
        </ div >
    )
}

export default ProductSection