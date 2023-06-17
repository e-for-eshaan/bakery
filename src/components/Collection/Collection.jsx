import React, { useState } from 'react'
import Search from '../Search/Search'
import ItemGrid from '../ItemGrid/ItemGrid'
import itemData from "../../data/items.json"
import "./Collection.scss"
const Collection = ({ selection }) => {
    const [data, setData] = useState(itemData.data)
    const [isLoading, setIsLoading] = useState(true)
    const originalData = itemData.data
    return (
        <div>
            <Search
                setData={setData}
                data={data}
                selection={selection}
                originalData={originalData}
                setIsLoading={setIsLoading}
            />
            {!isLoading && <ItemGrid data={data} selection={selection} />}
        </div>
    )
}

export default Collection