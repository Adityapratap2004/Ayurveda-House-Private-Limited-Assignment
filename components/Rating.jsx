// Rating.js
'use client'
import { useState } from "react";

const Rating = ({ heading, subheading }) => {
    const [selectedRating, setSelectedRating] = useState(0);

    function handleClick(rating) {
        setSelectedRating(rating);
    }

    return (
        <div className="py-5 border-t-0 border-l-0 border-r-0 border-b border-dashed border-gray-300">
            <h2 className="text-2xl  ">{heading}</h2>
            <p className="text-sm  font-sans text-[#babdc0] ">{subheading}</p>
            <div className="text-7xl h-[100px]  text-[#dddfe1] flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span
                        key={i}
                        data-rating={i}
                        onClick={() => handleClick(i)}
                        className=" transition-colors  duration-150   hover:text-8xl hover:text-[#FDCC0D] cursor-pointer"
                        style={{ color: i <= selectedRating ? "#FDCC0D" : "" }}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Rating;
