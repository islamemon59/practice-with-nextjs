"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutUsPage = () => {
  const router = useRouter();
  const isTrue = true;

  const handleGoToAddressPage = () => {
    if (isTrue) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="text-center mt-6">
      this is a about page
      <Link href="/about/address" className="border p-2 rounded font-bold">
        Go to Address Page
      </Link>
      <button
        onClick={handleGoToAddressPage}
        className="border p-2 rounded font-bold"
      >
        Go to Address Page
      </button>
    </div>
  );
};

export default AboutUsPage;
