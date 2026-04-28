import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { YouTubeIcon } from './ui/Icons';

const YOUTUBE_VIDEOS = [
  { title: 'The AWS Developer Toolbox: Your Ultimate Cloud Companion', id: 'vlbSit2Keao' },
  { title: 'Your Cloud Bill is burning money, here is why', id: 'pKbv21MHRd0' },
  { title: 'Decentralised Authentication with AWS Cognito', id: 'wnGywzFIN0k' },
];

const YouTube: React.FC = () => {
  return (
    <section id="youtube" className="py-16 md:py-24">
      <SectionTitle title="Videos" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {YOUTUBE_VIDEOS.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-surface-raised border border-gray-700/50 rounded-lg overflow-hidden hover:border-teal-500/50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            <div className="relative aspect-video bg-surface-sunken">
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                width={480}
                height={360}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-primary/30 group-hover:bg-ink-primary/10 transition-colors duration-200 flex items-center justify-center">
                <div className="w-12 h-12 text-white opacity-90">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-medium text-sm text-ink-primary group-hover:text-teal-400 transition-colors leading-snug">
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
