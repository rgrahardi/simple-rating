import { useState } from 'react';
import Star from './Star';

function  Rating({length =  5}) {
    const [selectedStars, setSelectedStars] = useState(0);
    const createStars = () => {
        return [...Array(length)].map((obj, i) => {
            return (
                <Star key={`star-${i}`} selected={i < selectedStars}
                onClick={() => {
                setSelectedStars(i + 1)
                }}
                />
            )
        })
    }

    return (
            <div className="rating">
            {createStars()}
            <label> {selectedStars} / {length}</label>
            </div>
        )

}

export default Rating;