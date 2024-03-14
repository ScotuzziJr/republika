import bg from "../../assets/images/bg.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex items-center md:justify-between justify-center md:px-24 px-5 bg-coer bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="flex flex-col gap-8 z-50">
            <span className="text-5xl font-semibold text-lime-100">Conheça o Republika</span>
            <p className="text-gray-200 max-w-[600px] leading-7">
                A faculdade é um momento muito importante e que traz consigo diversos desafios e preocupações. Encontrar um lugar para morar em outra cidade não será mais uma delas.
            </p>
            <button className="text-white rounded-full bg-lime-500 w-45 p-3">Encontre uma moradia</button>
        </div>
        <div className="w-full h-[calc(80vh-60px)] z-10 bg-lime-900 opacity-60 absolute top-[60px] left-0"></div>
    </div>
  )
}

export default Hero;
