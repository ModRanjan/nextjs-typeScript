import { ImSpinner8 } from 'react-icons/im';

export const Spinner = () => {
    return (
        <div
            className="w-4 h-4 ml-4 rounded-full spinner-border animate-spin border-1"
            role="status">
            <span className="visually-hidden">
                <ImSpinner8 />
            </span>
        </div>
    );
};
