import { FoodProps } from "../../item/interface";

// extends : 확장시키다 type: type BestProps FoodProps & {}
interface BestProps extends FoodProps {

}

// FoodProps에서 가격만 빼고 싶을 때 Omit을 사용
interface Best2Props extends Omit<FoodProps, "price"> {
    
}

const Best: React.FC<BestProps> = ({ name, price, category }) => {
    return (
        <div>
            hellosadasd
        </div>
    );
}

export default Best;