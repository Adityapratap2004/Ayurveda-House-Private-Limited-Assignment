"use client"
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Rating from "./Rating";
import { useState } from "react";
const Review = () => {
    const starRating = [
        {
            id: 1,
            heading: "Safety",
            subheading: "How safe did you feel with Trausti?",
        },
        {
            id: 2,
            heading: "Communication",
            subheading: "How easy was to communicate with Trausti?",
        }
    ]

    const praise = [
        {
            id: 1,
            praise: "Adventurous",
        },
        {
            id: 2,
            praise: "Clean",
        },
        {
            id: 3,
            praise: "Good listener",
        }
    ]

    const [isThumbsDownHovered, setThumbsDownHovered] = useState(false);
    const [isThumbsUpHovered, setThumbsUpHovered] = useState(false);
    const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
    const [thumbsUpClicked, setThumbsUpClicked] = useState(false);

    const handleThumbsDownClick = () => {
        setThumbsDownClicked(true);
        setThumbsUpClicked(false);
    };

    const handleThumbsUpClick = () => {
        setThumbsUpClicked(true);
        setThumbsDownClicked(false);
    };

    const [selectedPraises, setSelectedPraises] = useState([]);
    const handlePraiseClick = (id) => {
        
        if (selectedPraises.includes(id)) {
            setSelectedPraises((prevSelected) => prevSelected.filter((prevId) => prevId !== id));
        } else {
            setSelectedPraises((prevSelected) => [...prevSelected, id]);
        }
    };
    


    return (
        <div>
            <div className="text-2xl">
                &#10006;
            </div>
            <h1 className=" text-4xl mb-4">Leave a review</h1>
            {
                starRating.map((r) => {
                    return <Rating key={r.id} heading={r?.heading} subheading={r?.subheading} />
                })
            }

            {/* recommed section  */}
            <div className="py-5 border-t-0 border-l-0 border-r-0  border-b  border-dashed border-gray-300">
                <h2 className="text-2xl ">Would you recommend Trausti?</h2>
                <p className="text-sm font-sans  text-[#babdc0] ">Your opinion won't be posted publicly</p>
                <div className="text-5xl flex h-[100px] gap-6 text-[#dddfe1]">
                    <div
                        className={`flex  items-center ${isThumbsDownHovered ? 'hover:text-[#FF5733]' : ''} ${thumbsDownClicked ? 'text-[#FF5733]' : ''}`}
                        onMouseEnter={() => setThumbsDownHovered(true)}
                        onMouseLeave={() => setThumbsDownHovered(false)}
                    >
                        <FaThumbsDown className=" hover:text-[3.5rem] pr-3" onClick={handleThumbsDownClick} />
                        <p className="text-[24px] font-sans">No</p>
                    </div>
                    <div
                        className={`flex items-center ${isThumbsUpHovered ? 'hover:text-[#90EE90]' : ''} ${thumbsUpClicked ? 'text-[#90EE90]' : ''}`}
                        onMouseEnter={() => setThumbsUpHovered(true)}
                        onMouseLeave={() => setThumbsUpHovered(false)}

                    >
                        <FaThumbsUp className=" hover:text-[3.5rem] pr-3" onClick={handleThumbsUpClick} />
                        <p className="text-[24px] font-sans">Yes</p>
                    </div>
                </div>
            </div>

            {/* Praise  */}
            <div className="py-5 border-t-0 border-l-0 border-r-0  border-b  border-dashed border-gray-300">
                <h2 className="text-[1.70rem]  ">Praise</h2>
                <p className="text-sm font-sans text-[#babdc0]">What traits best describe Trausti?</p>
                <div className="text-md  font-sans py-4 flex gap-2 ">
                    {
                        praise.map((p) => {
                            return <span key={p.id} className={`py-2 px-3  rounded-3xl transition ease-in-out delay-150  hover:bg-[#90EE90] duration-300 cursor-pointer ${selectedPraises.includes(p.id) ? 'bg-[#90EE90]' : 'bg-[#dddfe1]'} `}
                                onClick={() => handlePraiseClick(p.id)}
                            >{p.praise}</span>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default Review
