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

    return(
        <div className="h-fit pb-10 rounded-2xl border-2 bg-slate-900">
            <div className="text-right mr-20 mb-11 text-white">
                Sort By:
                {sortBy == 'category' ? (<button className="border-2 h-10 w-24 m-3 bg-orange-700" title="Category" onClick={sortByCategory}>Category</button>):
                (<button className="border-2 h-10 w-24 m-3 bg-orange-500 hover:bg-orange-700" title="Category" onClick={sortByCategory}>Category</button>)}
                {sortBy == 'name' ? (<button className="border-2 h-10 w-24 bg-orange-700" title="Name" onClick={sortByName}>Name</button>):
                (<button className="border-2 h-10 w-24 bg-orange-500 hover:bg-orange-700" title="Name" onClick={sortByName}>Name</button>)}

            </div>
            <div className="flex overflow-hidden overflow-x-scroll scrollbar-thin">
                <div>
                    {sortBy == 'name' && (
                        <div className="flex flex-nowrap whitespace-nowrap">
                            {sortedItems.map((card, index) => {return(
                                <div className="w-80 text-center " key={card.id}>
                                    <div className="w-2/3 mt-2 mb-5 ml-auto mr-auto">
                                        <div className="w-full ml-auto mr-auto">
                                            <Image width={300} height={500} src={card.imageUrl}/>
                                        </div>
                                        <div>
                                            <button className="text-white border-2 bg-orange-500 w-1/2 h-10 hover:bg-orange-700" onMouseEnter={() => handleInfo(card)} onClick={() => {setInformationClicked(true); loadDescription()}}>Information</button>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    )}
                </div>
                
                <div>
                    {sortBy == 'category' && (
                        <div className="flex flex-nowrap whitespace-nowrap">
                            {sortedItems.map((card, index) => {return(
                                <div className="w-80 text-center " key={card.id}>
                                    <div className="w-2/3 mt-2 mb-5 ml-auto mr-auto">
                                        <div className="w-full ml-auto mr-auto">
                                            <Image width={300} height={500} src={card.imageUrl}/>
                                        </div>
                                        <div>
                                            <button className="text-white border-2 bg-orange-500 w-1/2 h-10 hover:bg-orange-700" onMouseEnter={() => handleInfo(card)} onClick={() => {setInformationClicked(true); loadDescription()}}>Information</button>
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
                            <div className="border-4 border-r-0 border-orange-500 pt-5 w-1/3 h-4/6 bg-slate-900 rounded-l-2xl">
                                <Image className="ml-auto mr-auto mt-auto mb-auto" width={300} height={500} src={information.imageUrl}></Image> 
                                <div className="text-center mt-4"> 
                                    <button className="text-white bg-orange-500 w-2/3 h-10 border-2 mt-auto hover:bg-orange-700" onClick={() => setInformationClicked(false)}>Close</button>
                                </div>
                            </div>
                            <div className="border-4 border-orange-500 rounded-r-2xl w-1/3 h-4/6 bg-slate-900 text-center text-white">
                                <div className="ml-auto mr-auto ">
                                    <div className="mt-5 h-12 text-xl bg-slate-800">
                                        Health
                                    </div>
                                    <div className="h-12 bg-slate-900">
                                        {information.health}
                                    </div>
                                    <div className="h-12  text-xl bg-slate-800">
                                        Damage
                                    </div>
                                    <div className="h-12  bg-slate-900">
                                        {information.damage}
                                    </div>
                                    {description != null && (
                                        <div>
                                            <div>
                                                <div className="text-xl bg-slate-800">
                                                    Description
                                                </div>
                                                <div className="h-fit  bg-slate-900 pl-5 pr-5">
                                                    {description}
                                                </div>
                                            </div>
                                            
                                        </div> 
                                    )}
                                    {description == null && (
                                        <div>
                                            <div className="h-12  text-xl bg-slate-800">
                                                Description
                                            </div>
                                            <div className="h-fit bg-slate-900">
                                                {information.desc}
                                            </div>
                                        </div>
                                        
                                    )}
                                </div>
                            </div>
                                
                            
                        </div>
                    )}
                </div>
                
            </div>
            
        </div>
    )
}