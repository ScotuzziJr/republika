const Services = () => {
  const servicesList = [
    {
      title: "Rapidez",
      desc: "Encontre as melhores moradias para você com alguns cliques"
    },
    {
      title: "Personalização",
      desc: "Aplique filtros para buscar por moradias que combinam com você"
    },
    {
      title: "Praticidade",
      desc: "Fale diretamente com as pessoas que irão morar com você"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-16 mb-24 md:px-0 px-5">
      <div className="flex flex-col gap-1 text-center">
        <span className="font-semibold text-2xl text-lime-500 ">Nossa proposta</span>
        <p className="text-[15px] text-gray-600 max-w-[500px] leading-7">
          O Republika busca facilitar a busca por moradias por parte dos estudantes que precisam deixar as suas cidades para estudar.
        </p>
      </div>
        <div className="flex md:w-[65%] my-0 mx-auto w-full items-center gap-8 md:flex-row flex-col">
          {servicesList.map((s, index: number) => {
            return (
              <div className="w-full bg-white hover:bg-lime-50 transition-all duration-200 p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-3 items-start" key={index}>
                <span className="text-lime-500 font-semibold">{s.title}</span>
                <p className="text-[15px] leading-7 text-gray-700">{s.desc}</p>
                <a href="#"
                  className="text-lime-500 text-[15px]"
                >
                  Saiba mais
                </a>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Services;
