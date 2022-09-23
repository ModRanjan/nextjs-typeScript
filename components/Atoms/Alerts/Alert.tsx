import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ICONSTYLE } from '@/utils/index';

type AlertProps = {
    customClassName?: string;
    preview: boolean;
    children: React.ReactElement;
};

const Alert = ({ preview, children, customClassName }: AlertProps) => {
    const className = [
        'flex items-center justify-between',
        'bg-primary-300 dark:bg-slate-800 ',
        'font-medium',
        'h-11 w-full',
        'hover:bg-opacity-75',
        'px-2 py-3',
        'ring-1 ring-slate-900/5 ',
        'shadow-xl',
        'text-neutral-50',
        'text-lg',
        `${customClassName}`,
    ].join(' ');

    if (!preview) {
        return null;
    }

    return (
        <div className={`${className}`}>
            <span>{children}</span>

            <IconContext.Provider
                value={{
                    size: '22px',
                    className: `${ICONSTYLE}`,
                }}>
                <AiOutlineClose />
            </IconContext.Provider>
        </div>
    );
};

export default Alert;
