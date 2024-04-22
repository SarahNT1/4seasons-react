"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

async function fetchDescription(name, category){
    const response = await fetch(`https://www.dnd5eapi.co/api/${category}/${name}`);

    const data = await response.json();
    if(data.desc != null){
        const descript = data.desc;
        return descript;
    }
    else{
        return null;
    }
}

export default function CardCollection({cards}){
    const[description, setDescription] = useState('');
    const[sortBy, setSortBy] = useState('category');
    const[informationClicked, setInformationClicked] = useState(false);
    const[information, setInformation] = useState('');

    const handleInfo =(card)=>{
        if(!informationClicked){
            setInformation(card);
        }
    }

    const loadDescription = async()=>{
        const fetchedDescription = await fetchDescription(information.name, information.category);
        if(fetchedDescription != null){
            setDescription(fetchedDescription);
        }
        else{
            setDescription(null);
        }
    }

    useEffect(() =>{
        loadDescription()
    }, [information]);

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

    const handleScroll =(event)=>{
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
            top: 0,
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        })
    }

    return(
        <div className="h-fit ">
            <div className="text-right mr-20 mb-11">
                Sort By:
                <button className="border-2 h-10 w-24 m-3" title="Category" onClick={sortByCategory}>Category</button>
                <button className="border-2 h-10 w-24" title="Name" onClick={sortByName}>Name</button>
            </div>
            <div className="flex overflow-hidden overflow-x-scroll">
                <div>
                    {sortBy == 'name' && (
                        <div className="flex flex-nowrap whitespace-nowrap" onScroll={handleScroll}>
                            {sortedItems.map((card, index) => {return(
                                <div className="w-80 text-center " key={card.id}>
                                    <div className="w-2/3 mt-5 ml-auto mr-auto">
                                        <div className="w-full ml-auto mr-auto">
                                            <Image width={300} height={500} src={card.imageUrl}/>
                                        </div>
                                        <div>
                                            <button className="bg-red-500 w-1/2 h-10" onMouseEnter={() => handleInfo(card)} onClick={() => {setInformationClicked(true); loadDescription()}}>Information</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            )})}
                        </div>
                    )}
                </div>
                
                <div>
                    {sortBy == 'category' && (
                        <div className="flex flex-nowrap whitespace-nowrap" onScroll={handleScroll}>
                            {sortedItems.map((card, index) => {return(
                                <div className="w-80 text-center " key={card.id}>
                                    <div className="w-2/3 mt-5 ml-auto mr-auto">
                                        <div className="w-full ml-auto mr-auto">
                                            <Image width={300} height={500} src={card.imageUrl}/>
                                        </div>
                                        <div>
                                            <button className="bg-red-500 w-1/2 h-10" onMouseEnter={() => handleInfo(card)} onClick={() => {setInformationClicked(true); loadDescription()}}>Information</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            )})}
                        </div>
                    )}
                </div>
                
                <div>
                    {informationClicked == true && (
                        <div className="absolute left-1/4 h-3/4 top-1/4 flex flex-row w-3/4">
                            <div className="pt-5 w-1/3 h-4/5 bg-slate-500">
                                <Image className="ml-auto mr-auto mt-auto mb-auto" width={300} height={500} src={information.imageUrl}></Image> 
                                <div className="text-center mt-4"> 
                                    <button className="bg-blue-500 w-2/3 h-10 border-2 mt-auto" onClick={() => setInformationClicked(false)}>Close</button>
                                </div>
                            </div>
                            {description != null && (
                                <div className="border-2 w-1/3 h-4/5 bg-green-500">
                                    <div>
                                        {description}
                                    </div>
                                </div> 
                            )}
                            {description == null && (
                                <div className="border-2 w-1/3 h-4/5 bg-green-500">
                                    No description
                                </div>
                            )}
                        </div>
                    )}
                </div>
                
            </div>
            
        </div>
    )
}