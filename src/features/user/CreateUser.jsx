import { useState } from "react";
import CustomButton from "../../ui/CustomButton";

function CreateUser() {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input mb-8 w-72"
            />

            {username !== "" && (
                <div>
                    <CustomButton>Start ordering</CustomButton>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
