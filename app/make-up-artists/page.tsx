import ArtistCard from "@/components/ArtistCard";
import { MAKEUP_ARTISTS } from "@/constants";
import { MakeupArtist } from "@/types";
import React from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-10 max-sm:px-5 md:grid-cols-2 xl:grid-cols-3">
      {MAKEUP_ARTISTS.map((artist: MakeupArtist) => {
        return (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            location={artist.location}
            emailId={artist.emailId}
            events={artist.events}
            clients={artist.clients}
            experience={artist.experience}
            phoneNo={artist.phoneNo}
            imgSrc={artist.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default Page;
