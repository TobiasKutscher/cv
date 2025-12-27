"use client";

import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from "../components/ui/badge";
import { Card, CardHeader } from "../components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';


const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    period,
    description,
  }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
  
    const handleClick = (e) => {
      if (description) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
      }
    };
  
    return (
      <Card className="px-4 md:px-8 py-4 md:py-6 group relative overflow-hidden transition-all shadow-sm hover:shadow-lg">
        <Link href={href || '#'} onClick={handleClick}>
          <CardHeader>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
                <Image
                  src={logoUrl}
                  alt={altText}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-black text-base md:text-lg">{title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{subtitle}</p>
                <p className="text-gray-600 text-xs md:text-sm">{period}</p>
                {badges && (
                  <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                    {badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs text-gray-700 px-2 py-1">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "h-5 w-5 text-gray-600 transition-all",
                    isExpanded && "rotate-90"
                  )}
                />
              )}
            </div>
          </CardHeader>
        </Link>
        {description && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 md:pt-4 px-4 md:px-8">
              <p className="text-gray-700 text-sm md:text-base">{description}</p>
            </div>
          </motion.div>
        )}
      </Card>
    );
  };

ResumeCard.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  href: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
  period: PropTypes.string.isRequired,
  description: PropTypes.string,
};
const workExperiences = [
  {
    logoUrl: '/bfi_wien_logo.jpg',
    altText: 'BFI Wien logo',
    title: 'AI Trainer (AI Agents & Vibe Coding)',
    subtitle: 'BFI Wien',
    href: 'https://www.bfi.wien',
    badges: [
      'AI Agents',
      'Vibe Coding',
      'No-Code / Low-Code',
      'Process Automation',
      'E-Learning',
    ],
    period: '2024 – Present',
    description:
      'Lead instructor and course author for applied AI programs at BFI Wien. Responsible for curriculum design, content development, and delivery of E-Learning courses on AI Agents and Vibe Coding, enabling professionals to build automated workflows and software solutions without traditional programming.',
  },
  {
    logoUrl: '/bytebakery.jpg',
    altText: 'ByteBakery UG logo',
    title: 'Co-Founder',
    subtitle: 'ByteBakery UG (haftungsbeschränkt)',
    href: 'https://schenkwerk.com',
    badges: [
      'FastAPI',
      'Angular',
      'Stripe',
      'AWS',
      'SaaS',
      'Product Development',
    ],
    period: 'Jun 2023 – Present',
    description:
      'Building digital SaaS products including 🎁 Schenkwerk (voucher infrastructure for restaurants and retailers) and 👨🏻‍💻 IndieJobs (job intelligence platform). Responsible for product design, backend architecture, and go-to-market strategy.',
  },
  {
    logoUrl: '/boehringer.jpg',
    altText: 'Boehringer Ingelheim logo',
    title: 'Senior Data Scientist',
    subtitle: 'Boehringer Ingelheim',
    href: 'https://www.boehringer-ingelheim.com',
    badges: [
      'Python',
      'Azure',
      'Machine Learning',
      'RAG',
      'Vector Search',
      'Data Strategy',
    ],
    period: 'Jun 2022 – Present',
    description:
      'Leading Data Scientist for the biopharma unit in Vienna. Responsible for ideation, planning, and implementation of AI & ML use cases, including predictive analytics, internal AI tools for 3,000+ users, and company-wide digitalization initiatives.',
  },
  {
    logoUrl: '/boehringer.jpg',
    altText: 'Boehringer Ingelheim logo',
    title: 'Data Scientist',
    subtitle: 'Boehringer Ingelheim',
    href: 'https://www.boehringer-ingelheim.com',
    badges: [
      'Python',
      'Data Engineering',
      'Predictive Analytics',
      'Visualization',
    ],
    period: 'May 2021 – Jun 2022',
    description:
      'Led data science activities for the large-scale cell culture production facility in Vienna. Developed predictive maintenance use cases, data visualizations, and integrated multiple real-time and batch data sources into an analytics data warehouse.',
  },
  {
    logoUrl: '/universitatsklinikummunster.svg',
    altText: 'Universitätsklinikum Münster logo',
    title: 'Research Assistant (Deep Learning for Computer Vision)',
    subtitle: 'University Hospital Münster, Biomedical Technology Center',
    href: 'https://www.ukm.de',
    badges: [
      'Python',
      'PyTorch',
      'Computer Vision',
      'Deep Learning',
      'Mask R-CNN',
    ],
    period: 'Sep 2020 – May 2021',
    description:
      'Conducted research on automated detection of macrophages in quantitative phase images using Mask R-CNN. Published results in peer-reviewed journals and contributed to advances in bioimage analytics and digital holographic microscopy.',
  },
  {
    logoUrl: '/westphaliadatalab.png',
    altText: 'Westphalia DataLab logo',
    title: 'Data Scientist',
    subtitle: 'Westphalia DataLab GmbH',
    href: 'https://www.westphalia-datalab.com',
    badges: [
      'Python',
      'Machine Learning',
      'NLP',
      'Forecasting',
      'Web Crawling',
    ],
    period: 'Jan 2018 – Dec 2018',
    description:
      'Developed predictive maintenance, fraud detection, and forecasting models. Built text-mining pipelines to classify sales activities and predict acquisition probabilities. Automated model evaluation and data crawling workflows.',
  },
  {
    logoUrl: '/westphaliadatalab.png',
    altText: 'Westphalia DataLab logo',
    title: 'Data Analyst Intern',
    subtitle: 'Westphalia DataLab GmbH',
    href: 'https://www.westphalia-datalab.com',
    badges: ['SQL', 'Data Visualization', 'Churn Prediction'],
    period: 'Oct 2017 – Dec 2017',
    description:
      'Supported database administration, data visualization, and customer churn prediction projects, helping to design analytical dashboards for clients.',
  },
  {
    logoUrl: '/fiege.png',
    altText: 'Fiege Logistik logo',
    title: 'Data Analyst Intern',
    subtitle: 'Fiege Logistik',
    href: 'https://www.fiege.com',
    badges: ['SQL', 'Data Analysis', 'Logistics', 'Visualization'],
    period: 'Jul 2017 – Sep 2017',
    description:
      'Conducted data analysis and process optimization for logistics operations, contributing to reporting and KPI automation.',
  },
];

const eduExperiences = [
  {
    logoUrl: '/universidade-nova-de-lisboa-806.png',
    altText: 'Universidade NOVA de Lisboa logo',
    title: 'M.Sc. Data Science and Advanced Analytics',
    subtitle:
      'Information Management School (IMS), Universidade NOVA de Lisboa',
    href: 'https://www.novaims.unl.pt/',
    badges: ['Deep Learning', 'Computer Vision', 'Data Science', 'Research'],
    period: 'Sep 2019 – May 2021',
    description:
      'Master Thesis: "Detection and segmentation of macrophages in quantitative phase images by deep learning using a Mask Region-based Convolutional Neural Network". Graduated with a final grade of 18.175/20 (equivalent to 1.0 in the German grading system).',
  },
  {
    logoUrl: '/fhmunster.png',
    altText: 'Fachhochschule Münster logo',
    title: 'B.A. Business Administration (Integrated Internship Semester)',
    subtitle: 'Fachhochschule Münster – University of Applied Sciences',
    href: 'https://www.fh-muenster.de/',
    badges: [
      'Business Processes',
      'Project Management',
      'Finance',
      'Quantitative Analysis',
    ],
    period: 'Sep 2014 – Jul 2018',
    description:
      'Bachelor Thesis: "Text Mining Analysen zur Bewertung von Akquisepotenzialen – Eine theoretische Grundlage". Focus areas: Business Processes, Project Management, Finance, and Quantitative Methods. Final grade: 1.8.',
  },
  {
    logoUrl: '/hanzeuni.jpg',
    altText: 'Hanze University of Applied Sciences logo',
    title: 'International Business Administration (Exchange Semester)',
    subtitle: 'Hanze University of Applied Sciences, Groningen',
    href: 'https://www.hanze.nl/eng',
    badges: [
      'International Marketing',
      'Strategic Management',
      'Intercultural Management',
    ],
    period: '2016 – 2017',
    description:
      'Exchange semester focused on International Marketing, Strategic Management, and Intercultural Business Administration as part of the bachelor program.',
  },
];

export default function CV() {
  return (
    <div className="mx-auto">
      <h2 className="mb-8 text-4xl font-bold">📝 CV</h2>
      <h3 className="mb-8 text2xl font-bold">🧑‍💻 Work Experience</h3>
      <div className="mb-8 text-base space-y-6">
        {workExperiences.map((experience, index) => (
          <ResumeCard key={index} {...experience} />
        ))}
      </div>
      <h3 className="mb-8 text-2xl font-bold">👨‍🎓 Education</h3>
      <div className="mb-8 text-base space-y-6">
        {eduExperiences.map((experience, index) => (
          <ResumeCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}
