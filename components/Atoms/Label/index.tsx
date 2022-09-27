type LabelProps = {
    children: string | React.ReactNode;
    className?: string;
    onHoverTitle?: string;
};

export const Label: React.FC<LabelProps> = ({
    children,
    className,
    onHoverTitle,
}) => {
    return (
        <div className={className} title={onHoverTitle}>
            {children}
        </div>
    );
};
