
const KeyFeatures = () => {
  return (
    <section
    id="features"
    className="w-full px-16 py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800"
  >
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
        Key Features
      </h2>
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-full bg-primary p-3">
            <svg
              className=" h-6 w-6 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Effortless Note-Taking</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Quickly jot down your thoughts with our intuitive interface.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-full bg-primary p-3">
            <svg
              className=" h-6 w-6 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Secure Storage</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Your notes are encrypted and safely stored in the cloud.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-full bg-primary p-3">
            <svg
              className=" h-6 w-6 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Smart Search</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Find any note instantly with our powerful search feature.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default KeyFeatures