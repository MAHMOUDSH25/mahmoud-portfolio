import React from "react";

function PortfolioItem({ title, imgUrl, progress, stack, link }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
            {title}
          </h3>
          <p className="flex flex-wrap flex-row items-center justify-start gap-2 text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                {item}
              </span>
            ))}
          </p>
          <p className="text-xs md:text-xs mt-2 font-medium dark:text-gray-400">
            <em>{progress}</em>
          </p>
        </div>
      </a>
    </>
  );
}

export default PortfolioItem;
