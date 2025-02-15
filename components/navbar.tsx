export default function Navbar() {
    return(
        <div className="w-screen p-2 bg-gray-950">
            <nav className="flex justify-between">
                <div className="flex gap-1 text-3xl text-teal-300">
                    <span>nFT</span>
                    <span>marketPlace</span>
                </div>
                <div className="flex place-items-center gap-4">
                    <span>About</span>
                    <span>Marketplace</span>
                    <span>Blog</span>
                    <span>Contact</span>
                </div>
            </nav>
        </div>
    );
}