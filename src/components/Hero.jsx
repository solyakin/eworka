import Header from "./Header";
import woman from '../assets/businesswoman.png';

const Hero = () => {

  return (
    <div className="bg-gray-900">
      <Header />
        <div className="relative isolate overflow-hidden pt-14">
            <img
                src={woman}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-40"></div>
            <div className="relative z-40 mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-0 lg:py-56">
                <div className="max-w-4xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
                        The One-stop solution for an effective Human Resource Management
                    </h1>
                    <p className="mt-6 sm:text-lg sm:leading-8 text-gray-300">
                        Save Time & Energy…<br></br>
                        Have an absolute grip over employee management
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="rounded-md bg-mainred w-[200px] px-16 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                        >
                            Join us
                        </a>
                    </div>
                </div>
            </div>
            <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
            >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
        </div>
    </div>
  )
}

export default Hero