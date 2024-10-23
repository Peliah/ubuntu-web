import Image from "next/image"

const Footer = () => {
    return (
        <div className="group">
            {/* Footer  */}
            {/* Visible hover area that slides up when near the bottom*/}
            <div className="fixed bottom-0 left-0 right-0 h-[.5px] bg-transparent group-hover:bg-transparent z-50"></div>

            <footer className="fixed bottom-0 left-1/2 right-1/2 p-2 mb-1 rounded-xl bg-gray-900 bg-opacity-50 text-white text-center transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-40 w-1/3">
                <div className="flex items-center justify-between w-full">
                    <div className="flex justify-start items-center w-5/6 space-x-5">
                        <Image src={'/assets/chrome-svgrepo-com.svg'} alt={"chrome"} height={30} width={30} />
                        <Image src={'/assets/vlc-svgrepo-com.svg'} alt={"chrome"} height={30} width={30} />
                        <Image src={'/assets/terminal-svgrepo-com.svg'} alt={"chrome"} height={50} width={40} />
                    </div>
                    <div>
                        <Image src={'/assets/ubuntu-icon.svg'} alt={"chrome"} height={30} width={30} />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer