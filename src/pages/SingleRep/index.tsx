import RepDescription from "../../components/RepDescription";
import RepSidebar from "../../components/RepSidebar";

const SingleRep = () => {
  return (
    <div className="w-full mt-28 mb-16">
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
            <RepSidebar />
            <div className="w-full">
                <RepDescription />
            </div>
        </div>
    </div>
  )
}

export default SingleRep;
