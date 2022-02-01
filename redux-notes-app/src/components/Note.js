import React from 'react';

export default function Note({ id, content, color }) {
    return (
        <div className={color + ' ring-2 m-2 p-4 h-36 text-lg shadow-xl ring-black'}>
            {content}            
        </div>
    )
}
