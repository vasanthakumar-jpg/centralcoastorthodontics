import { useState } from "react";

export const Buttons = () => {
    const [activeTab, setActiveTab] = useState('kids');
      const tabs = [
          {
            id: 'kids',
            label: 'KIDS',
            title: 'Orthodontics For Kids',
            content: 'Early treatment is key! We recommend bringing your child in for their first orthodontic check-up by age 7. This allows us to identify and address potential issues early.'
          },
          {
            id: 'teens',
            label: 'TEENS',
            title: 'Orthodontics For Teens',
            content: 'Teens have all the fun! And by fun, we mean treatment options. Every type of treatment option we offer at Mint Orthodontics is on the table for teens. It all depends on needs, lifestyle, and expectations.'
          },
          {
            id: 'college',
            label: 'OFF TO COLLEGE',
            title: 'Off to College',
            content: "Heading to college doesn't mean your treatment has to stop. We offer flexible scheduling and remote monitoring options for our college students."
          },
          {
            id: 'married',
            label: 'GETTING MARRIED',
            title: 'Getting Married',
            content: 'Want the perfect smile for your big day? We offer specialized treatment plans to help you achieve your dream smile before your wedding day.'
          },
          {
            id: 'adult',
            label: 'ADULTS',
            title: 'Orthodontics For Adults',
            content: 'Adults have all the fun! And by fun, we mean treatment options. Every type of treatment option we offer at Mint Orthodontics is on the table for adults. It all depends on needs, lifestyle, and expectations.'
          },
          {
            id: 'Retirement',
            label: 'RETIREMENT',
            title: 'Retirement',
            content: 'Retirement is a time to relax and enjoy life. And by enjoy, we mean treatment options. Every type of treatment option we offer at Mint Orthodontics is on the table for retirement.'
          }
        ];
      return <>
          <div className=" mx-auto font-sans">
          <div className="flex mx-4 my-4
          2xs:flex-col 
          xs:flex-col
          base:flex-col
          sm:flex-col
          md:flex-col
  
            lg:justify-center gap-0.5 lg:flex-row">
              {tabs.map((tab) => (
              <div key={tab.id} className=''>
                  <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center w-full cursor-pointer 
                      text-base font-medium transition-all duration-300 text-white  border-2 border-white
                      sm:py-2 sm:text-xs lg:px-[55px] lg:py-4
                      ${activeTab === tab.id ? 'bg-mintGreen' : 'bg-yellowStar hover:opacity-90'}`}
                  >
                  {tab.label}
                  </button>
                  
                  {activeTab === tab.id && (
                  <div className="lg:absolute left-0 rounded  w-full my-6">
                      <h2 className="text-2xl text-gray-800 mb-4 lg:mx-6">{tab.title}</h2>
                      <p className="text-gray-600 leading-relaxed lg:mx-6">{tab.content}</p>
                  </div>
                  )}
              </div>
              ))}
          </div>
          </div> 
      </>
  }