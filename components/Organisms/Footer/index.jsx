import SectionSeparator from '@/Atoms/SectionSeprator';
import Link from 'next/link';
import Logo from '@/Molecules/Logo';

const Footer = () => {
    const menus = ['About', 'Privacy Policy', ' Licensing', 'Contact'];
    return (
        <footer className="px-2 bg-white md:px-4 md:py-4">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a
                    href="/"
                    target="_blank"
                    className="flex items-center justify-center mb-4 sm:mb-0">
                    <Logo url="/" className={'h-10 mx-3'} />
                    <span className="self-center ml-2 text-xl font-semibold">
                        Web3
                    </span>
                </a>
                <ul className="flex flex-wrap items-center justify-center mb-6 sm:mb-0">
                    {menus.map((name, index) => (
                        <li key={index}>
                            <Link href="#">
                                <a className="mr-4 text-sm text-neutral-500 hover:underline md:mr-6 ">
                                    {name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="my-6 border-neutral-200 sm:mx-auto lg:my-4" />
            <span className="block text-sm text-center text-neutral-500">
                © 2022
                <Link
                    href="https://hodl.com"
                    target="_blank"
                    className="hover:underline">
                    Web3™
                </Link>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;
