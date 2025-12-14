export default function Navbar() {
    return (
        <nav className="h-18 flex items-center px-4 shadow-md bg-white">
            <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="Logo do site aluga ou compra imóveis. Encontre seu lugar ideal!" className="w-8"/>
                <span>
                    <p className="text-xl font-bold">Aluga ou Compra</p>
                    <p className="text-sm opacity-70">Encontre seu lar ideal</p>
                </span>
            </div>
        </nav>
    );
}