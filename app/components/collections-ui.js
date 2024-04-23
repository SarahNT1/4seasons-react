"use client";

import { useState } from "react";
import Header from "../components/header";
import CardList from "../pages/collections/card-list";
// import styles from "./header";

export default function CollectionsUI(){
    const styles = {
        background1: {
          backgroundColor: "#2BA84A",
        },
        background2: {
          backgroundColor: "#248232",
        }
      }

    const[season, setSeason] = useState('Spring');

    const toggleSeason=(event)=>{
        // event.preventDefault();
        if(season == 'Spring'){
            setSeason('Summer')
        }
        else if(season == 'Summer'){
            setSeason('Fall');
        }
        else if(season == 'Fall'){
            setSeason('Winter');
        }
        else{
            setSeason('Spring');
        }
    }

    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="w-3/4 ml-auto mr-auto mt-28">
                <div className="flex flex-row justify-center mt-20 p-4">
                    <div className="cursor-pointer border-2 w-1/5 h-fit p-5 bg-orange-500 rounded-2xl text-white text-center text-xl hover:bg-orange-700" value={season} onClick={()=>toggleSeason()}>
                        {season}
                    </div>
                </div>
                <div className="">
                    <CardList season={season}/>
                </div>
            </div>
            
        </div>
    )
}