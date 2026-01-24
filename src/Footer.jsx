import React from "react";
import { FacebookIcon, GmailIcon, InstagramIcon, LinkedInFooterIcon } from "./components/IconComponent";
import FooterSocialCard from "./components/FooterSocialCardComponent";

function Footer() {
  return (
    <footer className="bg-[#f2552e] w-full p-6 sm:p-10 md:p-20 xl:p-32 overflow-hidden">
      {/* --- HEADER --- */}
      <div className="flex justify-start items-start mb-8 sm:mb-20">
        <h1 className="text-left text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-medium tracking-tighter leading-none">
          GET IN TOUCH
        </h1>
      </div>

      {/* --- GRID --- */}
      {/* Changed: grid-cols-2 on mobile with smaller gap */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12 xl:gap-20">
        <FooterSocialCard
          icon={FacebookIcon}
          platform="FACEBOOK"
          username="Jeremy Rellama"
          url="https://web.facebook.com/JEREMY.RELLAMA17"
        />

        <FooterSocialCard
          icon={InstagramIcon}
          platform="INSTAGRAM"
          username="_Jemmmmm"
          url="https://www.instagram.com/_jjemmmm/"
        />

        <FooterSocialCard
          icon={GmailIcon}
          platform="GMAIL"
          username="jeremyrellama17@gmail.com"
          url="mailto:jeremyrellama17@gmail.com"
        />

        <FooterSocialCard
          icon={LinkedInFooterIcon}
          platform="LINKEDIN"
          username="Jeremy Rellama"
          url="https://www.linkedin.com/in/jeremy-rellama-39292a339/"
        />
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="mt-12 sm:mt-24 xl:mt-32 border-t border-black/10 pt-8 flex flex-col gap-2 opacity-80">
        <p className="text-sm sm:text-lg md:text-xl xl:text-2xl font-medium">
          Built with React.js and Tailwind CSS.
        </p>
        <p className="text-xs sm:text-base md:text-lg xl:text-xl">
          Copyright © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;