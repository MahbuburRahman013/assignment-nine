import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Services = ({data}) => {
    const {description,id,image,name,price} = data;

    return (
        <div className="flex flex-col hover:shadow-xl rounded-md   justify-center items-center px-8 py-5">
            <img  className="w-[150px] h-[150px]" src={image} alt="" />
            <h1 className="text-2xl my-4 font-semibold text-[#546346]">{name}</h1>
            <p className="text-center text-[#5f6757]">{description}</p>
            <div className="flex justify-around w-full my-4 items-center">
                <p className="text-[#5f6757] text-2xl">{price}</p>
                <Link to={`/details/${id}`}>
                <button className="text-base hover:bg-[#5f6757] hover:text-white
                py-2 px-4 rounded-full text-[#5f6757]">See Details</button>
                </Link>
            </div>
        </div>
    );
};

Services.propTypes={
    data:PropTypes.object.isRequired,
}

export default Services;