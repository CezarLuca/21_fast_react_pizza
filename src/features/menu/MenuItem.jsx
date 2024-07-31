import PropTypes from "prop-types";

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}
function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li>
            <img src={imageUrl} alt={name} />
            <div>
                <p>{name}</p>
                <p>{ingredients.join(", ")}</p>
                <div>
                    {!soldOut ? (
                        <p>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p>Sold out</p>
                    )}
                </div>
            </div>
        </li>
    );
}

MenuItem.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        soldOut: PropTypes.bool.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default MenuItem;
