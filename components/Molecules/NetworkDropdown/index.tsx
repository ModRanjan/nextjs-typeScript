import { DropdownListItem } from '@/Atoms/DropdownListItem';

type PropsType = {
    dropdownItems: any[];
    onClickDropdownItem: (data: any) => void;
};

export const NetworksDropdown: React.FC<PropsType> = ({
    dropdownItems,
    onClickDropdownItem,
}) => {
    return (
        <div className="w-full rounded-lg bg-primary-50 md:w-80">
            <p className="py-1.5 pl-4 text-neutral-500">Select a network</p>
            <ul className="flex flex-col flex-1 grow">
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
