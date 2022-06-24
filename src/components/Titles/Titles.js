import React from 'react'
import Category from './Categories/Category'

function Titles({render: element}) {

    const titles = element.map((item, index) => {
        return(
            <Category 
                key={index}
                title={item.category}
                type={item.type}
                data={item.data}
            />
        )
    })

    return (
        <div className='titles-container'>
            {titles}
        </div>
        
    )
}

export default Titles
