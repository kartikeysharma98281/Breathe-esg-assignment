import Signupimg from '../assets/Signupimg.png';
import Logo from '../assets/Logo.png'

export default function Signup() {
    return (
      <div className="grid md:grid-cols-[1fr_1.5fr] min-h-screen text">
        <div className="flex flex-col items-start justify-center bg-[#00FF7F] bg-[url('/bg-pattern.svg')] bg-repeat px-6 md:px-12 lg:px-20 bg-signupbg text-white">
          <div className="max-w-md space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Welcome</h1>
              <div className="flex items-center mt-4">
                <img src={Logo} alt='logo-img'/>
              </div>
              <p className="mt-2 text-white">We help you track your organisation's metrics as per the ESG Guidelines</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white">
                  Email *
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password *
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Confirm Password *
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              
              <div>
                <button
                  // onclick it should direct to the /mainpage route
                  onClick={() => {window.location.href = '/mainpage'}}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-white">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-white hover:text-white/80">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#00FF7F] bg-signupbg">
          <img src={Signupimg} width={400} height={300} alt="Breathe ESG" className="max-w-full h-auto" />
        </div>
      </div>
    )
  }
  
  