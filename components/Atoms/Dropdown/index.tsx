import { Image } from '../Image';
import { Icon } from '../Icon';
import { FiChevronDown } from 'react-icons/fi';

type DropdownProps = {
    disabled?: boolean;
    dropdownRef?: string; // any
    dropdownOnClick: () => void;
    imgSrc: string;
    name: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
    disabled,
    dropdownRef,
    dropdownOnClick,
    imgSrc,
    name,
}) => {
    const className = [
        'border-2 border-primary-400 bg-neutral-50',
        'cursor-pointer',
        'flex items-center gap-2',
        'font-sans font-medium',
        'md:px-3',
        'px-2 py-1',
        'relative',
        'rounded-lg',
        disabled ? 'disabled ' : '',
    ].join(' ');

    return (
        <button
            ref={dropdownRef}
            className={className}
            disabled={disabled}
            onClick={dropdownOnClick}>
            <Image src={imgSrc} alt={'$'} className={'w-4 h-4'} />
            <span className="hidden sm:block">{name}</span>
            <Icon icon={FiChevronDown} className="w-4 h-4" />
        </button>
    );
};
