import { getOrder } from "../../services/apiRestaurant";

export default async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}
