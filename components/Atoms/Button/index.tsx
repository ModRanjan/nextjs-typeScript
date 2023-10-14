import Link from 'next/link';
import { Spinner } from '../Spinner';

type BtnProps = {
    children: string | React.ReactNode;
    customClassName?: string | undefined;
    bgColor?: string;
    disabled?: boolean;
    link?: string;
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<BtnProps> = ({
    children,
    customClassName = '',
    bgColor,
    disabled,
    link,
    loading,
    onClick,
    type,
}) => {
    const className = [
        bgColor ? `bg-${bgColor}` : 'bg-transparent',
        'border-2 border-primary-400',
        disabled || loading ? 'disabled cursor-not-allowed' : 'cursor-pointer',
        'flex items-center justify-center gap-2',
        'focus:outline-none focus:ring-0',
        'hover:bg-opacity-5',
        'hover:text-neutral-900 hover:shadow-md hover:border-primary-500',
        'mx-auto',
        'outline-none',
        'p-1.5 md:px-6',
        'rounded',
        'text-neutral-600',
        'text-inherit text-medium leading-tight',
        'transition duration-150 ease-in-out',
        'w-full',
        `${customClassName}`,
    ].join(' ');

    if (link) {
        return (
            <Link href={link}>
                <button
                    className={customClassName || className}
                    disabled={disabled}
                    onClick={onClick}>
                    {children}
                </button>
            </Link>
        );
    }
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}>
            {children}

            {loading && <Spinner />}
        </button>
    );
};

export default Button;
