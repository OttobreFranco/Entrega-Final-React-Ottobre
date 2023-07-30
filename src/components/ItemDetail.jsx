
export const ItemDetail = ({ car }) => {
  return (
    <>
    <div>{car.title}</div>
    <div>{car.categoryId}</div>
    <div>{car.price}</div>
    <img src={car.imageUrl} alt={car.title}/>
    <button> Agregar al carrito </button>
    </>
    
  );
};
