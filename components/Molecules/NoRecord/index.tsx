import { Image } from '@/Atoms/Image';

type NoRecordProps = {
    header: string;
    subHeader: string;
};

const NoRecord: React.FC<NoRecordProps> = ({ header, subHeader }) => {
    return (
        <div className="p-5 bg-white ">
            <div className="flex items-center justify-center">
                <Image
                    src={'/images/emptyData.png'}
                    className="h-40"
                    alt="Empty"
                />
            </div>
            <h1 className="text-2xl text-center text-neutral-700">{header}</h1>
            <h3 className="text-center text-neutral-500">{subHeader}</h3>
        </div>
    );
};

export default NoRecord;
