import type { NextPage } from 'next';
import Layout from '@/Organisms/Layout/Layout';
import { CONTAINER } from '../utils/';

const Home: NextPage = () => {
    return (
        <Layout title="Boilerplate | Home">
            <section className={CONTAINER}>
                <div className="grid h-screen py-16 place-items-center">
                    <h1 className="m-0 text-6xl text-center">
                        Welcome to{' '}
                        <a
                            className="text-[#0070f3] hover:underline active:underline"
                            href="https://nextjs.org">
                            Next.js!
                        </a>
                    </h1>

                    <p className="text-center">
                        Get started by editing{' '}
                        <code className="">pages/index.tsx</code>
                    </p>

                    <div className="grid items-center max-w-3xl grid-cols-2 gap-3">
                        <a
                            href="https://nextjs.org/docs"
                            className="text-xl p-6 text-left text-inherit border border-[#eaeaea] rounded-lg transition-all de ease max-w-sm hover:text-[#0070f3] hover:border-[#0070f3]">
                            <h2 className="p-2 my-3 text-3xl">
                                Documentation &rarr;
                            </h2>
                            <p>
                                Find in-depth information about Next.js features
                                and API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className="text-xl p-6 text-left text-inherit border border-[#eaeaea] rounded-lg transition-all de ease max-w-sm hover:text-[#0070f3] hover:border-[#0070f3]">
                            <h2 className="p-2 my-3 text-3xl">Learn &rarr;</h2>
                            <p>
                                Learn about Next.js in an interactive course
                                with quizzes!
                            </p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className="text-xl p-6 text-left text-inherit border border-[#eaeaea] rounded-lg transition-all de ease max-w-sm hover:text-[#0070f3] hover:border-[#0070f3]">
                            <h2 className="p-2 my-3 text-3xl">
                                Examples &rarr;
                            </h2>
                            <p>
                                Discover and deploy boilerplate example Next.js
                                projects.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className="text-xl p-6 text-left text-inherit border border-[#eaeaea] rounded-lg transition-all de ease max-w-sm hover:text-[#0070f3] hover:border-[#0070f3]">
                            <h2 className="p-2 my-3 text-3xl">Deploy &rarr;</h2>
                            <p>
                                Instantly deploy your Next.js site to a public
                                URL with Vercel.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
