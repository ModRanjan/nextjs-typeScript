type TextProps = {
    children: string;
    className: string | undefined;
};

export const Text: React.FC<TextProps> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};
