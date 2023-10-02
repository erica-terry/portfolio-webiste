'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import ResumeBlock from './ui/resume-block'

export default function Resume() {

  const resume = [
    {
      position: "Software Developer",
      employer: "Olympusat",
      list: [
        "Developed APIs for streaming services with AWS API Gateway and Lambda functions, and deployed with the AWS CDK using TypeScript and Node.js",
        "Collaborated with the development team to maintain an API using the Phalcon PHP Framework to retrieve and update data from a MySQL database, allowing integration with smart TV and mobile clients",
        "Incorporated Elastic stack to extract and analyze data from Apache logs, enabling real-time monitoring, log aggregation, and log parsing for business analytics and insights",
        "Created a user-friendly web portal using React, enabling employees to access and download legal documents",
        "Generated MRSS feeds with PHP, allowing content to be searchable across multiple streaming platforms"
      ],
      startDate: Date,
      endDate: Date,
      city: "West Palm Beach",
      state: "FL",
      tags: [{
        text: "AWS",
        link: false
      } as Tag,
      {
        text: "React",
        link: false
      } as Tag],
      image: "/images/resume-featured-1.png"
    } as unknown as ResumeItem
  ]

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative" id="resume">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore my Resume</h1>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-10 lg:col-span-8 md:mt-6" data-aos="fade-right">
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 hover:cursor-pointer ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`} onClick={(e) => { e.preventDefault(); setTab(1); }}>
                  {resume.map((item, k) => {
                    return (<ResumeBlock key={k.toString()} resumeItem={item} tab={tab} setTab={setTab} />)
                  })}
                </div>
              </div>
            </div>
            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-2 lg:col-span-4 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>{resume.map((item, k) => (
                  <Transition
                    show={tab === k + 1}
                    key={k.toString()}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      {item.image &&
                        (<Image className="md:max-w-none mx-auto rounded" src={item.image} width={500} height="462" alt="Features bg" />)
                      }
                    </div>
                  </Transition>)
                )}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}