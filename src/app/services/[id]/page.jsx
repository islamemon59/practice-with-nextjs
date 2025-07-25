import React from "react";
const data = [
  {
    id: "u1",
    name: "Rafiul Islam",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "u2",
    name: "Nusrat Jahan",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "u3",
    name: "Tanvir Hasan",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: "u4",
    name: "Mim Akter",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: "u5",
    name: "Sajid Mahmud",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export async function generateMetadata({ params }) {
  const id = params.id;
  const singleData = data.find((d) => d.id == id);
  return {
    title: singleData.name,
  };
}

const page = ({ params }) => {
  const id = params.id;

  const singleData = data.find((d) => d.id == id);

  if (singleData) {
    return (
      <div>
        <p>{singleData.name}</p>
        <img src={singleData.image} alt={singleData.name} />
      </div>
    );
  } else {
    return (
      <>
        <p>Page not found</p>
      </>
    );
  }
};

export default page;
