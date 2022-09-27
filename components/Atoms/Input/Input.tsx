type InputProps = {
    error?: boolean;
    errorMsg?: string;
    id?: string;
    label?: string;
    onChange: () => void;
    placeholder?: string;
    readOnly?: boolean;
    inputRef?: string | HTMLInputElement | any; // inputRef?: string;
    type: React.HTMLInputTypeAttribute;
};

const InputForm: React.FC<InputProps> = ({
    error,
    errorMsg,
    label,
    id,
    inputRef,
    onChange,
    placeholder,
    type,
}) => {
    const className = [
        'align-middle',
        'bg-transparent',
        'border border-neutral-400',
        error && 'border-error-500 outline-error-500',
        'inline-block',
        'outline-none focus:outline-none',
        'px-2 py-0.5',
        'text-inherit',
        'text-lg',
        'w-full',
    ].join(' ');
    return (
        <div className="box-border w-full space-y-1 font-semibold ">
            {label ? (
                <label className="block mb-1 font-bold text-gray-700">
                    {label}
                </label>
            ) : null}

            <input
                type={type}
                id={id}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                ref={inputRef}
            />
            {error && (
                <h1 className="inline text-xs text-error-500">{errorMsg}</h1>
            )}
        </div>
    );
};

export default InputForm;
