import CardCollection from "./card-collection";

export default function CardList(){
    const cards = [
    { 
        "id": 1,
        "name": 'first card',
        "category": 'character',
        "damage": 1,
        "health": 5, 
    },
    {
        "id": 2,
        "name": 'second card', 
        "category": 'character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 3,
        "name": 'third card', 
        "category": 'character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 4,
        "name": 'fourth card', 
        "category": 'character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": 'fifth card', 
        "category": 'character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": 'sixth card', 
        "category": 'equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": 'sixth card', 
        "category": 'equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": 'sixth card', 
        "category": 'equipment',
        "damage": 2,
        "health": 3
    },
    {
        
        "id": 5,
        "name": 'sixth card', 
        "category": 'equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": 'sixth card', 
        "category": 'equipment',
        "damage": 2,
        "health": 3
    },
]

    return(
        <div>
            <CardCollection cards={cards}/>
        </div>
    )
}