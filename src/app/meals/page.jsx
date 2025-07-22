"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const fetchMealsData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    console.log(data);
    setMeals(data?.meals);
  };

  useEffect(() => {
    fetchMealsData();
  }, [search]);

  return (
    <div>
      <input
        className="border-2 p-2 rounded"
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Food"
      />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {meals.map((meal) => {
          return (
            <div
              key={meal.idMeal}
              className="border border-gray-300 p-3 rounded"
            >
              <Image
                width={300}
                height={200}
                className="rounded"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className="mt-4 font-semibold">
                <p>Name: {meal.strMeal}</p>
                <p>Category: {meal.strCategory}</p>
                <div className="flex justify-end">
                  <Link
                    className="border rounded p-1 border-gray-400"
                    href={`/meals/${meal.idMeal}`}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
