import Link from "next/link";

export default function Header(){
    return(
      <main className="h-40 w-4/5 mx-auto">
        <div className="border-2 border-white flex h-3/4 justify-center items-center">
          <Link href="/">
            <h1 className="text-4xl">
                4Seasons
            </h1>
          </Link>
        </div>
        <div className="border-2 border-white h-1/4 flex justify-center">
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
  