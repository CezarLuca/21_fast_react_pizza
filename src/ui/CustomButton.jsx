import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CustomButton({ children, disabled, to, type }) {
    const baseStyles =
        "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-sm text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200";

    const styles = {
        primary: `${baseStyles} px-4 py-3 md:px-6 md:py-4`,
        small: `${baseStyles} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
        secondary:
            "inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold uppercase tracking-wide text-sm text-stone-500 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-600 focus:bg-stone-300 focus:text-stone-600 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 md:px-6 md:py-3.5",
    };

    // const className =
    //     "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 sm:px-6 sm:py-4";

    if (to) {
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    }

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.oneOf(["primary", "small"]).isRequired,
};

export default CustomButton;
