import PlayUI from "@/app/components/play-ui";

export default function Page(){
    const styles = {
        background1: {
            backgroundColor: "#2D3A3A",
        }
    }
    return(
        <div className="min-h-screen" style={styles.background1}>
            <PlayUI />
        </div>
    )
}