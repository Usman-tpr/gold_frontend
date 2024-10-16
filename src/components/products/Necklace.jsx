import ProductCard from "../common/ProductCard";

const Necklace = () => {
  const products = [
    {
      _id: 0,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg",
      price: "100",
      location: "New York, USA",
      title: "Man-1867175",
      time: "2 Oct 2017",
    },
    {
      _id: 1,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg",
      price: "100",
      location: "New York, USA",
      title: "Man-1867175",
      time: "2 Oct 2017",
    },
    {
      _id: 2,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg",
      price: "100",
      location: "New York, USA",
      title: "Man-1867175",
      time: "2 Oct 2017",
    },
    {
      _id: 3,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg",
      price: "100",
      location: "New York, USA",
      title: "Man-1867175",
      time: "2 Oct 2017",
    },
    {
      _id: 4,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg",
      price: "100",
      location: "New York, USA",
      title: "Man-1867175",
      time: "2 Oct 2017",
    },
    {
      _id: 5,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg",
      price: "100",
      location: "New York, USA",
      title: "Man-1867175",
      time: "2 Oct 2017",
    },
  ];
  return (
    <>
      <div className="px-24 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Necklace</h2>
        <div className="grid grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              imageSrc={product.imageSrc}
              price={product.price}
              location={product.location}
              title={product.title}
              time={product.time}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Necklace;
