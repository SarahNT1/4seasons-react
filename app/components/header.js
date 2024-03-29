import Link from "next/link";

export default function Header(){
  const styles = {
    background1: {
      backgroundColor: "#2BA84A",
    },
    background2: {
      backgroundColor: "#248232",
    }
  }
  return(
    <main className="h-40 w-3/4 mx-auto pt-10 pb-10">
      <div className="flex h-3/4 justify-center items-center pt-10 pb-20 rounded-se-2xl rounded-ss-2xl" style={styles.background1}>
        <Link href="/">
          <h1 className="text-4xl">
              4Seasons
          </h1>
        </Link>
      </div>
      <div className="h-1/4 flex justify-center pb-5 pt-5" style={styles.background2}>
        <div className="mr-20 flex justify-center items-center">
          <Link href='/pages/play'>Play</Link>
        </div>
        <div className="ml-20 mr-20 flex justify-center items-center">
          <Link href='/pages/deck'>Deck</Link>
        </div>
        <div className="ml-20 flex justify-center items-center">
          <Link href='/pages/collections'>Collections</Link>
        </div>
      </div>
    </main>
    )
  }
  