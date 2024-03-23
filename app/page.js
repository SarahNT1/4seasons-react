import Header from "./components/header";
import HomeContent from "./components/home-contents";

export default function Page(){
  return(
    <div className="min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <HomeContent />
      </div>
    </div>
  )
}