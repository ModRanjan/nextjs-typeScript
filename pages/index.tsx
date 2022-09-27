import type { NextPage } from 'next';
import { default as HomePage } from '@/Organisms/Home';
import { CONTAINER } from '@/utils/index';

const Home: NextPage = () => {
    return (
        <section className={CONTAINER}>
            <HomePage />
        </section>
    );
};

export default Home;
