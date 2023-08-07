import { Item } from '../components/Item'

export const ItemList = ({ products }) => 
    products.map(car =><Item car={car} key={car.id}/>)
