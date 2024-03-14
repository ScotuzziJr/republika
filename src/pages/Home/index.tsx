import { useState } from "react";
import Filters from "../../components/Filters";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import WelcomeText from "../../components/WelcomeText";
import { reps } from "../../data/republikas";
import Searchbar from "../../components/Searchbar";
import ListedReps from "../../components/ListedReps";
import PopularSearches from "../../components/PopularSearches";

const Home = () => {
  const [filteresReps, setFilteredReps] = useState(reps);
  const [savedReps, setSavedReps] = useState<number[]>([]);

  const handleFilterChange = (filters: {contractStatus: string[]; genderStatus: string[]}) => {
    let filtered = [...reps];
    
    if (filters.contractStatus.length > 0) {
      filtered = filtered.filter((rep) => filters.contractStatus.includes(rep.contractStatus))
    }

    if (filters.genderStatus.length > 0) {
      filtered = filtered.filter((rep) => filters.genderStatus.includes(rep.gender))
    }

    setFilteredReps(filtered);
  };

  const handleSearch = (query: string) => {
    const filtered = reps.filter((rep) => rep.title.toLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredReps(filtered);
  };


  return (
    <div className="w-full">
      <Hero />
      <Services />
      <div className="w-full mt-12 mb-16">
        <WelcomeText />
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
          <Filters 
            onFilterChange={handleFilterChange}
            savedReps={savedReps} 
          />
          <div className="w-full">
            <Searchbar onSearch={handleSearch} />
            <PopularSearches onSearch={handleSearch} />
            <ListedReps reps={filteresReps} savedReps={savedReps} setSavedReps={setSavedReps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
