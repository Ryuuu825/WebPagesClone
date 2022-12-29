import '../style/globals.css'
import Icon from './icon'


export default function Nav() {
    return (
        <nav className='w-full flex flex-row justify-start items-center  p-7 text-white'
            style={{
                background: '#171a21'
            }}
        >
            <div className="brand flex flex-row align-middle items-center ml-28">
                <div className="brand-icon">
                    <Icon />
                </div>          
                <div className="brand-name text-2xl ml-2 font-bold tracking-widest text-gray-300">
                    STEAM
                </div>      
            </div>
            <div className="nav-items flex flex-row pt-2 justify-between w-1/3 pl-20"
                style={{
                    color: '#B8BCBF'
                }}
            >
                <div className="nav-item">
                    <a href="/" className="nav-link text-base  hover:text-white">
                        STORE
                    </a>
                </div>
                <div className="nav-item">
                    <a href="/" className="nav-link text-base hover:text-white">
                        COMMUNITY
                    </a>
                </div>
                <div className="nav-item">
                    <a href="/" className="nav-link text-base hover:text-white">
                        ABOUT
                    </a>
                </div>
                <div className="nav-item">
                    <a href="/" className="nav-link text-base hover:text-white">
                        SUPPORT
                    </a>
                </div>
            </div>

            <div className='global-actions flex flex-row ml-auto text-xs'>

                <div className="install-steam">
                    <a href="/" className="install-steam-link p-1 px-2 hover:text-white"
                        style={{
                            background: '#5c7e10',
                        }}
                    >
                        Install Steam
                    </a>
                </div>

                <div className="login">
                    <a href="/" className="login-link p-1 px-2 hover:text-white">
                        Login
                    </a>
                </div>

                <div className="border-r border-gray-500 h-4 my-auto mr-2"></div>
                
                <div className="change-lang flex flex-row items-center cursor-pointer">
                    <span>
                        language 
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>

                </div>

            </div>
        </nav>
    )
}

