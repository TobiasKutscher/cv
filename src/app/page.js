"use client";

import React from 'react';
import Profile from '../components/Profile';
import SideHustles from '../components/SideHustles';
import Publications from '../components/Publications';
import CV from '../components/CV';
import UnblurEffect from '../components/UnblurEffect';
import ContactCTA from '../components/CTA';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-10 sm:px-10 lg:px-12 py-16">
      <div className="space-y-16">
        <UnblurEffect delay={200}>
          <div className="profile">
            <Profile />
          </div>
        </UnblurEffect>

        <UnblurEffect delay={400}>
          <div className="side-hustles">
            <SideHustles />
          </div>
        </UnblurEffect>

        <UnblurEffect delay={600}>
          <div className="publications">
            <Publications />
          </div>
        </UnblurEffect>

        <UnblurEffect delay={800}>
          <div className="cv">
            <CV />
          </div>
        </UnblurEffect>

        <UnblurEffect delay={1000}>
          <div className="contact">
            <ContactCTA />
          </div>
        </UnblurEffect>
      </div>
    </main>
  );
}