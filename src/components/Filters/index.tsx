import { useCallback, useEffect, useState } from "react";
import { BusinessOutline, CloseCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router";
import { reps } from "../../data/republikas";

interface FiltersProps {
    onFilterChange:(filters: {contractStatus: string[]; genderStatus: string[]}) => void;
    savedReps: number[];
}

const Filters = ({ onFilterChange, savedReps }:FiltersProps) => {
    const [contract, setContract] = useState<string[]>([]);
    const [gender, setGender] = useState<string[]>([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memoFilterChange = useCallback(onFilterChange, []);
    
    useEffect(() => {
        memoFilterChange({contractStatus: contract, genderStatus: gender});
    }, [contract, gender, memoFilterChange])

    const handleCloseFilters = () => {
        setContract([]);
        setGender([]);
    };
    const handleContractStatusChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const filterValue = e.target.value;

        setContract((prev) => {
            if (isChecked) {
                return [...prev,filterValue];
            } else {
                return prev.filter((status) => status !== filterValue);
            }
        })
    };
    const handleGenderStatusChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const filterValue = e.target.value;

        setGender((prev) => {
            if (isChecked) {
                return [...prev,filterValue];
            } else {
                return prev.filter((status) => status !== filterValue);
            }
        })
    };

    const navigate = useNavigate();

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
        <div className="w-full bg-white rounded-lg p-5 border border-gray-200">
            <div className="w-full flex items-center justify-between">
                <span className="text-gray-800 font-semibold text-[15px]">Filtrar moradias</span>
                <CloseCircleOutline 
                    cssClasses={"cursor-pointer"} 
                    color={"#ed5a85"} 
                    onClick={handleCloseFilters} 
                />
            </div>
            <div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5">
                <div className="flex flex-col gap-4">
                    <span className="text-gray-800 font-semibold text-[15.5px]">Contrato mínimo</span>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                value="Mensal" 
                                checked={contract.some((c) => c === "Mensal")}
                                onChange={handleContractStatusChange}
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-gray-800 font-semibold text-[15px]">Mensal</span>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                value="Semestral" 
                                checked={contract.some((c) => c === "Semestral")}
                                onChange={handleContractStatusChange}
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-gray-800 font-semibold text-[15px]">Semestral</span>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                value="Anual" 
                                checked={contract.some((c) => c === "Anual")}
                                onChange={handleContractStatusChange}
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-gray-800 font-semibold text-[15px]">Anual</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-gray-800 font-semibold text-[15.5px]">Gênero</span>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                value="Mista" 
                                checked={gender.some((g) => g === "Mista")}
                                onChange={handleGenderStatusChange}
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-gray-800 font-semibold text-[15px]">Mista</span>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                value="Feminina" 
                                checked={gender.some((g) => g === "Feminina")}
                                onChange={handleGenderStatusChange}
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-gray-800 font-semibold text-[15px]">Feminina</span>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                value="Masculina" 
                                checked={gender.some((g) => g === "Masculina")}
                                onChange={handleGenderStatusChange}
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-gray-800 font-semibold text-[15px]">Masculina</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg p-5 mt-5 border border-gray-200">
            <div className="w-full flex flex-col gap-2">
                <span className="text-gray-800 font-semibold text-[15px]">Moradias salvas</span>
                <div className="flex flex-col w-full gap-5">
                    {!savedReps.length && (<span className="text-gray-400 text-[14px]">Você ainda não salvou nenhuma moradia...</span>)}
                    {savedReps.map((rep) => {
                        const r = reps.find((r) => r.id === rep);
                        if (r) {
                            return (
                                <div key={rep} className="text-gray-800 flex items-center justify-between w-full order-b border-gray-300 pb-3">
                                    <div className="flex flex-col items-start gap-1">
                                        <span>{r.title}</span>
                                        <div className="flex items-center gap-2">
                                            <BusinessOutline width={"18px"} height={"18px"} color={"#555"} />
                                            <span className="text-[14px] text-gray-600">{r.republic}</span>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => navigate(`/reps/${r.id}`)} 
                                        className="text-white font-semibold text-[15px] rounded-md bg-lime-500 w-20 h-8"
                                    >
                                        Ver
                                    </button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filters;
