import Link from 'next/link';
import { Image } from '@/Atoms/Image';
import Button from '@/Atoms/Button';

type LogoProps = {
    className: string;
    url: string;
};

const Logo: React.FC<LogoProps> = ({ className, url }) => {
    return (
        <Button customClassName="flex items-center p-0" link={url}>
            <Image src={'/images/web3.png'} alt="logo" className={className} />
        </Button>
    );
};

export default Logo;
