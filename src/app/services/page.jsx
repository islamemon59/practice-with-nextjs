import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Services",
  description: "Practice Next.js as best as we can",
};

const page = () => {
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

  return (
    <div className="flex justify-center items-center gap-6">
      {data.map((d) => {
        return (
          <div key={d.id} className="border rounded p-4">
            <p>{d.name}</p>
            <img src={d.image} alt={d.name} />
            <Link
              className="border p-1 rounded mt-5"
              href={`/services/${d.id}`}
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
