import CardList from "./card-list";
import CollectionsUI from "@/app/components/collections-ui";

export default function Page(){
    const styles = {
        background1: {
            backgroundColor: "#2D3A3A",
        }
    }
    return(
        <div className="min-h-screen bg-slate-950">
            <div className="">
                <CollectionsUI />
            </div>
        </div>
    )
}

