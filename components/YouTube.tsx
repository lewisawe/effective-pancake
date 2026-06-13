import React from 'react';
import SectionTitle from './ui/SectionTitle';

const YOUTUBE_VIDEOS = [
  { title: 'The AWS Developer Toolbox: Your Ultimate Cloud Companion', id: 'vlbSit2Keao' },
  { title: 'Your Cloud Bill is burning money, here is why', id: 'pKbv21MHRd0' },
  { title: 'Decentralised Authentication with AWS Cognito', id: 'wnGywzFIN0k' },
];

const YouTube: React.FC = () => {
  return (
    <section id="youtube" className="py-20 md:py-32">
      <SectionTitle title="Videos" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {YOUTUBE_VIDEOS.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-graphite/60 rounded-card overflow-hidden hover:border-iris/40 transition-colors duration-200"
          >
            <div className="relative aspect-video bg-graphite/20">
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                width={480}
                height={360}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-iris group-hover:bg-iris/10 transition-all">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-bone-white ml-0.5">
                    <path d="M4 2l10 6-10 6V2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-sans font-medium text-sm text-bone-white group-hover:text-iris transition-colors leading-snug">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default YouTube;
