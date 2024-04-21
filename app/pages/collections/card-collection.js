"use client";

import { useState } from "react"

export default function CardCollection({cards}){
    const[sortBy, setSortBy] = useState('category');

    const sortByName =()=>{
        setSortBy('name');
    }
    const sortByCategory =()=>{
        setSortBy('category');
    }

    const sortedItems = cards.sort((a, b) => {
        let item1 = a[sortBy];
        let item2 = b[sortBy];

        if(item1 < item2){
            return -1;
        }
        else if(item1 > item2){
            return 1;
        }
        else{
            item1 = a.id;
            item2 = b.id;

            if(item1 < item2){
                return -1;
            }
            else{
                return 0;
            }
        }
    })

    return(
        <div>
            <div className="text-right mr-20 mb-20">
                Sort By:
                <button className="border-2 h-10 w-24 m-5" title="Category" onClick={sortByCategory}>Category</button>
                <button className="border-2 h-10 w-24" title="Name" onClick={sortByName}>Name</button>
            </div>
            <div className="flex justify-center">
                <div>
                    {sortBy == 'name' && (
                        <div className="flex flex-row flex-wrap w-full ">
                            {sortedItems.map((card, index) => {return(
                                <div className="w-1/3 h-56 text-center" key={card.id}>
                                    <div>
                                        <div>
                                            Name: {card.name}
                                        </div>
                                        <div>
                                            Category: {card.category}
                                        </div>
                                        <div>
                                            Season: {card.season}
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => alert(card.name)}>Information</button>
                                    </div>
                                </div>
                            )})}
                        </div>
                    )}
                </div>
                
                <div>
                    {sortBy == 'category' && (
                        <div className="flex flex-row flex-wrap w-full">
                            {sortedItems.map((card, index) => {return(
                                <div className="w-1/3 h-56 text-center" key={card.id} >
                                    <div>
                                        <div>
                                            Name: {card.name}
                                        </div>
                                        <div>
                                            Category: {card.category}
                                        </div>
                                        <div>
                                            Season: {card.season}
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={(() => alert(card.name))}>Information</button>
                                    </div>
                                </div>
                            )})}
                        </div>
                    )}
                </div>
                
                
            </div>
            
        </div>
    )
}