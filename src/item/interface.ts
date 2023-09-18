export interface MenuProps {
    name: string,
    food: FoodProps[],
    address: AddressProps
}

export interface FoodProps {
    name: string,
    price: number,
    category: string
}

export interface AddressProps {
    city: string,
    detail: string,
    code: number
}

// type으로 사용할 떄 좋은 기능
// 물음표는 있어도 되고 없어도 되고. 주의사항: 꼭 필요한 내용인데 잘못써서 없어도 되는 상황을 만들지 말기
export type NewAddress = {
    name: string,
    price: number,
    category?: string
}

// 만약에 NewAddress에서 category를 빼고 싶으면 Omit을 사용할 수 있다.
export type NewAddress2 = Omit<NewAddress, "category">

// 만약에 NewAddress에서 category만 가져오고 싶으면 Pick을 사용할 수 있다.
export type NewAddress3 = Pick<NewAddress, "category">

export type ApiRes<T> = {
    data: T[],
    page: number
}

// 동적인 내용을 넣고 싶을 때
export type MenuRes = ApiRes<MenuProps>
export type AddressRes = ApiRes<AddressProps>