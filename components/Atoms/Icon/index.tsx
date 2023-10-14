import { ReactSVGElement } from 'react';

type IconProps = {
    className?: string;
    icon: any;
};
export const Icon: React.FC<IconProps> = ({ icon, className }) => {
    const IconName = icon;

    return <IconName className={className} />;
};
