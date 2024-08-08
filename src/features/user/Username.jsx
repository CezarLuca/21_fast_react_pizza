import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsername, logOut } from "./userSlice";
import { hideLogOut, showLogOut } from "./visibilitySlice";

function Username() {
    // const username = useSelector((state) => state.user.username);
    const username = useSelector(getUsername);
    const logOutVisible = useSelector(
        (state) => state.visibility.logOutVisible,
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // let logOutVisible = false;

    function handleLogOut() {
        dispatch(logOut());
        dispatch(hideLogOut());
        navigate("/");
    }

    if (!username) {
        return null;
    }

    // return (
    //     <div className="hidden text-sm font-semibold md:block">
    //         <button
    //             onClick={() => {
    //                 dispatch(showLogOut());
    //                 // console.log("logOutVisible", logOutVisible);
    //             }}
    //             className="text-stone-600"
    //         >
    //             Hello {username}!{" "}
    //         </button>
    //         {logOutVisible && (
    //             <div className="absolute mt-2 w-48 rounded-md bg-yellow-400 shadow-lg ring-1 ring-black ring-opacity-5">
    //                 <button
    //                     onClick={handleLogOut}
    //                     className="block w-full px-4 py-2 text-left text-stone-600 hover:rounded-md hover:bg-yellow-200"
    //                 >
    //                     Log out
    //                 </button>
    //                 <button
    //                     onClick={() => {
    //                         dispatch(hideLogOut());
    //                     }}
    //                     className="text-stone-600 hover:bg-yellow-200"
    //                 >
    //                     {" "}
    //                     X{" "}
    //                 </button>
    //             </div>
    //         )}
    //     </div>
    // );

    //     return (
    //         <div className="relative text-sm font-semibold md:block">
    //             <button
    //                 onClick={() => {
    //                     dispatch(showLogOut());
    //                     // console.log("logOutVisible", logOutVisible);
    //                 }}
    //                 className="text-stone-600"
    //             >
    //                 Hello {username}!{" "}
    //             </button>
    //             {logOutVisible && (
    //                 <div className="absolute mt-2 w-48 rounded-md bg-yellow-400 shadow-lg ring-1 ring-black ring-opacity-5">
    //                     <div className="flex items-center justify-between">
    //                         <button
    //                             onClick={handleLogOut}
    //                             className="block w-full px-4 py-2 text-left text-stone-600 hover:rounded-md hover:bg-yellow-200"
    //                         >
    //                             Log out
    //                         </button>
    //                         <button
    //                             onClick={() => {
    //                                 dispatch(hideLogOut());
    //                             }}
    //                             className="p-2 text-stone-600 hover:bg-yellow-200"
    //                         >
    //                             X
    //                         </button>
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     );

    return (
        <div className="relative pr-10 text-sm font-semibold md:block">
            <button
                onClick={() => {
                    dispatch(showLogOut());
                    // console.log("logOutVisible", logOutVisible);
                }}
                className="text-stone-600"
            >
                Hello {username}!{" "}
            </button>
            {logOutVisible && (
                <div className="absolute mt-2 w-36 rounded-md bg-yellow-400 shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="flex items-start px-2 py-1">
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-2 text-left text-stone-600 hover:rounded-md hover:bg-yellow-200"
                            style={{ flex: "1 1 auto" }}
                        >
                            Log out
                        </button>
                        <button
                            onClick={() => {
                                dispatch(hideLogOut());
                            }}
                            className="ml-2 p-2 text-stone-600 hover:rounded-md hover:bg-yellow-200"
                            style={{ flex: "0 0 auto" }}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Username;
