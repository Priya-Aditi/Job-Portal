import JobCard from "../Components/JobCard";
import SearchBar from "../Components/SearchBar";
import ThemeToggle from "../Components/ThemeToggle";
import { useJob } from "../Hook/useJob";
import "./Home.css";
import logo from "./logo.png";

const Home = () => {
  const { jobs, loading, filterJobs, nextPage, prevPage, page, totalPages } = useJob();

  if (loading) return <p>Loading jobs...</p>;

  return (
    <>
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <SearchBar onSearch={filterJobs} />
        <ThemeToggle />
      </div>

      {/* <h1 className="home-heading">Find your dream job</h1>  */}

      <div className="home-heading-container">
  <h1 className="home-heading">
    <span className="highlight">Find</span> your <span className="highlight">dream job</span>
  </h1>
  <p className="subtext">Explore hundreds of opportunities crafted for you</p>
</div>


      <div className="home">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={prevPage}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default Home;
