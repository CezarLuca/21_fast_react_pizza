// import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import CustomButton from "../../ui/CustomButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

function Cart() {
    const username = useSelector((state) => state.user.username);
    const cart = fakeCart;

    return (
        <div className="px-4 py-3">
            {/* <Link
                to="/menu"
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
            >
                &larr; Back to menu
            </Link> */}
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {username}
            </h2>

            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item) => (
                    <CartItem key={item.pizzaId} item={item} />
                ))}
            </ul>

            <div className="mt-6 space-x-2">
                <CustomButton type="primary" to="/order/new">
                    Order pizzas
                </CustomButton>
                <CustomButton type="secondary">Clear cart</CustomButton>
                {/* <Link to="/order/new">Order pizzas</Link> */}
                {/* <button>Clear cart</button> */}
            </div>
        </div>
    );
}

export default Cart;
