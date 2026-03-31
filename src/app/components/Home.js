"use client";

import Hero from './Hero';
import AboutUsSection from './AboutUsSection';
import OurProjectsSection from './OurProjectsSection';
import StatsSection from './StatsSection';
import SDGSection from './SDGSection';
import ImpactSection from './ImpactSection';
import PartnersSection from './PartnersSection';
import SocialEmotionalSection from './SocialEmotionalSection';
import InspiringStoriesSection from './InspiringStoriesSection';
import UpcomingEvents from './UpcomingEvents';
// import AwardsTimline from './AwardsTimline';
import ActivitiesSection from './ActivitiesSection';
import ActivityYTVideos from './ActivityYTVideos';
import AwardeesJourney from './AwardeesJourney';



export default function Home() {
  return (
    <>
      <style jsx global>{`
        // * { box-sizing: border-box; }
        // body { margin: 0; font-family: 'Poppins', sans-serif; color: #333; background: white; line-height: 1.6; }
        // .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        // h1, h2, h3 { font-weight: 700; margin: 0 0 20px 0; }
        // .btn { display: inline-block; padding: 16px 32px; border-radius: 50px; font-weight: 600; text-decoration: none; transition: all 0.3s; font-size: 16px; }
        // .btn-blue { background: #00acf0; color: white; }
        // .btn-blue:hover { background: #00acf0; }
        // .btn-yellow { background: #fbd45a; color: white; }
        // .btn-yellow:hover { background: #fbd45a; }

      

        
      `}</style>

      {/* Hero */}
      <Hero />

      <UpcomingEvents />

      {/* About */}
      <AboutUsSection />

      {/* Projects */}
      <OurProjectsSection />

      {/* Stats */}
      <StatsSection />

      {/* SDG */}
      <SDGSection />

      {/* Impact */}
      <ImpactSection />

      {/* Partners */}
      <PartnersSection />

      <SocialEmotionalSection />

      <ActivitiesSection />

      <ActivityYTVideos />

      <InspiringStoriesSection />

      {/* <AwardsTimline /> */}

      <AwardeesJourney />

    </>
  );
}