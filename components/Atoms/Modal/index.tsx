import { GiCancel } from 'react-icons/gi';
import { default as ReactModal } from 'react-modal';

type ModalProps = {
    children: string | JSX.Element;
    label?: string;
    open: boolean;
    handleCloseModal: () => void;
};
export const Modal: React.FC<ModalProps> = ({
    children,
    label,
    open,
    handleCloseModal,
}) => {
    return (
        <ReactModal
            isOpen={open}
            onRequestClose={handleCloseModal}
            contentLabel="Wallet Details"
            className="p-5 mx-auto mt-20 space-y-2 border-none rounded-lg shadow-lg bg-primary-50 md:w-2/5 shadow-primary-300">
            <div className="flex justify-between text-xl">
                <h3 className="inline-block"> {label} </h3>
                <div className="float-right">
                    <button onClick={handleCloseModal}>
                        <GiCancel />
                    </button>
                </div>
            </div>

            {children}
        </ReactModal>
    );
};
