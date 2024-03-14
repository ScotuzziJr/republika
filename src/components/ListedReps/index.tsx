import { Bookmark, BookmarkOutline, HomeOutline, LocationOutline, NewspaperOutline } from "react-ionicons";
import { useNavigate } from "react-router";

type Rep = {
    id: number,
    title: string,
    republic: string,
    location: string,
    rent: string,
    photo: string,
    contractStatus: string,
    gender: string,
    about: string,
    description: string
}

interface ListedRepsProps {
    reps: Rep[];
    setSavedReps: React.Dispatch<React.SetStateAction<number[]>>;
    savedReps: number[];
}

const ListedReps = ({reps, setSavedReps, savedReps}:ListedRepsProps) => {
    const navigate = useNavigate();
    const handleSave = (id:number) => {
        const item = savedReps.find((r) => r === id);
        if (item) {
            setSavedReps(savedReps.filter((r) => r !== item));
        } else {
            setSavedReps((prev) => [...prev,id]);
        }
    };
  
    return (
        <div className="w-full flex items-center justify-between flex-wrap mt-8">
            {!reps.length && <span className="w-full text-center">Nenhuma moradia encontrada...</span>}
            {reps.map((rep) => {
                return (
                    <div
                        key={rep.id}
                        className=" w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8 py-8 px-4 border border-gray-200"
                    >
                        <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
                            <img src={rep.photo} alt={rep.title} className="w-[140px]"/>

                            <div className="flex flex-col gap-[6px]">
                                <span className="font-semibold text-lime-500 text-[22px]">
                                    {rep.title}
                                </span>
                                <div className="flex items-center gap-2">
                                    <HomeOutline width={"18px"} height={"18px"} color="#555"/>
                                    <span className="text-[14px] font-medium text-gray-600">{rep.republic}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LocationOutline width={"18px"} height={"18px"} color="#555"/>
                                    <span className="text-[14px] font-medium text-gray-600">{rep.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <NewspaperOutline width={"18px"} height={"18px"} color="#555"/>
                                    <span className="text-[14px] font-medium text-gray-600">{rep.contractStatus}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 self-end">
                            <button 
                                className="text-white font-bold text-lg rounded-md bg-lime-500 w-40 h-10"
                                onClick={() => navigate(`/reps/${rep.id}`)}
                            >
                                Conheça
                            </button>
                            <div
                                onClick={() => handleSave(rep.id)} 
                                className={`flex items-center gap-2 cursor-pointer rounded-md justify-center py-1 border border-gray-200 ${
                                savedReps.some((r) => r === rep.id) ? "bg-gray-100" : "bg-gray-200"
                            }`}>
                                {
                                    savedReps.some((r) => r === rep.id) ? (<Bookmark color="#84cc16" />) : (<BookmarkOutline color="#84cc16" />)
                                }

                                <span className="font-medium text-[14.5px] text-gray-600">
                                    {savedReps.some((r) => r === rep.id) ? "salvo!" : "salvar"}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ListedReps;
