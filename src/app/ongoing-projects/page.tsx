'use client';

import React, { useState, useMemo } from 'react';
import { ongoingProjects } from "../export";
import Projectcard from '../components/projectcard';

const OngoingProjectsBoard: React.FC = () => {
    const [activeCompany, setActiveCompany] = useState<number | null>(0);

    const totalProjects = useMemo(() => {
        return ongoingProjects.reduce(
            (count, group) => count + group.projects.length,
            0
        );
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-red text-white px-4 sm:px-8 lg:px-14 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                <aside className="lg:col-span-1 bg-gray-800/60 backdrop-blur rounded-2xl p-6 sticky top-6 h-fit">
                    <h2 className="text-xl font-semibold mb-6">Project Overview</h2>

                    <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-xl">
                            <p className="text-sm text-gray-400">Total Projects</p>
                            <p className="text-3xl font-bold text-blue-400">
                                {totalProjects}
                            </p>
                        </div>

                        <div className="p-4 bg-gray-700/50 rounded-xl">
                            <p className="text-sm text-gray-400">Client Groups</p>
                            <p className="text-3xl font-bold text-emerald-400">
                                {ongoingProjects.length}
                            </p>
                        </div>
                    </div>
                </aside>

                <div className="lg:col-span-3 space-y-6">
                    {ongoingProjects.map((group, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/60 backdrop-blur rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setActiveCompany(
                                        activeCompany === index ? null : index
                                    )
                                }
                                className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-700/40 transition cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {group.company}
                                    </h3>
                                    {/* <p className="text-sm text-gray-400">
                                        {group.projects.length} active projects
                                    </p> */}
                                </div>
                            </button>
                                <div className="px-6 pb-6 space-y-4">
                                    <Projectcard
                                        index={index}
                                        companyName={group.company}
                                        projects={group.projects}
                                        logo={group.logo}
                                    />
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OngoingProjectsBoard;