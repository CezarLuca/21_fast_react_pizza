import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

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

    const newOrder = await createOrder(order);

    // return null;
    return redirect(`/order/${newOrder.id}`);
}
