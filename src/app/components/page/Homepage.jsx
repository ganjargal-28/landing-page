// import { Information } from "../advantage/Information";
import { Information } from "../advantage/Information";
import { Platform } from "../BigPlatforms/Platform";
import { Carsual } from "../costomers/Carsual";

import { Footer } from "../footer/Footer";

import { Header } from "../header/Header";
import { About } from "../info/About";
import { Plan } from "../plan/Plan";
import { Subscribe } from "../subscribe/subscribe";

import { Country } from "../worldCountry/Country";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <About />

      <Information />
      <Plan />
      <Country />
      <Carsual />
      <Subscribe />
      <Footer />
    </div>
  );
};
