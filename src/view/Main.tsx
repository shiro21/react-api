import { useState } from "react";
import Contents from "../component/main/contents";
import BestFood from "../component/main/bestFood";
import { FoodProps, MenuProps, MenuRes } from "../item/interface";

const Main = () => {

    const data = {
        name: "슈퍼마켓",
        food: [
            {
                name: "토마토 파스타",
                price: 25000,
                category: "PASTA"
            },
            {
                name: "로제 파스타",
                price: 21000,
                category: "PASTA"
            },
            {
                name: "스테이크",
                price: 33000,
                category: "MEAT"
            }
        ],
        address: {
            city: "Uijeongbu",
            detail: "Hoeryong Road",
            code: 2347543,
        }
    }
    const [api, setApi] = useState<MenuRes>()
    const [house, setHouse] = useState<MenuProps>(data);

    const changeFood = (food: FoodProps) => {

    }
    return (
        <div>
            <Contents house={house} changeFood={changeFood} />

            <BestFood name={data.food[0].name} price={data.food[0].price} category={data.food[0].category} />
        </div>
    );
}

export default Main;