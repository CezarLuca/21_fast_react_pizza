// import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import CustomButton from "../../ui/CustomButton";
import { useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
// import store from "../../store";

// // https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//     /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//         str
//     );

// const fakeCart = [
//     {
//         pizzaId: 12,
//         name: "Mediterranean",
//         quantity: 2,
//         unitPrice: 16,
//         totalPrice: 32,
//     },
//     {
//         pizzaId: 6,
//         name: "Vegetale",
//         quantity: 1,
//         unitPrice: 13,
//         totalPrice: 13,
//     },
//     {
//         pizzaId: 11,
//         name: "Spinach and Mushroom",
//         quantity: 1,
//         unitPrice: 15,
//         totalPrice: 15,
//     },
// ];

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);
    // const username = useSelector((state) => state.user.username);
    const username = useSelector(getUsername);
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const formErrors = useActionData();

    // const cart = fakeCart;
    const cart = useSelector(getCart);
    // console.log("cart", cart);
    const totalCartPrice = useSelector(getTotalCartPrice);
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
    const totalPrice = totalCartPrice + priorityPrice;

    if (!cart.length) {
        return <EmptyCart />;
    }

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Let&apos;s go!
            </h2>

            {/* <Form method="POST" action="/order/new"> */}
            <Form method="POST">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        className="input w-auto grow"
                        type="text"
                        name="customer"
                        defaultValue={username}
                        required
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    {formErrors?.phone ? (
                        <label className="sm:mb-14 sm:basis-40">
                            Phone number
                        </label>
                    ) : (
                        <label className="sm:basis-40">Phone number</label>
                    )}
                    <div className="grow">
                        <input
                            className="input"
                            type="tel"
                            name="phone"
                            required
                        />
                        {formErrors?.phone && (
                            <p className="mt-2 w-full max-w-96 rounded-md bg-red-100 p-2 text-center text-xs text-red-600">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            className="input"
                            type="text"
                            name="address"
                            required
                        />
                    </div>
                </div>

                <div className="mb-12 flex items-center gap-5">
                    <input
                        className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <CustomButton disabled={isSubmitting} type="primary">
                        {isSubmitting
                            ? "Placing order..."
                            : `Order now for ${formatCurrency(totalPrice)}`}
                    </CustomButton>
                    {/* <button
                        disabled={isSubmitting}
                        className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200"
                    >
                        {isSubmitting ? "Placing order..." : "Order now"}
                    </button> */}
                </div>
            </Form>
        </div>
    );
}

// export async function action({ request }) {
//     const formData = await request.formData();

//     console.log("formData", formData);
//     return null;
// }

export default CreateOrder;
