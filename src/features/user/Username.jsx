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

    return (
        <div className="hidden text-sm font-semibold md:block">
            <button
                onClick={() => {
                    dispatch(showLogOut());
                    console.log("logOutVisible", logOutVisible);
                }}
            >
                Hello {username}!{" "}
            </button>
            {logOutVisible && <button onClick={handleLogOut}>Log out</button>}
        </div>
    );
}

export default Username;
