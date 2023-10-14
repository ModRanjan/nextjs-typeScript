import { useState, useRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import Menu from '@/Atoms/Menu/';
import Logo from '@/Molecules/Logo';
import { Navigation } from '@/Molecules/Navigation';

const Index = () => {
    // const dropdownRef: any = useRef();

    const [openMenu, setOpenMenu] = useState(false);
    // const [openChaiList, setOpenChaiList] = useState(false);

    // const handleOnClickOutside = (e: any) => {
    //     let isOutsideClickable = true;
    //     const path = e.composedPath();

    //     for (let i = 0; i < 3; i++) {
    //         if (path == dropdownRef.current) {
    //             isOutsideClickable = false;
    //             break;
    //         }
    //     }
    //     if (isOutsideClickable) {
    //         setOpenChaiList(false);
    //     }
    // };

    return (
        <>
            <div className="sticky top-0 py-2 shadow-md bg-primary-100">
                <div className="container flex items-center justify-between px-2 mx-auto">
                    <Logo
                        url="/"
                        className="h-8 ml-1 cursor-pointer md:ml-2 md:h-11"
                    />

                    <div className="hidden mx-auto overflow-hidden text-center align-middle bg-white rounded-lg h-11 lg:absolute inset-x-1/3 md:flex w-fit lg:mx-auto">
                        <Navigation />
                    </div>

                    {/* <div className="flex gap-x-2">
                        
                        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    </div> */}
                </div>
            </div>
            {openMenu && (
                <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
                    <div
                        className="fixed z-20 w-full bg-white md:hidden"
                        onClick={() => setOpenMenu(false)}>
                        <Navigation />
                    </div>
                </OutsideClickHandler>
            )}
        </>
    );
};

export default Index;
