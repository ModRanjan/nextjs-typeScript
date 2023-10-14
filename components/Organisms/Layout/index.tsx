import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/Organisms/Header';
import Footer from '@/Organisms/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LayoutProps = React.PropsWithChildren<{
    title: string;
    description?: string;
}>;

const Layout = ({
    children,
    title = 'Boilerplate',
    description = 'nextjs+typeScript boilerplate',
}: LayoutProps) => {
    const [render, setRender] = useState(false);
    useEffect(() => setRender(true), []);

    return (
        render && (
            <>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header />

                <div className="box-border mx-auto">
                    <div className="bg-gradient-to-b from-primary-100 to-white my-font">
                        {children}
                    </div>

                    <Footer />

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
            </>
        )
    );
};

export default Layout;
