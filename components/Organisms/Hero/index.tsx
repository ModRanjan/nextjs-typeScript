import { useState, useRef } from 'react';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { Label } from '@/Atoms/Label';
import Input from '@/Atoms/Input/Input';
import Button from '@/Atoms/Button';
import SectionSeparator from '@/Atoms/SectionSeprator';
import { IRootState } from '../../../redux/store';
import { contractAddress } from '../../../constant';
import Web3Boilerplate from '../../../artifacts/contracts/abis/Web3Boilerplate.json';

const Hero = () => {
    const walletData = useSelector(
        (state: IRootState) => state
    ).WalletDataReducer;
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnChange = () => {
        // console.log(inputRef.current);
        let entereName = inputRef.current?.value;
        if (entereName == '') {
            setInputError(true);
            toast.error("name can't be empty");
        } else {
            setInputError(false);
        }

        if (typeof entereName == 'string') {
            setName(entereName);
        }
    };
    const userRegistration = async () => {
        let signer: ethers.providers.JsonRpcSigner | undefined;

        if (walletData.provider) {
            signer = walletData.signer;
        }

        const contract = new ethers.Contract(
            contractAddress,
            Web3Boilerplate.abi,
            signer
        );

        if (name === '') {
            toast.error('Invalid Input');
            return 0;
        }
        try {
            setLoading(true);
            const transaction = await contract.userRegistration(name);
            console.log(transaction);
            toast.success(
                'Transaction is placed, wait till it gets confirmed on blockchain'
            );
            const tx = await transaction.wait();
            toast.success('user Registered  Successfull');
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            if (error.code === 4001) {
                toast.error('User denied transaction signature');
            } else {
                toast.error(error.reason);
            }
        }
    };

    return (
        <div className="container w-full mx-auto my-8 bg-white shadow-sm md:w-2/5 shadow-primary-300">
            <div className="p-5 space-y-5">
                <Label className="text-xl font-semibold text-center">
                    User Registration
                </Label>
                <Input
                    label="Enter Name :"
                    type="text"
                    id="name"
                    inputRef={inputRef}
                    placeholder="enter your name"
                    onChange={handleOnChange}
                    error={inputError}
                    errorMsg="Name : Can't be empty"
                />
                <Button loading={loading} onClick={userRegistration}>
                    Register
                </Button>
            </div>
        </div>
    );
};

export default Hero;
