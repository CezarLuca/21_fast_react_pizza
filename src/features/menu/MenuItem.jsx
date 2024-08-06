import PropTypes from "prop-types";
import CustomButton from "../../ui/CustomButton";

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

function handleAddToCart() {
    console.log("Add to cart clicked");
}
function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-32 ${soldOut ? "opacity-70 grayscale" : ""}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {!soldOut && (
                        <CustomButton
                            type="small"
                            to={"/cart"}
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </CustomButton>
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
