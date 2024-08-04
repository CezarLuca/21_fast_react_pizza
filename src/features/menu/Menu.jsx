// import { getMenu } from "../../services/apiRestaurant";
// import MenuLoader from "./MenuLoader";
import MenuItem from "./MenuItem";

import { useLoaderData } from "react-router-dom";

function Menu() {
    const menu = useLoaderData();
    // console.log(menu);

    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    );
}

// export async function loader() {
//     const menu = await getMenu();
//     return menu;
// }

export default Menu;
