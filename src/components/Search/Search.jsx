import { debounce } from 'lodash'
import React, { useEffect } from 'react'

import './Search.scss'

const Search = ({ selection, setData, originalData, setIsLoading }) => {

    useEffect(() => {
        const handleTypeFilters = (type) => {
            if (!type || type === 'all') {
                setIsLoading(true)
                setData(originalData)
                setIsLoading(false)
                return
            }
            setIsLoading(true)
            const temp = originalData?.filter(item => item.type === type)
            setIsLoading(false)
            setData(temp)
        }
        handleTypeFilters(selection)
    }, [selection, originalData, setData, setIsLoading])

    const handleQueryFilter = (query = "") => {
        if (!query) {
            setIsLoading(true)
            setData(originalData)
            setIsLoading(false)
            return
        }
        const temp = originalData?.filter(item => {
            if (!query) {
                return item
            }
            return item.item_name.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
        })
        setData(temp)
    }

    const handleInputChange = debounce((value) => {
        handleQueryFilter(value)
    }, 500);

    const handleChange = (event) => {
        const { value } = event.target;
        if (!value) {
            setData(originalData)
            return
        }
        handleInputChange(value);
    };
    return (
        <div className='searchBar'>
            <input placeholder={`Search ${selection}`} type='text' onChange={handleChange} />
        </div>
    )
}

export default Search