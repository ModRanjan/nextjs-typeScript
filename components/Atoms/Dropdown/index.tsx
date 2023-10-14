import { Image } from '../Image';
import { Icon } from '../Icon';
import { FiChevronDown } from 'react-icons/fi';

type DropdownProps = {
    children: React.ReactNode;
    dropdownRef?: string; // any
    dropdownOnClick: () => void;
    imgSrc: string;
    name: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
    children,
    dropdownRef,
    dropdownOnClick,
    imgSrc,
    name,
}) => {
    const className = [
        'border-2 border-primary-400 bg-white',
        'cursor-pointer',
        'flex items-center justify-center gap-1.5',
        'font-sans font-medium',
        'focus:outline-none focus:ring-0',
        'hover:text-neutral-900 hover:shadow-md hover:border-primary-500',
        'p-1.5 md:px-3',
        'outline-none',
        'relative',
        'rounded-lg',
        'transition duration-150 ease-in-out',
        'select-none',
        'w-fit',
        'whitespace-nowrap',
    ].join(' ');

    return (
        <div ref={dropdownRef} className={className} onClick={dropdownOnClick}>
            <Image src={imgSrc} alt={'$'} className={'w-5 h-5'} />
            <span>{name}</span>
            <Icon
                icon={FiChevronDown}
                className="block w-4 h-4 text-primary-700"
            />

            {children}
        </div>
    );
};
