import Head from 'next/head';
import Header from '@/Organisms/Header';
import { MenuBar } from '@/Molecules/MenuBar';
import Footer from '@/Organisms/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionSeparator from '@/Atoms/SectionSeprator';

type LayoutProps = React.PropsWithChildren<{
    title: string;
    description?: string;
    preview?: boolean;
}>;

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Boilerplate',
    description = 'nextjs+typeScript boilerplate',
    preview = true,
}) => {
    return (
        <div className="box-border mx-auto">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-primary-50 my-font">
                <Header />

                <div className="hidden md:block">
                    <MenuBar />
                </div>
                <SectionSeparator />

                {children}
                <Footer />
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </div>
    );
};

export default Layout;
