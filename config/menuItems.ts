import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { ImDatabase } from 'react-icons/im';

export type IMenuItemData = {
    name: string;
    icon: any;
    url: string;
}[];

const menuItemData: IMenuItemData = [
    {
        name: 'Home',
        icon: AiFillHome,
        url: '/',
    },
    {
        name: 'Blackjack',
        icon: ImDatabase,
        url: '/blackjack',
    },

    {
        name: 'etherjs',
        icon: AiFillInfoCircle,
        url: '/With_Etherjs',
    },
];

export default menuItemData;
