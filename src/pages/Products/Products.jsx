import React from 'react'
import "./Products.scss"
import { PageSection } from '../../layout'
import { ProductSection } from "../../features"
const Products = ({ selection }) => {
    return (
        <PageSection>
            <ProductSection selection={selection} />
        </PageSection>
    )
}

export default Products