import { XCircleIcon } from '@heroicons/react/solid'

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose()
    }, 9000)
  }

  return (
    <>
      <div className='Alert max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        {alert?.active && (
          <div className='bg-red-100 p-5 w-full rounded mb-8'>
            <div className='flex items-center space-x-3'>
              <div className='flex-1 leading-tight text-sm text-black font-medium'>{alert.message}</div>
              <button type='button'>
                <XCircleIcon className='w-6 h-6 text-gray-600' onClick={handleClose} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export { Alert }
