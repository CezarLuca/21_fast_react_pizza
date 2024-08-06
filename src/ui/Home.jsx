import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import CustomButton from "./CustomButton";

function Home() {
    const username = useSelector((state) => state.user.name);

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-center text-xl font-semibold text-stone-700 md:text-3xl">
                The best pizza.
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            {username === "" ? (
                <CreateUser />
            ) : (
                <CustomButton to="/menu" type="primary">
                    Start ordering
                </CustomButton>
            )}
        </div>
    );
}

export default Home;
