import { DropdownListItem } from '@/Atoms/DropdownListItem';
import { IChainData } from '../../../redux/reducer/data.type';

type PropsType = {
    dropdownItems: IChainData[];
    onClickDropdownItem: (data: IChainData | any) => void;
};

export const NetworksDropdown: React.FC<PropsType> = ({
    dropdownItems,
    onClickDropdownItem,
}) => {
    return (
        <div className="fixed right-0 z-20 flex items-center justify-center w-full p-2 bg-white rounded-lg md:right-20 md:w-80">
            <ul className="flex flex-col w-full grow">
                <li className="pb-2 pl-6 text-neutral-500">Select a network</li>
                {dropdownItems.map((data, index) => {
                    return (
                        <li key={index}>
                            <DropdownListItem
                                imgSrc={data.logoUrl}
                                name={data.name}
                                onClickDropdownItem={() =>
                                    onClickDropdownItem(data)
                                }
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
