import React from 'react';

const Error = () => {
    return (
        <div className="flex items-center justify-center pt-20 pb-6">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-indigo-500">
                        404
                    </div>

                    <div className="mt-10 text-3xl font-bold xl:text-5xl lg:text-5xl md:text-5xl">
                        This page does not exist
                    </div>

                    <div className="mt-8 text-sm font-medium text-gray-400 md:text-xl lg:text-xl">
                        The page you are looking for could not be found.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
