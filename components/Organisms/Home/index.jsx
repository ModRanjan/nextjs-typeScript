import SectionSeparator from '@/Atoms/SectionSeprator';
import Hero from '../Hero';

export default function Home() {
    return (
        <section className="grid grid-cols-1 mx-auto place-items-center">
            <Hero />

            <SectionSeparator />
        </section>
    );
}
