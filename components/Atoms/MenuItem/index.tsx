import React from 'react';
import { Icon } from '../Icon';
import Link from 'next/link';

type MenuProps = {
    active?: boolean;
    comingSoon?: boolean;
    icon: any;
    name: string;
    url: string;
};

export const MenuItem: React.FC<MenuProps> = ({
    active,
    comingSoon,
    icon,
    name,
    url,
}) => {
    return (
        <Link href={url}>
            <li
                className={`flex  items-center justify-center cursor-pointer gap-3 text-lg p-2 my-3 transition-all duration-150 ease-in hover:bg-neutral-200 ${
                    comingSoon && 'text-neutral-400'
                }`}>
                <Icon icon={icon} />
                <span className={`${active && 'text-primary-800'} `}>
                    {name}
                </span>
            </li>
        </Link>
    );
};
