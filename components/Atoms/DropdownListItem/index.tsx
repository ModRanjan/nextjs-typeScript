import { Image } from '../Image';
import { IChainData } from '../../../redux/reducer/data.type';

type DropdownListItemProps = {
    imgSrc: string;
    name: string;
    onClickDropdownItem: (data: IChainData | any) => void;
};
export const DropdownListItem: React.FC<DropdownListItemProps> = ({
    onClickDropdownItem,
    imgSrc,
    name,
}) => {
    const className = [
        'flex items-center gap-2',
        'px-4',
        'h-11 w-full',
        'rounded-sm',
        'border-t border-primary-200',
        'text-inherit text-neutral-900',
        'bg-transparent hover:bg-primary-200',
        'cursor-pointer',
        'transition-all duration-150 ease-in',
    ].join(' ');

    return (
        <div onClick={onClickDropdownItem} className={className}>
            <Image src={imgSrc} alt={'$'} className={'w-5 h-5'} />

            <span className="font-medium ">{name}</span>
        </div>
    );
};
