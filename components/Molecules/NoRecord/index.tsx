import { Image } from '@/Atoms/Image';

const NoRecord: React.FC = () => {
    return (
        <div className="p-5 bg-white ">
            <div className="flex items-center justify-center">
                <Image
                    src={'/images/emptyData.png'}
                    className="h-40"
                    alt="Empty"
                />
            </div>
            <h1 className="text-2xl text-center text-neutral-700">
                No Locked Tokens
            </h1>
            <h3 className="text-center text-neutral-500">
                You have not locked up any tokens yet.
            </h3>
        </div>
    );
};

export default NoRecord;
