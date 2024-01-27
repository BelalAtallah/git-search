"use client";
import Card from "@/components/shared/card";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setSearchType } from "@/slices/search-slice";
import { useRouter } from "next/navigation";
import { SearchType } from "@/models";

export function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearchTypeChange = (type: SearchType) => {
    dispatch(setSearchType({ type }));
    router.push("search");
  };

  return (
    <div className="items-center flex justify-center gap-8 flex-wrap">
      <motion.div className="sticky group w-48">
        <a onClick={() => handleSearchTypeChange("users")}>
          <Card title={"Developer"}>
            <Image
              src="/developer.png"
              alt="developer Logo"
              className="w-48 h-48 object-cover transition-all group-hover:invert"
              priority
              width={200}
              height={200}
            />
          </Card>
        </a>
      </motion.div>
      <p className="text-white text-xl">Or</p>
      <motion.div className="sticky group w-48">
        <a onClick={() => handleSearchTypeChange("repositories")}>
          <Card title={"Repository"}>
            <Image
              src="/repo.png"
              alt="repo Logo"
              className="w-48 h-48 object-cover group-hover:invert group-hover:grayscale grayscale-0 hue-rotate-15"
              priority
              width={200}
              height={200}
            />
          </Card>
        </a>
      </motion.div>
    </div>
  );
}
