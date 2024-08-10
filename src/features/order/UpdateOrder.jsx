import PropTypes from "prop-types";
import CustomButton from "../../ui/CustomButton";
import { useFetcher } from "react-router-dom";

function UpdateOrder({ order }) {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="PATCH" className="text-right">
            <CustomButton type="primary">Make It Priority</CustomButton>
        </fetcher.Form>
    );
}

UpdateOrder.propTypes = {
    order: PropTypes.object.isRequired,
};

export default UpdateOrder;

// export async function action({ request, params }) {
//     console.log("update");
//     return null;
// }
