import type { NextPage } from 'next';
import { default as HomePage } from '@/Organisms/Home';
import { Label } from '@/Atoms/Label';

const Home: NextPage = () => {
    return (
        <div>
            <Label className="pt-8 text-3xl font-bold text-center">
                Web3 Boilerplate with typeScript
            </Label>

            <HomePage />
        </div>
    );
};

export default Home;
