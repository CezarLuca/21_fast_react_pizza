import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

export default async function createOrderAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    // console.log("formData", data);

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "on",
    };
    // console.log("order", order);

    const errors = {};
    if (!isValidPhone(order.phone)) {
        errors.phone =
            "The phone number seems invalid. Please check it again. We might need it to contact you.";
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    const newOrder = await createOrder(order);

    // return null;
    return redirect(`/order/${newOrder.id}`);
}
