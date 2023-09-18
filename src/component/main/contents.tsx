import { FoodProps, MenuProps } from "../../item/interface";

interface ContentsProps {
    house: MenuProps
    // 함수
    changeFood(food: FoodProps): void
}

const Contents: React.FC<ContentsProps> = ({ house, changeFood }) => {
    return (
        <div>
            Hello
        </div>
    );
}

export default Contents;