import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
// import CustomButton from "../../ui/CustomButton";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantiy from "./UpdateItemQuantiy";
import { useSelector } from "react-redux";
import { getCurrentCartQuantity } from "./cartSlice";

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item;
    const currentQuantity = useSelector(getCurrentCartQuantity(pizzaId));
    // console.log(currentQuantity);

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                {/* <CustomButton type="small">Remove</CustomButton> */}
                <UpdateItemQuantiy
                    pizzaId={pizzaId}
                    currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        pizzaId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItem;
