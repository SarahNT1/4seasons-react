"use client";

import { useState } from "react"

export default function HomeContent(){
    const styles = {
        background1: {
          backgroundColor: "#2BA84A",
        },
        background2: {
          backgroundColor: "#248232",
        }
      }

    const[headerName, setHeaderName] = useState('Overview');
    const[clicked, setClicked] = useState('Overview');

    return(
        <div className="w-3/4 ml-auto mr-auto">
            <div>
                <div className="mt-28">
                    <div className="text-xl text-center pt-2 pb-2 flex flex-row w-full" style={styles.background2}>
                        <div className="w-1/5" onClick={() => {setHeaderName('Summer'); setClicked('Summer')}}>
                            {clicked == 'Summer' ? (
                                <div className="bg-yellow-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Summer</div>) :
                                (<div className="bg-gray-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Summer</div>)
                            }
                        </div>
                        <div className="w-1/5" onClick={() => {setHeaderName('Spring'); setClicked('Spring')}}>
                            {clicked == 'Spring' ? (
                                <div className="bg-pink-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Spring</div>) :
                                (<div className="bg-gray-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Spring</div>)
                            }
                        </div>
                        <div className="w-1/5" onClick={() => {setHeaderName('Overview'); setClicked('Overview')}}>
                            {clicked == 'Overview' ? (
                                <div className="bg-red-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Overview</div>) :
                                (<div className="bg-gray-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Overview</div>)
                            }
                        </div>
                        <div className="w-1/5" onClick={() => {setHeaderName('Fall'); setClicked('Fall')}}>
                            {clicked == 'Fall' ? (
                                <div className="bg-orange-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Fall</div>) :
                                (<div className="bg-gray-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Fall</div>)
                            }
                        </div>
                        <div className="w-1/5" onClick={() => {setHeaderName('Winter'); setClicked('Winter')}}>
                            {clicked == 'Winter' ? (
                                <div className="bg-blue-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Winter</div>) :
                                (<div className="bg-gray-300 rounded-xl border-green-900 border-2 w-44 ml-auto mr-auto cursor-pointer">Winter</div>)
                            }
                        </div>
                    </div>
                    <div className=" text-lg pl-10 h-80" style={styles.background1}>
                        {headerName == 'Summer' && (
                            <div>
                                Summer
                            </div>
                        )}
                        {headerName == 'Spring' && (
                            <div>
                                Spring
                            </div>
                        )}
                        {headerName == 'Overview' && (
                            <div>
                                Overview
                            </div>
                        )}
                        {headerName == 'Fall' && (
                            <div>
                                Fall
                            </div>
                        )}
                        {headerName == 'Winter' && (
                            <div>
                                Winter
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-20">
                    <div className="text-xl text-center pt-2 pb-2" style={styles.background2}>
                        How To Play
                    </div>
                    <div className="text-lg pl-10 h-80" style={styles.background1}>
                        This is the documentation of how to play.
                    </div>
                </div>
            </div>
        </div>
    )
}