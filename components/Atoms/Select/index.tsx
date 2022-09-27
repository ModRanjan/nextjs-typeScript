type SelectProps = {
    id: string;
    onChange: () => void;
    options: any;
};

export const Select: React.FC<SelectProps> = ({ id, onChange, options }) => {
    return (
        <select className="py-1 bg-transparent " id={id} onChange={onChange}>
            {options.map((data: any) => (
                <option key={data}>{data}</option>
            ))}
        </select>
    );
};
