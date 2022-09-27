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
        <div>
            <ReactModal
                isOpen={open}
                onRequestClose={handleCloseModal}
                contentLabel="Wallet Details"
                className="p-5 mx-auto mt-20 space-y-2 bg-white shadow-2xl md:w-2/5 rounded-2xl shadow-primary-600">
                <div className="flex justify-between text-xl ">
                    <h3 className="inline "> {label} </h3>
                    <div className="float-right">
                        <button onClick={handleCloseModal}>
                            <GiCancel />
                        </button>
                    </div>
                </div>

                {children}
            </ReactModal>
        </div>
    );
};
