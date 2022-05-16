import {
  playStoreIcon, facebookIcon, twitterIcon, iphoneScreenshot, playIcon,
} from '../../../assets';

function PhoneSection() {
  return (
    <div className="!hidden half-section md:!flex bg-target-blue">
      <div className="relative">
        <img src={iphoneScreenshot} alt="iPhone screenshot using Target application" />
        <img className="center-position" src={playIcon} alt="" />
      </div>
      <a target="_blank" href="https://www.apple.com/la/app-store/" rel="noreferrer">
        <img src={playStoreIcon} alt="" />
      </a>
      <div className="flex mt-5 space-x-5">
        <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook (now Meta) logo" />
        </a>
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter logo" />
        </a>
      </div>
    </div>
  );
}

export default PhoneSection;
