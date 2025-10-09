"use client";

import React from 'react';
import Publications from '../../components/Publications';
import UnblurEffect from '../../components/UnblurEffect';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Home as HomeIcon } from 'lucide-react';

export default function PublicationsPage() {
  return (
    <main className="max-w-4xl mx-auto px-10 sm:px-10 lg:px-12 py-16">
      <div className="flex-1 flex justify-end">
        <Link href="/">
          <Button variant="outline" size="lg">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back to Main Page
          </Button>
        </Link>
      </div>
      <div className="space-y-16">
        <UnblurEffect delay={600}>
          <div className="publications">
            <Publications />
          </div>
        </UnblurEffect>
      </div>
    </main>
  );
}