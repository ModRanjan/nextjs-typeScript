import { useEffect } from 'react';
import { Icon } from '@/Atoms/Icon';
import { ethers } from 'ethers';
import { UserDetails } from './UserDetails';
import { ConnectWallet } from './ConnectWallet';
import { AiOutlineLogout } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setWalletData } from '../../../redux/action';
import { IWalletData } from '../../../redux/reducer/data.type';
import { IRootState } from '../../../redux/store';

export const UserAccount = () => {
    const dispatch = useDispatch();
    const walletData = useSelector(
        (state: IRootState) => state
    ).WalletDataReducer;
    const chainData = useSelector(
        (state: IRootState) => state
    ).ChainDataReducer;

    useEffect(() => {
        let walletStatus = JSON.parse(
            (window as any).sessionStorage.getItem('walletData')
        );

        if (walletStatus && walletStatus.isConnected) {
            fetchWalletData();
        }
    }, []);

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            (window as any).ethereum.on('accountsChanged', async () => {
                await fetchWalletData();
            });
            (window as any).ethereum.on('chainChanged', async () => {
                await fetchWalletData();
            });
        }
    }, []);

    const fetchWalletData = async () => {
        const provider = new ethers.providers.Web3Provider(
            (window as any).ethereum
        );
        const signer = provider.getSigner();
        const [account] = await (window as any).ethereum.request({
            method: 'eth_requestAccounts',
        });
        let balance: string = ethers.utils.formatEther(
            await provider.getBalance(account)
        );

        const data: IWalletData = {
            currentAccount: account,
            accountBalance: balance,
            isConnected: account && true,
            provider: provider,
            signer: signer,
        };

        window.sessionStorage.setItem(
            'walletData',
            JSON.stringify({
                currentAccount: account,
                accountBalance: balance,
                isConnected: account && true,
            })
        );
        dispatch(setWalletData(data));
    };

    function handleLogout() {
        const data = {
            currentAccount: '',
            accountBalance: '',
            isConnected: false,
        };
        window.sessionStorage.setItem('walletData', JSON.stringify(data));
        dispatch(setWalletData(data));
    }

    return walletData.isConnected ? (
        <>
            <UserDetails
                walletData={walletData}
                currencySymbol={chainData.nativeCurrencySymbol}
                etherscan={chainData.etherscan}
            />
            <button
                onClick={handleLogout}
                title="Logout"
                className="cursor-pointer">
                <Icon
                    icon={AiOutlineLogout}
                    className="w-full h-full pr-2 text-3xl"
                />
            </button>
        </>
    ) : (
        <ConnectWallet />
    );
};
