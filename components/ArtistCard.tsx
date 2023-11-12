import { MakeupArtist } from "@/types";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ArtistCard = ({
  id,
  name,
  location,
  emailId,
  clients,
  experience,
  events,
  phoneNo,
  imgSrc,
}: MakeupArtist) => {
  return (
    <Link
      className="relative flex min-h-[250px] cursor-pointer flex-col
    rounded-xl bg-stone-950 px-6 py-4 text-white hover:shadow-lg"
      href={`artist/${id}`}
    >
      <div className="flex justify-start gap-x-5">
        <img
          className="inline-block h-12 w-12 rounded-full"
          src={imgSrc}
          alt="profile image"
        />
        <div className="text-xl">
          <div className="font-bold">{name}</div>
          <div className="flex items-center gap-x-1 text-sm">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="mb-5 mt-8 flex flex-col gap-1 text-lg">
        <div className="">
          <span>Satisfied Clients:</span>
          <span className="ml-2 font-semibold">{clients}</span>
        </div>
        <div className="">
          <span>Making people fabulous since:</span>
          <span className="ml-2 font-semibold">{experience}</span>
        </div>
        <div className="">
          <span>Transforming moments in:</span>
          <span className="ml-2 font-semibold">{events.join(", ")}</span>
        </div>
      </div>
      <div className="mt-auto flex flex-col justify-between gap-y-1">
        <div className="flex items-center gap-x-2">
          <FaEnvelope />
          <span>{emailId}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaPhoneAlt />
          <span>{phoneNo}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
