import React, { useState } from 'react'
import mockAbout from '../mock/mockAbout.js';
import Comments from '../components/common/Comments.jsx';
import Breadcrumbs from '../ui/Breadcrumbs.jsx';
import Services from '../components/about/Services.jsx';
import SectionTabs from '../components/about/SectionTabs.jsx';
import Intro from '../components/about/Intro.jsx';

const breadcrumbTrail = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' }
];

export default function AboutPage() {
  const [selectedSection, setSelectedSection] = useState("History");

  const findSelectedContent = (field) => {
    const selectedIntro = mockAbout.find(item => item.name === selectedSection);
    return selectedIntro ? selectedIntro[field] : "";
  };

  return (
    <div className='w-2/3 m-12 space-y-8'>
      <Breadcrumbs trail={breadcrumbTrail} />
      <section className='space-y-4'>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold'>Who Are We?</h1>
        <SectionTabs
          items={mockAbout}
          selectedSection={selectedSection}
          onSelect={setSelectedSection}
        />
      </section>
      <Intro
        text={findSelectedContent('text')}
        image={findSelectedContent('image')}
      />
      <Services />
      < section className='w-full'>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold text-center'>Testimonials</h1>
        <Comments />
      </ section>
    </div >
  )
}
