import React, { Fragment } from 'react'

export default function BreadCrumbs({ breadcrumbs }) {
  return (
    <div className="my-4">
      <nav className="table px-5 py-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <ol className="list-reset flex">
          {breadcrumbs.map((br, i) =>
            breadcrumbs.length - 1 !== i && breadcrumbs.length > 1 ? (
              <Fragment key={i}>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    {br.name}
                  </a>
                </li>
                <li className='flex items-center'>
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                </li>
              </Fragment>
            ) : (
              <li key={i}>
                <a
                  href="#"
                  className="text-base font-bold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  {br.name}
                </a>
              </li>
            )
          )}

          {/* <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
              {">"}
            </span>
          </li>
          <li className="text-neutral-500 dark:text-neutral-400">Data</li> */}
        </ol>
      </nav>
    </div>
  );
}
