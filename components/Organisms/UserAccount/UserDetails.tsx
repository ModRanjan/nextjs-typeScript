import { useState } from 'react';
import { Label } from '@/Atoms/Label';
import AccountDetails from '@/Molecules/Modals/AccountDetails';
import { IWalletData } from '../../../redux/reducer/data.type';

type UserDetailsProps = {
    walletData: IWalletData;
    currencySymbol: string;
    etherscan: string;
};

export const UserDetails: React.FC<UserDetailsProps> = ({
    walletData,
    currencySymbol,
    etherscan,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="hidden text-sm font-semibold cursor-pointer md:block">
            <div
                className="flex rounded-lg bg-neutral-200 py-0.5 "
                onClick={() => setIsModalOpen(true)}>
                <Label className="px-2 py-1">
                    <span>{walletData.accountBalance.slice(0, 5)}</span>
                    <span> {currencySymbol}</span>
                </Label>
                <Label
                    onHoverTitle={walletData.currentAccount}
                    className="px-2 py-1 rounded-r-lg bg-neutral-100 ">
                    {walletData.currentAccount.slice(0, 5) +
                        '...' +
                        walletData.currentAccount.slice(38, 42)}
                </Label>
            </div>

            {isModalOpen && (
                <AccountDetails
                    isModalOpen={isModalOpen}
                    handleCloseModal={handleCloseModal}
                    currentAccount={walletData.currentAccount}
                    etherscan={etherscan}
                />
            )}
        </div>
    );
};
