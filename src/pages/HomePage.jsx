import HeroImage from "/hero.svg?url";
import AboutImage from "/about.svg?url";
import HomeHero from "../sections/HomeHero";
import HomeAbout from "../sections/HomeAbout";
import HomeServices from "../sections/HomeServices";
import HomeProjects from "../sections/HomeProjects";
import HomeContact from "../sections/HomeContact";

const HomePage = () => {
  return (
    <div className="homepage">
      <HomeHero image={HeroImage} />
      <HomeAbout image={AboutImage} />
      <HomeServices />
      <HomeProjects />
      <HomeContact />
    </div>
  );
};

export default HomePage;
