import { useParams } from "react-router";
import { reps } from "../../data/republikas";
import { CashOutline, HomeOutline, LocationOutline, NewspaperOutline, PeopleOutline } from "react-ionicons";

const RepSidebar = () => {
    const params = useParams();
    const id = Number(params.repId) - 1;
    const rep = reps[id] ? reps[id] : reps[0];

    return (
        <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
            <div className="w-full bg-white rounded-lg p-5 border border-gray-200 flex flex-col gap-4">
                <span className="text-lime-500 font-medium text-lg">
                    {rep.title}
                </span>
                <span className="text-gray-500 font-medium text-[14px]">
                    {rep.location}
                </span>
                <div className="flex items-center gap-2">
                    <HomeOutline width={"18px"} height={"18px"} color="#555" />
                    <span className="text-[14px] font-medium text-gray-600">{rep.republic}</span>
                </div>
                <div className="flex items-center gap-2">
                    <LocationOutline width={"18px"} height={"18px"} color="#555" />
                    <span className="text-[14px] font-medium text-gray-600">{rep.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <NewspaperOutline width={"18px"} height={"18px"} color="#555" />
                    <span className="text-[14px] font-medium text-gray-600">{rep.contractStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                    <CashOutline width={"18px"} height={"18px"} color="#555" />
                    <span className="text-[14px] font-medium text-gray-600">{rep.rent}</span>
                </div>
                <div className="flex items-center gap-2">
                    <PeopleOutline width={"18px"} height={"18px"} color="#555" />
                    <span className="text-[14px] font-medium text-gray-600">{rep.gender}</span>
                </div>
                <button className="text-white font-bold text-lg rounded-md mt-5 bg-lime-500 w-full h-10">Entre em contato</button>
            </div>
        </div>
    )
}

export default RepSidebar;
