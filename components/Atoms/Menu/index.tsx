import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

type MenuProps = {
    openMenu: any;
    setOpenMenu: any;
};

const Index: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
    return (
        <button
            className="mr-4 text-3xl border-2 rounded border-primary-300 md:hidden"
            onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <ImCross /> : <BiMenu />}
        </button>
    );
};

export default Index;
