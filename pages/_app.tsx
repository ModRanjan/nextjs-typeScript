import '../styles/globals.css';
import Layout from '@/Organisms/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout title="typescript boilerplate">
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
