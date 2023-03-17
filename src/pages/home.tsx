import Navbar from "../components/Navbar"
import Anaouncments from "../components/Anaouncments"
import Slider from "../components/Slider"
import Categories from "../components/Categories"

export const Home = () => {
  return (
    <div>
        <Anaouncments/>
        <Navbar />
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Home
