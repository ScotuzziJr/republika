import { useNavigate } from "react-router";

const Footer = () => {
    const navigate = useNavigate();
    const footerLinks = [
        {
            title: "Sobre",
            path: "/",
            active: true
        },
        {
            title: "Termos e condições",
            path: "/",
            active: false
        },
        {
            title: "Serviços",
            path: "/",
            active: false
        },
    ];

    return (
    <div className="w-full md:h-[60px] h-auto py-5 md:py-0 bg-white shadow-sm flex">
        <div className="flex md:flex-row flex-col md:h-[60px] h-full w-full md:gap-0 gap-5 md:px-[65px] px-[23px] md:items-center justify-between items-start">
            <div 
                className="text-lime-500 font-bold text-[28px] cursor-pointer md:ml-[12px]" 
                onClick={() => navigate("/")}
            >
                Republi<span className="text-lime-300">ka</span>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-4">
                {footerLinks.map((link) => {
                    return (
                        <a 
                            href={link.path}
                            key={link.title}
                            className="font-medium text-[15px] text-[#828ea8] transition-all duration-200 hover:text-lime-500"
                        >
                            {link.title}
                        </a>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default Footer;