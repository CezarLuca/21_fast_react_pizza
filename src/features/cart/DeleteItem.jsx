import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import CustomButton from "../../ui/CustomButton";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteItem(pizzaId));
    }

    return (
        <CustomButton type="small" onClick={handleDelete}>
            Delete
        </CustomButton>
    );
}

DeleteItem.propTypes = {
    pizzaId: PropTypes.number.isRequired,
};

export default DeleteItem;
