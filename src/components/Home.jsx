import Banner from "./Banner";
import {useLoaderData} from 'react-router-dom'
import Services from "./Services";
import Footer from "./Footer";
import Features from "./Features";
import Blogs from "./Blogs";

const Home = () => {
        const jsonData = useLoaderData();
      


    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <h1 className="text-center mt-14 text-4xl uppercase text-[#546346] font-semibold">Our Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto gap-12 mt-12">
            {
                jsonData.map(data=> <Services key={data.id} data={data}></Services>)
            }
            </div>
            </div>
            <Features></Features>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;