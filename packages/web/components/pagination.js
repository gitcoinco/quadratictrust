import React from "react";
import { usePagination, DOTS } from "../lib/usePagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="font-karla font-semibold px-4 py-3 flex items-center justify-between sm:px-6 text-trust-blue">
      <div className="flex-1 flex justify-between sm:hidden">
        {currentPage === 1 && (
          <button
            type="button"
            disabled
            className="relative inline-flex items-center px-4 py-2 border-2 border-trust-blue text-base font-medium rounded-md text-trust-blue bg-white hover:bg-trust-yellow"
          >
            PREVIOUS
          </button>
        )}
        {currentPage > 1 && (
          <button
            type="button"
            onClick={onPrevious}
            className="relative inline-flex items-center px-4 py-2 border-2 border-trust-blue text-base font-medium rounded-md text-trust-blue bg-white hover:bg-trust-yellow"
          >
            PREVIOUS
          </button>
        )}
        {currentPage != lastPage && (
          <button
            type="button"
            onClick={onNext}
            className="ml-3 relative inline-flex items-center px-4 py-2 border-2 border-trust-blue text-base font-medium rounded-md text-trust-blue bg-white hover:bg-trust-yellow"
          >
            NEXT
          </button>
        )}
        {currentPage === lastPage && (
          <button
            type="button"
            disabled
            className="ml-3 relative inline-flex items-center px-4 py-2 border-2 border-trust-blue text-base font-medium rounded-md text-trust-blue bg-white hover:bg-trust-yellow"
          >
            NEXT
          </button>
        )}
      </div>
      <div className="hidden mx-auto sm:flex sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md -space-x-px"
            aria-label="Pagination"
          >
            {currentPage === 1 && (
              <button
                type="button"
                disabled
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border-2 border-trust-blue bg-white text-base font-medium text-trust-blue hover:bg-trust-yellow"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
            {currentPage > 1 && (
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border-2 border-trust-blue bg-white text-sm font-medium text-trust-blue hover:bg-trust-yellow"
                onClick={onPrevious}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
            {paginationRange.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return (
                  <span className="relative inline-flex items-center px-4 py-2 border-2 border-trust-blue bg-white text-base font-medium text-trust-blue">
                    ...
                  </span>
                );
              }
              if (currentPage === pageNumber) {
                return (
                  <button
                    type="button"
                    key={pageNumber}
                    className="bg-trust-blue border-trust-blue text-white relative inline-flex items-center px-4 py-2 border-2 text-base font-medium hover:bg-trust-yellow"
                    onClick={() => onPageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              } else {
                return (
                  <button
                    type="button"
                    key={pageNumber}
                    className="bg-white border-trust-blue text-trust-blue relative inline-flex items-center px-4 py-2 border-2 text-base font-medium hover:bg-trust-yellow"
                    onClick={() => onPageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              }
            })}
            {currentPage === lastPage && (
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border-2 border-trust-blue bg-white text-base font-medium text-trust-blue hover:bg-trust-yellow"
                disabled
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
            {currentPage != lastPage && (
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border-2 border-trust-blue bg-white text-base font-medium text-trust-blue hover:bg-trust-yellow"
                onClick={onNext}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
