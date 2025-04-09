import React from "react";
import Image from "next/image";

const UserCards = ({
  types,
  total_number,
  session,
}: {
  types: string;
  total_number: string;
  session: string;
}) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow w-full p-2  flex-1 space-y-3 min-w-[130px]">
      <div className="flex justify-between items-center w-full gap-2">
        <p className="bg-white rounded-full text-green-600 text-xs py-1 px-2 font-bold">
          {session}
        </p>

        <Image src="/more.png" alt="" width={20} height={20} className="cursor-pointer" />
      </div>

      <p className="font-bold">{total_number}</p>
      <p className="text-gray-400 text-xs"> {types}</p>
    </div>
  );
};

export default UserCards;
