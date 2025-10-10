// components/Publications.js
import { FileText, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const publications = [
  {
    title: "Driving Operational Excellence using Machine Learning",
    subtitle: "Utilizing data science for fast detection of influencing factors in biopharmaceutical manufacturing – a case study",
    venue: "Boehringer Ingelheim BioXcellence",
    date: "12. Dezember 2024",
    location: null,
    type: "Case Study",
    link: "https://www.boehringer-ingelheim.com/partnering/boehringer-ingelheim-bioxcellence/newsroom/biopharma-machine-learning-bioxcellence"
  },
  {
    title: "Automated detection of macrophages in Quantitative Phase Images by Deep Learning using a Mask Region-based Convolutional Neural Network",
    subtitle: null,
    venue: "SPIE Photonics West",
    date: "5. März 2021",
    location: "San Francisco, CA, United States",
    type: "Conference Paper",
    link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11655/116551K/Automated-detection-of-macrophages-in-quantitative-phase-images-by-deep/10.1117/12.2577232.short"
  },
  {
    title: "Cell Detection and Segmentation in Quantitative Digital Holographic Phase Contrast Images Utilizing a Mask Region-based Convolutional Neural Network",
    subtitle: null,
    venue: "OSA - Imaging and Applied Optics Congress",
    date: "21. Juli 2021",
    location: "Washington, DC, United States",
    type: "Conference Paper",
    link: "https://opg.optica.org/abstract.cfm?uri=HISE-2021-JTu5A.23"
  }
]

export default function Publications() {
    return (
      <div className="mx-auto my-auto">
        <h2 className="mb-6 md:mb-8 text-3xl md:text-4xl font-bold">📚 Publications</h2>
        <div className="space-y-4 md:space-y-6">
          {publications.map((publication, index) => (
            <Link 
              key={index} 
              href={publication.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="py-3 md:py-4 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 cursor-pointer hover:border-blue-300">
                <div className="p-4 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <FileText className="text-gray-600 w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-gray-800 text-base md:text-lg font-semibold mb-2 leading-tight hover:text-blue-600 transition-colors">
                          {publication.title}
                        </h3>
                        <ExternalLink className="text-gray-400 w-4 h-4 ml-2 flex-shrink-0" />
                      </div>
                      {publication.subtitle && (
                        <p className="text-gray-700 text-sm md:text-base mb-3 italic">
                          {publication.subtitle}
                        </p>
                      )}
                      <div className="space-y-1 md:space-y-2">
                        <div className="flex items-center text-xs md:text-sm text-gray-600">
                          <FileText className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          <span className="font-medium">{publication.venue}</span>
                        </div>
                        <div className="flex items-center text-xs md:text-sm text-gray-600">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          <span>{publication.date}</span>
                        </div>
                        {publication.location && (
                          <div className="flex items-center text-xs md:text-sm text-gray-600">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            <span>{publication.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-3">
                        <span className="inline-block px-2 md:px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {publication.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
}
