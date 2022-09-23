import Head from 'next/head';
import Alert from '../../Atoms/Alerts/Alert';

type LayoutProps = React.PropsWithChildren<{
    title: string;
    description?: string;
    preview?: boolean;
}>;

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Boilerplate',
    description = 'nextjs+typeScript boilerplate',
    preview = false,
}) => {
    return (
        <div className="box-border mx-auto">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Alert customClassName="px-3" preview={preview}>
                <span>Somthing went wrong!</span>
            </Alert>
            {/* <Navbar /> */}

            <main className="grid h-screen text-center place-items-center">
                {children}
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
