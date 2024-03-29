export default function HomeContent(){
    const styles = {
        background1: {
          backgroundColor: "#2BA84A",
        },
        background2: {
          backgroundColor: "#248232",
        }
      }

    return(
        <div className="w-3/4 ml-auto mr-auto">
            <div>
                <div className="mt-28">
                    <div className="text-xl text-center pt-2 pb-2 flex flex-row w-full" style={styles.background1}>
                        <div className="w-1/5">
                            Summer
                        </div>
                        <div className="w-1/5">
                            Spring
                        </div>
                        <div className="w-1/5">
                            Overview
                        </div>
                        <div className="w-1/5">
                            Fall
                        </div>
                        <div className="w-1/5">
                            Winter
                        </div>
                    </div>
                    <div className=" text-lg pl-10 h-80" style={styles.background1}>
                        This is the Overview.
                    </div>
                </div>
                <div className="border-2 border-green-500 mt-20">
                    <div className="text-4xl text-center pt-10 pb-10" style={styles.background1}>
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