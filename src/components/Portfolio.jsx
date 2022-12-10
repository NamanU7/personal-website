import React from 'react';
import PortfolioItem from './PortfolioItem';
import projectData from '../data/projectData';
import Title from './Title';

function Portfolio() {
    return (
        <div>
            <Title>Projects</Title>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectData.map((project, index) => (
                        <PortfolioItem
                            key={index}
                            title={project.title}
                            imgUrl={project.imgUrl}
                            techStack={project.techStack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;