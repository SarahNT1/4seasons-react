import SpringCollection from "./card-collection";
import CardCollection from "./card-collection";

export default function CardList({season}){
    const spring = [
    { 
        "id": 1,
        "name": 'Spring Archer',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 2,
        "name": 'Spring Barbarian', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 3,
        "name": 'Spring Sorcerer', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 4,
        "name": 'acid-arrow', 
        "category": 'spells',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 5,
        "name": 'arcane-sword', 
        "category": 'spells',
        "damage": 2,
        "health": 3,
        "imageUrl": '/OIP.jpg'
    },
    {
        "id": 6,
        "name": 'counterspell', 
        "category": 'spells',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 7,
        "name": 'eldritch-blast', 
        "category": 'spells',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 8,
        "name": 'Spring Fountain', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        
        "id": 9,
        "name": 'Spring Flower', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
    {
        "id": 10,
        "name": 'Spring Tree', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SummerCard1.png'
    },
]

const winter = [
    { 
        "id": 1,
        "name": '1 winter',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
    },
    {
        "id": 2,
        "name": '2 winter', 
        "category": 'Character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 3,
        "name": '3 winter', 
        "category": 'Character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 4,
        "name": '4 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": '5 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 6,
        "name": '6 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 7,
        "name": '7 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 8,
        "name": '8 winter', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
    {
        
        "id": 9,
        "name": '9 winter', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
    {
        "id": 10,
        "name": '10 winter', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
]

const fall = [
    { 
        "id": 1,
        "name": '1 fall',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
    },
    {
        "id": 2,
        "name": '2 fall', 
        "category": 'Character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 3,
        "name": '3 fall', 
        "category": 'Character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 4,
        "name": '4 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": '5 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 6,
        "name": '6 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 7,
        "name": '7 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 8,
        "name": '8 fall', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
    {
        
        "id": 9,
        "name": '9 fall', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
    {
        "id": 10,
        "name": '10 fall', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
]

const summer = [
    { 
        "id": 1,
        "name": '1 summer',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
    },
    {
        "id": 2,
        "name": '2 summer', 
        "category": 'Character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 3,
        "name": '3 summer', 
        "category": 'Character',
        "damage": 2,
        "health": 3
    },
    {
        "id": 4,
        "name": '4 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 5,
        "name": '5 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 6,
        "name": '6 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 7,
        "name": '7 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3
    },
    {
        "id": 8,
        "name": '8 summer', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
    {
        
        "id": 9,
        "name": '9 summer', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
    {
        "id": 10,
        "name": '10 summer', 
        "category": 'Building',
        "damage": 2,
        "health": 3
    },
]

    return(
        <div>
            <div>
                {season == 'Spring' && (
                    <CardCollection cards={spring}/>
                )}
                {season == 'Fall' && (
                    <div>
                        <CardCollection cards={fall}/>
                    </div>
                )}
                {season == 'Winter' &&(
                    <div>
                        <CardCollection cards={winter}/>
                    </div>
                )}
                {season == 'Summer' &&(
                    <div>
                        <CardCollection cards={summer}/>
                    </div>
                )}
            </div>
        </div>
    )
}