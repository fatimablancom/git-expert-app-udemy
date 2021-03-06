import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['batman']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {categories.map(category => 
                   <GifGrid 
                        category={category}
                        key={category}
                    />
                )}
            </ol>
            
        </>
    )
}

// GifExpertApp.propTypes = {}

export default GifExpertApp