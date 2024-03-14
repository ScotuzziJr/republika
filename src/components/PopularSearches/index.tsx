interface PopularSearchesProps {
    onSearch: (query: string) => void;
}

const PopularSearches = ({onSearch}:PopularSearchesProps) => {
    const searchTerms = [
        { title: "Quarto individual" },
        { title: "Próximo ao centro" },
        { title: "Banheiro exclusivo" },
    ];

    const handleSearch = (term: string) => {
        onSearch(term);
    };

  return (
    <div className="w-full flex md:flex-row flex-col items-center gap-2 my-6">
        <span className="ml-1 text-gray-600 text-[15px] font-medium">Buscas frequentes:</span>
        <div className="flex items-center gap-3 lg:max-w-full overflow-x-auto max-w-[450px]">
            {searchTerms.map((s) => {
                return (
                    <span 
                        key={s.title} 
                        onClick={() => handleSearch(s.title)}
                        className="border md:mb-0 mb-3 border-lime-500 rounded-full px-3 whitespace-nowrap text-lime-500 bg-gray-100 text-[15px] cursor-pointer hover:bg-lime-100 transition-all duration-200"
                    >
                        {s.title}
                    </span>
                )
            })}
        </div>
    </div>
  )
}

export default PopularSearches;
