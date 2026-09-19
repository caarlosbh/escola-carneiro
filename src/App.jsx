import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import MethodologySection from './components/MethodologySection';
import GallerySection from './components/GallerySection';
import UnitsSection from './components/UnitsSection';
import FranchiseSection from './components/FranchiseSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FranchiseModal from './components/FranchiseModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingCourse, setBookingCourse] = useState('Pintura a Óleo');
  const [bookingUnitId, setBookingUnitId] = useState('moema');
  const [franchiseOpen, setFranchiseOpen] = useState(false);
  const [highlightedUnit, setHighlightedUnit] = useState(null);

  const handleOpenBooking = (courseName, unitId) => {
    if (courseName) setBookingCourse(courseName);
    if (unitId) setBookingUnitId(unitId);
    setBookingOpen(true);
  };

  const handleSelectUnitFromNav = (unitId) => {
    setHighlightedUnit(unitId);
    setTimeout(() => {
      setHighlightedUnit(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141316] selection:bg-[#A84826] selection:text-white relative">
      
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onSelectUnit={handleSelectUnitFromNav}
      />

      {/* Main Experience Flow */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <CoursesSection onOpenBooking={(course) => handleOpenBooking(course)} />
        <VideoShowcaseSection onOpenBooking={() => handleOpenBooking()} />
        <MethodologySection />
        <GallerySection />
        <UnitsSection
          onOpenBooking={(course, unitId) => handleOpenBooking(course, unitId)}
          selectedUnitId={highlightedUnit}
        />
        <FranchiseSection onOpenFranchiseModal={() => setFranchiseOpen(true)} />
        <TestimonialsSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals & Floating Widgets */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultCourse={bookingCourse}
        defaultUnitId={bookingUnitId}
      />

      <FranchiseModal
        isOpen={franchiseOpen}
        onClose={() => setFranchiseOpen(false)}
      />

      <FloatingWhatsApp />

    </div>
  );
}
