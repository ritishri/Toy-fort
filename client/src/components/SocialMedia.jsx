import React from "react";
import "@fontsource/open-sans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="mt-10" style={{ fontFamily: "Open Sans" }}>
      <div className="flex gap-6">
        <p className="font-semibold text-md tracking-wide p-2">SHARE</p>
        <div className="flex gap-4 text-white">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http://localhost/toyfort-master/blog/toys/a-complete-guide-to-buying-safe-and-fun-toys-for-kids-in-india"
            target="_blank"
            className="bg-[#3b5998] pt-2 pb-2 pl-4 pr-4 rounded-sm"
          >
            <FontAwesomeIcon className="pr-2" icon={faFacebook} />
            Facebook
          </a>
          <a
            href="https://x.com/intent/post?url=http%3A%2F%2Flocalhost%2Ftoyfort-master%2Fblog%2Ftoys%2Fa-complete-guide-to-buying-safe-and-fun-toys-for-kids-in-india&text=A%20Complete%20Guide%20to%20Buying%20Safe%20and%20Fun%20Toys%20for%20Kids%20in%20India"
            target="_blank"
            className="bg-[#55acee] pt-2 pb-2 pl-4 pr-4 rounded-sm"
          >
            <FontAwesomeIcon className="pr-2" icon={faTwitter} />
            Twitter
          </a>
          <a
            href="https://api.whatsapp.com/send?text=A%20Complete%20Guide%20to%20Buying%20Safe%20and%20Fun%20Toys%20for%20Kids%20in%20India%20-%20http://localhost/toyfort-master/blog/toys/a-complete-guide-to-buying-safe-and-fun-toys-for-kids-in-india"
            target="_blank"
            className="bg-[#2cb742] pt-2 pb-2 pl-4 pr-4 rounded-sm"
          >
            <FontAwesomeIcon className="pr-2" icon={faWhatsapp} />
            Whatsapp
          </a>
          <a
            href="https://www.pinterest.com/pin/create/button/?url=http://localhost/toyfort-master/blog/toys/make-the-most-amazing-words-with-a-word-maker&media=http://localhost/toyfort-master/uploads/blog/202306/img_thumb_649e881be32697-09958034-44140577.jpg"
            target="_blank"
            className="bg-[#cc2127] pt-2 pb-2 pl-4 pr-4 rounded-sm"
          >
            <FontAwesomeIcon className="pr-2" icon={faPinterest} />
            Pinterest
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
