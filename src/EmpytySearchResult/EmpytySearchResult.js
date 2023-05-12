import React from 'react'
import './EmpytySearchResult.css';

function EmpytySearchResult({ searchText }) {
    return (
        <div className='container-loader'>
            No hay resultado para "{searchText}"
            <div className="loader-empyty">
                <div className="cover"></div>
            </div>
        </div>
    )
}

export { EmpytySearchResult }
