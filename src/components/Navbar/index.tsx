import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const navLinks = [
        {
            title: "Home",
            path: "/",
            active: true
        },
        {
            title: "Repúblicas",
            path: "/",
            active: false
        },
        {
            title: "Sobre",
            path: "/",
            active: false
        },
    ];

    return (
        <div className="w-full h-[60px] bg-white shadow-sm absolute top-0 flex z-10">
            <div className="w-full md:px-[50px] px-[23px] flex items-center justify-between">
                <div 
                    className="text-lime-500 font-bold text-[28px] cursor-pointer md:ml-[12px]" 
                    onClick={() => navigate("/")}
                >
                    Republi<span className="text-lime-300">ka</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((navlink) => {
                        return (
                            <a 
                                href={navlink.path} 
                                key={navlink.title} 
                                className={
                                    `font-medium text-[15px] 
                                    ${navlink.active ? "text-lime-500" : "text-[#828ea8]"}
                                    transition-all duration-200 hover:text-lime-500`
                                }
                            >
                                {navlink.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navbar;