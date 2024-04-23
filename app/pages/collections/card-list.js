import SpringCollection from "./card-collection";
import CardCollection from "./card-collection";

export default function CardList({season}){
    const spring = [
    { 
        "id": 1,
        "cardName": 'Spring Archer',
        "name": 'spring-archer',
        "category": 'character',
        "damage": 5,
        "health": 7, 
        "imageUrl": '/SpringArcher.png',
        "desc": 'The archer takes enemies out from afar but has lower health than the knight.'
    },
    {
        "id": 2,
        "cardName": 'Spring Knight',
        "name": 'spring-knight', 
        "category": 'character',
        "damage": 5,
        "health": 10,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 3,
        "cardName": 'Spring Sorcerer',
        "name": 'spring-sorcerer', 
        "category": 'character',
        "damage": 8,
        "health": 5,
        "imageUrl": '/SpringSorcerer.png',
        "desc": 'The sorcerer uses strong spells to deal damage but are often lacking in health.'
    },
    {
        "id": 4,
        "cardName": 'Acid Arrow',
        "name": 'acid-arrow', 
        "category": 'spells',
        "damage": 10,
        "health": 1,
        "imageUrl": '/AcidArrow.png',
        "desc": 'The acid arrow is a one use item that deals residual damage.'
    },
    {
        "id": 5,
        "cardName": 'Arcane Sword',
        "name": 'arcane-sword', 
        "category": 'spells',
        "damage": 8,
        "health": 3,
        "imageUrl": '/ArcaneSword.png',
        "desc": 'The arcane sword is an equipment that changes the damage dealt by the knight to 8 rather than 5, however, it only has a durability of 2.'
    },
    {
        "id": 6,
        "cardName": 'Counterspell',
        "name": 'counterspell', 
        "category": 'spells',
        "damage": 0,
        "health": 1,
        "imageUrl": '/Counterspell.png',
        "desc": 'Counterspell makes the damage done from an opponents spell card obsolete.'
    },
    {
        "id": 7,
        "cardName": 'Eldritch Blast',
        "name": 'eldritch-blast', 
        "category": 'spells',
        "damage": 15,
        "health": 3,
        "imageUrl": '/EldritchBlast.png',
        "desc": 'Eldritch Blast is a spell that is thrown to an opponent that does significant damage but also costs significant mana.'
    },
    {
        "id": 8,
        "cardName": 'Spring Fountain',
        "name": 'spring-fountain', 
        "category": 'building',
        "damage": 0,
        "health": 10,
        "imageUrl": '/SpringFountain.png',
        "desc": 'The fountain collects 1 mana after every turn.'
    },
    {
        
        "id": 9,
        "cardName": 'Spring Flower',
        "name": 'spring-flower', 
        "category": 'building',
        "damage": 0,
        "health": 10,
        "imageUrl": '/SpringFlower.png',
        "desc": 'The flower collects 1 mana after every turn.'
    },
    {
        "id": 10,
        "cardName": 'Spring Tree',
        "name": 'spring-tree', 
        "category": 'building',
        "damage": 0,
        "health": 10,
        "imageUrl": '/SpringTree.png',
        "desc": 'The tree collects 1 mana after every turn.'
    },
]

const winter = [
    { 
        "id": 1,
        "name": '1 winter',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 2,
        "name": '2 winter', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 3,
        "name": '3 winter', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 4,
        "name": '4 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 5,
        "name": '5 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 6,
        "name": '6 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 7,
        "name": '7 winter', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 8,
        "name": '8 winter', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        
        "id": 9,
        "name": '9 winter', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 10,
        "name": '10 winter', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
]

const fall = [
    { 
        "id": 1,
        "name": '1 fall',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 2,
        "name": '2 fall', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 3,
        "name": '3 fall', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 4,
        "name": '4 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 5,
        "name": '5 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 6,
        "name": '6 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 7,
        "name": '7 fall', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 8,
        "name": '8 fall', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        
        "id": 9,
        "name": '9 fall', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 10,
        "name": '10 fall', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
]

const summer = [
    { 
        "id": 1,
        "name": '1 summer',
        "category": 'Character',
        "damage": 1,
        "health": 5, 
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 2,
        "name": '2 summer', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 3,
        "name": '3 summer', 
        "category": 'Character',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 4,
        "name": '4 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 5,
        "name": '5 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 6,
        "name": '6 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 7,
        "name": '7 summer', 
        "category": 'Equipment',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 8,
        "name": '8 summer', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        
        "id": 9,
        "name": '9 summer', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
    },
    {
        "id": 10,
        "name": '10 summer', 
        "category": 'Building',
        "damage": 2,
        "health": 3,
        "imageUrl": '/SpringKnight.png',
        "desc": 'The knight is a close combat character that deals the same damage as the archer but has more health.'
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