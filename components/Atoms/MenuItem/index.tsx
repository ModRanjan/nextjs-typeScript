import React from 'react';
import Link from 'next/link';

type MenuProps = {
    active?: boolean;
    comingSoon?: boolean;
    name: string;
    url: string;
};

export const MenuItem: React.FC<MenuProps> = ({
    active,
    comingSoon,
    name,
    url,
}) => {
    return (
        <Link href={url}>
            <li
                className={`flex  items-center justify-center cursor-pointer gap-3 text-lg p-2 transition-all duration-150 ease-in hover:bg-neutral-200 ${
                    comingSoon && 'text-neutral-400'
                }`}>
                <span className={`${active && 'text-primary-800'} `}>
                    {name}
                </span>
            </li>
        </Link>
    );
};
