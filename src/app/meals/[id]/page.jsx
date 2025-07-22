import Image from "next/image";
import React from "react";

const fetchSingleMeal = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();
  return data.meals;
};

export async function generateMetadata({ params }) {
  const {id} = await params
  const post = await fetchSingleMeal(id)
  return {
    title: post[0].strMeal,
  }
}

const SingleMeal = async ({ params }) => {
  const { id } = await params;
  const singleMeal = await fetchSingleMeal(id);
  return (
    <div className="border border-gray-300 p-3 rounded max-w-2xs mx-auto">
      <Image
        width={300}
        height={200}
        className="rounded"
        src={singleMeal[0].strMealThumb}
        alt={singleMeal[0].strMeal}
      />
      <div className="mt-4 font-semibold">
        <p>Name: {singleMeal[0].strMeal}</p>
        <p>Category: {singleMeal[0].strCategory}</p>
      </div>
    </div>
  );
};

export default SingleMeal;
