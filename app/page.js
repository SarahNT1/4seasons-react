import Header from "./components/header";
import HomeContent from "./components/home-contents";

export default function Page(){
  const styles = {
    background: {
      backgroundColor: "#2d3a3a",
    }
  }
  return(
    <div className="min-h-screen bg-slate-950">
      <div>
        <Header />
      </div>
      <div>
        <HomeContent />
      </div>
    </div>
  )
}