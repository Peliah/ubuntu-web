
const Footer = () => {
    return (
        <div className="group">
            {/* Footer  */}
            {/* Visible hover area that slides up when near the bottom*/}
            <div className="fixed bottom-0 left-0 right-0 h-[.5px] bg-transparent group-hover:bg-transparent z-50"></div>

            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-40">
                © 2024 Your Company. All rights reserved.
            </footer>
        </div>
    )
}

export default Footer