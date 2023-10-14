import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItem } from '@/Atoms/MenuItem';
import menuItems from '../../../config/menuItems';

export const Navigation = () => {
    const router = useRouter();
    return (
        <nav className="container mx-auto md:inline-block">
            <ul className="flex flex-col items-center justify-center text-neutral-600 md:flex-row gap-x-10">
                {menuItems.map((data, index) => {
                    const active = router.pathname == data.url;
                    return (
                        <MenuItem
                            active={active}
                            name={data.name}
                            url={data.url}
                            key={index}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};
