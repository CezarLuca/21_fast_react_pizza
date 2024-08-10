import { updateOrder } from "../../services/apiRestaurant";

export async function action({ request, params }) {
    // console.log("update");
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null;
}
