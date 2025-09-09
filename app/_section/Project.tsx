"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWatcher from "../_components/SectionWatcher";
import { projects } from '../data/projectData';
import ProjectCard from '../_components/ProjectCard';

export default function Project() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${100 - 100 / projects.length}%`]);

    return (
        <SectionWatcher id="project">
            <h3 className='text-center text-blue'>프로젝트</h3>
            <h2 className="text-3xl text-center">제가 참여했던 프로젝트들입니다.</h2>
            <div ref={targetRef} className="relative h-[300vh] bg-white text-black">
            <div className="sticky top-0 flex h-screen items-start overflow-hidden pt-16">
                    <motion.div style={{ x }} className="flex gap-8">
                        {projects.map((project) => (
                            <ProjectCard project={project} key={project.id} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWatcher>
    );
}