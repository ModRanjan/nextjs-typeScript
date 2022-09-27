import React from 'react';

type ImgProps = {
    src: string;
    alt: string;
    className: string;
    onClick?: () => null;
};
export const Image: React.FC<ImgProps> = ({ src, alt, className, onClick }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={className} src={src} alt={alt} onClick={onClick} />;
};
