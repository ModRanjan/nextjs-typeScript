type HeaderPropsType = {
    className?: string;
    children: React.ReactNode;
};

const PrimeryHeading: React.FC<HeaderPropsType> = (props) => {
    return <h1 className={props.className}>{props.children}</h1>;
};

export const SubHeading: React.FC<HeaderPropsType> = ({
    children,
    className,
}) => {
    return <h3 className={className}>{children}</h3>;
};

export const Description: React.FC<HeaderPropsType> = ({
    children,
    className,
}) => {
    return <p className={className}>{children}</p>;
};

export default PrimeryHeading;
