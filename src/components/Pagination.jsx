import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({ thingsPerPage, totalThings, paginateFront, paginateBack, currentPage }) => {
  return (
    <div className='Pagination'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white mb-6'>
        <div className='flex-1 flex justify-between sm:hidden'>
          <button
            disabled={currentPage === 1}
            onClick={() => paginateBack()}
            className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            Previous
          </button>
          <button
            disabled={currentPage === Math.ceil(totalThings / thingsPerPage)}
            onClick={() => paginateFront()}
            className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            Next
          </button>
        </div>
        <div className='hidden sm:flex-1 sm:flex sm:items-center'>
          <div className='mr-7'>
            <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
              <button
                disabled={currentPage === 1}
                onClick={() => paginateBack()}
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </button>
              <button
                disabled={currentPage === Math.ceil(totalThings / thingsPerPage)}
                onClick={() => paginateFront()}
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </nav>
          </div>
          <div>
            <p className='text-sm text-gray-700 underline'>
              Mostrando <span className='font-semibold'>{currentPage * thingsPerPage - thingsPerPage}</span> de <span className='font-semibold'>{currentPage * thingsPerPage}</span> de{' '}
              <span className='font-semibold'>{totalThings}</span> Resultados
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Pagination }
