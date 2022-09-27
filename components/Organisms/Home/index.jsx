import { Label } from '@/Atoms/Label';
import Hero from '../Hero';

export default function Home() {
    return (
        <section className="grid grid-cols-1 px-2 py-3 mx-auto place-items-center">
            <Label className="text-2xl font-bold text-center">
                Web3 Boilerplate
            </Label>

            <div className="container">
                <Hero />
            </div>
        </section>
    );
}
