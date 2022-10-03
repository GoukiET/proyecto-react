
import './menuCards.css'

const MenuCard = ({ menu }) => {
    const { name, price, imageUrl } = menu;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>Valor: ${price}</span>
            </div>
        </div>
    );
};

export default MenuCard;