import PropTypes from "prop-types";
import CustomButton from "../../ui/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentCartQuantity } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "../cart/DeleteItem";

// function formatCurrency(amount) {
//     return new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//     }).format(amount);
// }
function MenuItem({ pizza }) {
    const dispatch = useDispatch();
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const currentQuantity = useSelector(getCurrentCartQuantity(pizza.id));
    // console.log(currentQuantity);
    const isInCart = currentQuantity > 0;

    function handleAddToCart() {
        // console.log(`Add to cart clicked ${id}`);

        const newPizzaItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        };
        dispatch(addItem(newPizzaItem));
    }

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
                    {isInCart && <DeleteItem pizzaId={id} />}
                    {!soldOut && !isInCart && (
                        <CustomButton type="small" onClick={handleAddToCart}>
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
