import { getOurTeam } from "@/lib/our-team";
import React from "react";

export async function TeamSec() {
  const team = await getOurTeam();

  const descriptionHtml = team?.description || "";

  return (
    <section className=" py-8 md:py-18 ">
      <div className="flex flex-col gap-4 md:gap-12">
        <div>
          <span className="text-[#1C746F] text-sm font-medium">Our Team</span>
          <h2 className="text-[22px] sm:text-[32px] font-medium mb-4 sm:mb-0">
            {team.title}
          </h2>
        </div>

        <div
          className="text-muted-foreground" 
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
        
      </div>
    </section>
  );
}