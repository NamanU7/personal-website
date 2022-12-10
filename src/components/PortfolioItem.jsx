import React from 'react';

function PortfolioItem({ title, imgUrl, techStack, link }) {
    return (

        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-stone-100 rounded-md
            hover:border-sky-300 dark:hover:border-amber-300"
        >
            <img
                src={imgUrl}
                alt={title + " project image"}
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-3 md:mb-4 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {techStack.map((item, index) => (
                        <span
                            className="inline-block px-2 py-1 font-semibold border-2
                            border-stone-900 dark:border-stone-100 rounded-md"
                            key={index}>
                            {item}
                        </span>
                    ))}
                </p>

            </div>
        </a>

    );
}

export default PortfolioItem;
