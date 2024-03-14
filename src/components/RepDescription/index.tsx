import { useNavigate, useParams } from "react-router";
import { reps } from "../../data/republikas";
import { HomeOutline, LocationOutline, NewspaperOutline } from "react-ionicons";

const RepDescription = () => {
    const params = useParams();
    const id = Number(params.repId) - 1;
    const rep = reps[id] ? reps[id] : reps[0];
    
    const navigate = useNavigate();

    return (
    <div className="w-full flex flex-col gap-8">
        <div className="w-full flex items-start gap-5 bg-white rounded-lg p-9 shadow-sm border border-gray-200 flex-col">
            <span className="text-lime-500 font-semibold text-xl">
                Sobre a moradia
            </span>
            <p className="text-gray-600 leading-7">{rep.description}</p>

            <p className="text-lime-500 text-[15px] font-medium">{rep.republic}</p>
            <p className="text-gray-600 leading-7">{rep.about}</p>
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
				<div className="w-full text-lime-500 font-semibold text-xl text-center bg-white rounded-lg p-3 mb-4 border border-gray-200">
					Moradias semelhantes
				</div>
				<div className="w-full flex md:flex-row flex-col items-center justify-between">
					{reps.slice(0, 3).map((rep) => {
						return (
							<div
								key={rep.title}
								className="md:w-[430px] w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8 py-8 px-4 border border-gray-200"
							>
								<div className="flex flex-col items-start gap-3">
									<img
										src={rep.photo}
										alt={rep.title}
										className="w-[70px]"
									/>
									<span className="font-semibold text-lime-500 text-[22px] w-full">
										{rep.title}
									</span>
									<div className="flex flex-col gap-[6px]">
										<div className="flex items-center gap-2">
											<HomeOutline
												width={"18px"}
												height={"18px"}
												color="#555"
											/>
											<span className="text-[14px] font-medium text-gray-600">
												{rep.republic}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<LocationOutline
												width={"18px"}
												height={"18px"}
												color="#555"
											/>
											<span className="text-[14px] font-medium text-gray-600">
												{rep.gender}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<NewspaperOutline
												width={"18px"}
												height={"18px"}
												color="#555"
											/>
											<span className="text-[14px] font-medium text-gray-600">
												{rep.contractStatus}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-4 self-end">
									<button
										onClick={() => navigate(`/reps/${rep.id}`)}
										className="text-white font-bold text-lg rounded-md bg-lime-500 w-40 h-10"
									>
										Conheça
									</button>
								</div>
							</div>
						);
					})}
				</div>
		</div>
    </div>
  )
}

export default RepDescription;
