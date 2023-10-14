import { Modal } from '@/Atoms/Modal';
import { FiCopy } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { Image } from '@/Atoms/Image';

type PropsType = {
    isModalOpen: boolean;
    handleCloseModal: () => void;
    currentAccount: string;
    etherscan: string;
};

const AccountDetails: React.FC<PropsType> = ({
    isModalOpen,
    handleCloseModal,
    currentAccount,
    etherscan,
}) => {
    return (
        <Modal
            open={isModalOpen}
            handleCloseModal={handleCloseModal}
            label="Account">
            <div className="space-y-2">
                <div className="p-4 border border-gray-300 rounded-lg md:space-y-4">
                    <p className="text-xl text-gray-500">
                        connected with metamask
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Image
                            className="h-16 rounded-full"
                            src={'/images/accountLogo.png'}
                            alt="logo"
                        />

                        <p
                            title={currentAccount}
                            className="text-xl whitespace-nowrap">
                            {currentAccount.slice(0, 7) +
                                ' ... ' +
                                currentAccount.slice(30, 42)}
                        </p>
                    </div>

                    <div className="flex text-neutral-500 gap-x-5">
                        <CopyToClipboard text={currentAccount}>
                            <button
                                onClick={() =>
                                    toast.success('Copied Successfull', {
                                        autoClose: 50,
                                    })
                                }
                                className="flex items-center gap-2 text-base cursor-pointer hover:text-neutral-800">
                                <FiCopy />
                                <span> copy Address</span>
                            </button>
                        </CopyToClipboard>

                        <a
                            href={`${etherscan}${currentAccount}`}
                            target="_blank"
                            className="flex items-center gap-2 text-base cursor-pointer whitespace-nowrap hover:text-primary-800"
                            rel="noreferrer">
                            <BsBoxArrowUpRight />
                            <span>view on Etherscan</span>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleCloseModal}
                        className="py-1.5 px-5 bg-primary-500 text-white rounded-lg cursor-pointer">
                        Back
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default AccountDetails;
