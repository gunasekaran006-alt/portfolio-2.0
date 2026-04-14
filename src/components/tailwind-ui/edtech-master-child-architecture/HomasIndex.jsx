import React from 'react';
import HomasNavbar from './HomasNavbar';
import HomasHero from './HomasHero';
import HomePageStats from './HomePageStats';
import HomasAbout from './HomasAbout';
import HomasFeatures from './HomasFeatures';
import HomasCourses from './HomasCourses';
import HomasMobileApp from './HomasMobileApp';
import HomasFooter from './HomasFooter';


function HomasIndex() {
  return (
    //Main Container: This functions like an entire app.
    <div className="bg-white rounded-[40px] shadow-2xl max-w-7xl mx-auto overflow-hidden font-sans">
      <HomasNavbar />
      <HomasHero />
      <HomePageStats />
      <HomasAbout />
      <HomasFeatures />
      <HomasCourses />
      <HomasMobileApp />
      <HomasFooter />
    </div>
  );
}

export default HomasIndex;