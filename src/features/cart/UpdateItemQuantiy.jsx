import PropTypes from "prop-types";
import CustomButton from "../../ui/CustomButton";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantiy({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch();

    function handleDecrement() {
        dispatch(decreaseItemQuantity(pizzaId));
    }

    function handleIncrement() {
        dispatch(increaseItemQuantity(pizzaId));
    }

    return (
        <div className="flex items-center gap-1 md:gap-3">
            <CustomButton type="round" onClick={handleDecrement}>
                -
            </CustomButton>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <CustomButton type="round" onClick={handleIncrement}>
                +
            </CustomButton>
        </div>
    );
}

UpdateItemQuantiy.propTypes = {
    pizzaId: PropTypes.number.isRequired,
    currentQuantity: PropTypes.number.isRequired,
};

export default UpdateItemQuantiy;
