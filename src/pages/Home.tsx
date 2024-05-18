import Pagination from "../components/pagination"
import CoinList from "../components/coin-list"
import Hero from "../components/hero"
import SearchBar from "../components/search-bar"
import { useStateManagment } from "../state-managment/state"

const Home = () => {
  const { state, dispatch } = useStateManagment();

  const handlePageChange = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  return (
    <>
      <Hero />
      <SearchBar />
      <CoinList />
      <Pagination
        totalPages={state.totalPages}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default Home