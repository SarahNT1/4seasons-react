export default function CardCollection({cards}){

    return(
        <div className="flex flex-row flex-wrap w-full">
            {cards.map((card, index) => {return(
                <div className="w-1/3 h-56" key={card.id}>
                    <div>
                        Name: {card.name}
                    </div>
                    <div>
                        Category: {card.category}
                    </div>
                </div>
            )})}
        </div>
    )
}