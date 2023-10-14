import { useDispatch } from 'react-redux';
import Button from '@/Atoms/Button';
import { IWalletData } from '../../../redux/reducer/data.type';
import { setWalletData } from '../../../redux/action';
import { getWalletData } from '@/utils/web3';

export const ConnectWallet: React.FC = () => {
    const dispatch = useDispatch();

    const connectWallet = async () => {
        let data: IWalletData | undefined;
        await getWalletData()
            .then((res) => {
                data = res;
                if (data) {
                    const walletData = {
                        currentAccount: data.currentAccount,
                        accountBalance: data.accountBalance,
                        isConnected: data.isConnected && true,
                    };
                    window.sessionStorage.setItem(
                        'walletData',
                        JSON.stringify(walletData)
                    );
                    dispatch(setWalletData(data));
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    };
    return <Button onClick={connectWallet}>Connect Wallet</Button>;
};
