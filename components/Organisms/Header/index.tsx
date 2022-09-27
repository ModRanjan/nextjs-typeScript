import { useState, useEffect, useRef, memo, useCallback } from 'react';
import Logo from '@/Molecules/Logo';
import { Dropdown } from '@/Atoms/Dropdown/';
import Menu from '@/Atoms/Menu/';
import { MenuBar } from '@/Molecules/MenuBar';
import { useSelector, useDispatch } from 'react-redux';
import { setChainData } from '../../../redux/action';
import { chainList } from '../../../config/chainList';
import { getCurrentChainId } from '@/utils/network/getCurrentChainId';
import { changeNetwork } from '@/utils/network/changeNetwork';
import OutsideClickHandler from 'react-outside-click-handler';
import { NetworksDropdown } from '@/Molecules/NetworkDropdown';
import { UserAccount } from '@/Organisms/UserAccount/';
import { toast } from 'react-toastify';
import Alert from '@/Atoms/Alerts/Alert';

const LogoMemo = memo(Logo);
const DropdownMemo = memo(Dropdown);
const MenuMemo = memo(Menu);
const UserAccountMemo = memo(UserAccount);

const Index: React.FC = () => {
    const dropdownRef: any = useRef();
    const dispatch = useDispatch();
    const [openMenu, setOpenMenu] = useState(false);
    const [openChaiList, setOpenChaiList] = useState(false);
    const chainData = useSelector((state: any) => state.ChainDataReducer);

    useEffect(() => {
        fetchCurrentChainData();
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.on('chainChanged', function () {
                fetchCurrentChainData();
            });
        }
    }, []);

    const handleChainList = useCallback(() => {
        setOpenChaiList(!openChaiList);
    }, [openChaiList]);

    const handleOnClickDropdownItem = (data: any) => {
        if (typeof (window as any).ethereum !== 'undefined') {
            changeNetwork(data);
        } else {
            changeNetworkLocally(data);
        }
        handleChainList();
    };

    const handleOnClickOutside = (e: any) => {
        let isOutsideClickable = true;
        for (let i = 0; i < 3; i++) {
            if (e.path[i] == dropdownRef.current) {
                isOutsideClickable = false;
                break;
            }
        }
        if (isOutsideClickable) {
            setOpenChaiList(false);
        }
    };

    const fetchCurrentChainData = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const chainId = await getCurrentChainId();
            if (chainId) {
                const currentChain = chainList.filter(function (val) {
                    return val.chainId == chainId;
                });
                if (currentChain.length != 0) {
                    dispatch(setChainData(currentChain[0]));
                } else {
                    toast.error(
                        'Connected to unsupported Network, Change your network in metamask'
                    );
                    await changeNetwork(chainList[0]);
                }
            }
        } else {
            dispatch(setChainData(chainList[0]));
        }
    };

    const changeNetworkLocally = (data: any) => {
        dispatch(setChainData(data));
    };

    if (
        typeof window === 'undefined' ||
        typeof (window as any).ethereum === 'undefined'
    ) {
        return (
            <Alert preview={true}>
                <div>
                    MetaMask Extension Not Found !
                    <a
                        href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                        target="_blank"
                        className="ml-1 font-bold "
                        rel="noreferrer">
                        Click here to Install MetaMask
                    </a>
                </div>
            </Alert>
        );
    }

    return (
        <>
            <div className="sticky top-0 bg-white">
                {/* {typeof window.ethereum === 'undefined' ? (
                    <Alert preview={true}>
                        <div>
                            MetaMask Extension Not Found !
                            <a
                                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                                target="_blank"
                                className="ml-1 font-bold "
                                rel="noreferrer">
                                Click here to Install MetaMask
                            </a>
                        </div>
                    </Alert>
                ) : null} */}

                <div className="container flex items-center justify-between px-2 py-1 mx-auto">
                    <div className="ml-2">
                        <LogoMemo
                            url="/"
                            className="h-8 cursor-pointer md:h-11"
                        />
                    </div>
                    <div className="flex space-x-2 md:space-x-5">
                        <DropdownMemo
                            imgSrc={chainData.logoUrl}
                            name={chainData.name}
                            dropdownRef={dropdownRef}
                            dropdownOnClick={handleChainList}
                        />
                        <UserAccountMemo />
                        <MenuMemo
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                        />
                    </div>
                </div>
            </div>
            {openMenu && (
                <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
                    <div
                        className="fixed z-20 w-full duration-500 bg-white md:hidden"
                        onClick={() => setOpenMenu(false)}>
                        <MenuBar />
                    </div>
                </OutsideClickHandler>
            )}
            {openChaiList && (
                <OutsideClickHandler onOutsideClick={handleOnClickOutside}>
                    <NetworksDropdown
                        dropdownItems={chainList}
                        onClickDropdownItem={handleOnClickDropdownItem}
                    />
                </OutsideClickHandler>
            )}
        </>
    );
};

export default Index;
