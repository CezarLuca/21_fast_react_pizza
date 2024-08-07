import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsername, logOut } from "./userSlice";

function Username() {
    // const username = useSelector((state) => state.user.username);
    const username = useSelector(getUsername);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let logOutVisible = false;

    function handleLogOut() {
        dispatch(logOut());
        navigate("/");
    }

    if (!username) {
        return null;
    }

    return (
        <div className="hidden text-sm font-semibold md:block">
            <button
                onClick={() => {
                    logOutVisible = true;
                }}
            >
                Hello {username}!{" "}
            </button>
            {logOutVisible && <button onClick={handleLogOut}>Log out</button>}
        </div>
    );
}

export default Username;
