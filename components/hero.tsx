import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Social from './ui/socials'

export default function Hero() {
  return (
    <section className="relative" id="hero">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        {/* TODO put image here */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="h1" data-aos="zoom-y-out">Hi there!</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">My name is Erica Terry. I am a software engineer based out of South Florida with extensive experience in AWS cloud services and a strong full-stack development background.  </p>
              <div className="mx-auto max-w-none flex justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}