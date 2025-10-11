import React, { useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import { YOUTUBE_VIDEOS } from '../constants';
import { YouTubeIcon } from './ui/Icons';
import useOnScreen from '../hooks/useOnScreen';

const YouTube: React.FC = () => {
  const featuredVideo = YOUTUBE_VIDEOS[0];
  const otherVideos = YOUTUBE_VIDEOS.slice(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="youtube" ref={sectionRef} className="py-16 md:py-24">
       <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         <SectionTitle title="[ Data Stream // YouTube ]" />
       </div>
      <div className="mt-12">
        {featuredVideo && (
          <div 
            className={`mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="text-xl text-cyan-400 mb-4">// Featured Video</h3>
            <div className="max-w-2xl mx-auto">
              <Card>
                <a href={`https://www.youtube.com/watch?v=${featuredVideo.id}`} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="relative">
                    <img 
                      src={`https://i.ytimg.com/vi/${featuredVideo.id}/hqdefault.jpg`}
                      alt={featuredVideo.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transform transition-all">
                        <YouTubeIcon />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-[#0d1421]">
                    <h4 className="text-base font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">{featuredVideo.title}</h4>
                  </div>
                </a>
              </Card>
            </div>
          </div>
        )}

        {otherVideos.length > 0 && (
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl text-cyan-400 mb-4">// More Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherVideos.map((video, index) => (
                <div 
                  key={video.id}
                  className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${isVisible ? 400 + index * 150 : 0}ms` }}
                >
                  <Card>
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 group">
                      <img 
                        src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                        alt={video.title}
                        className="w-20 h-auto object-cover flex-shrink-0"
                      />
                      <h4 className="font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors">{video.title}</h4>
                    </a>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`text-center mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '500ms' }}>
          <a 
            href="https://www.youtube.com"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Visit Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
