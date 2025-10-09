import Image from 'next/image'
import CoolCTAButton from '../components/CoolCTAButton'

export default function Profile() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between mx-auto pt-4 px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
        <div className='text-3xl md:text-5xl my-4 md:my-6 text-center md:text-left'>
          <h1>Hi, I'm Tobias <span className="inline-block animate-wave">👋</span></h1>
        </div>
        <div className='text-lg md:text-xl py-2 md:py-4 text-center md:text-left'>
        <p>
            I am a Senior Data Scientist @ Boehringer Ingelheim and <br />
            Co-Founder of the software company ByteBakery UG (haftungsbeschränkt) <br />
            I currently live in Vienna, Austria 🇦🇹
        </p>
        </div>
        <div className="mt-4">
         <CoolCTAButton />
        </div>
      </div>

      <div className="flex-shrink-0 mb-6 md:mb-0">
        <Image 
          src="/tobiaskutscher.jpg" 
          alt="Tobias Kutscher" 
          width={250} 
          height={250} 
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  )
}