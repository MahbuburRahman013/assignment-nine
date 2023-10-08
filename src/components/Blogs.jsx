

const Blogs = () => {
    return (
        <div className="container mx-auto my-20 text-[#445139]">
            <h1 className="text-center text-4xl uppercase font-semibold">Our Blogs</h1>
            <div className="flex items-center justify-between my-5">
            <div className="w-[30%]">
                <img className="rounded" src="https://i.ibb.co/rk0sdXz/5ae7807c19ee86bc168b46b4.webp" alt="" />
                <p className="font-semibold">comments 5</p>
                <h1 className="text-2xl font-semibold">Wedding Trends for 2023</h1>
            </div>
            <div className="w-[30%]">
                <img className="rounded" src="https://i.ibb.co/y5GbXhY/spring-micro-wedding-morris-arboretum-garden-philadelphia-0052.jpg" alt="" />
                <p className="font-semibold">comments 5</p>
                <h1 className="text-2xl font-semibold">A Guide to Planning a Spring Wedding</h1>
            </div>
            <div className="w-[30%]">
                <img className="rounded" src="https://i.ibb.co/ZzJv8t5/wedding-location.jpg" alt="" />
                <p className="font-semibold">comments 5</p>
                <h1 className="text-2xl font-semibold">Choosing the Perfect Wedding Venue</h1>
            </div>
            </div>
        </div>
    );
};

export default Blogs;