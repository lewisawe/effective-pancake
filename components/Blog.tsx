import React, { useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import Tag from './ui/Tag';
import { BLOG_POSTS } from '../constants';
import { ExternalLinkIcon } from './ui/Icons';
import useOnScreen from '../hooks/useOnScreen';

const Blog: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="blog" ref={sectionRef} className="py-16 md:py-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="[ Knowledge Base // Blog ]" />
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <div
            key={post.title}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
          >
            <Card>
              <div className="p-6 h-full flex flex-col group">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                  <h3 className="text-xl font-bold text-cyan-400">{post.title}</h3>
                </div>
                <p className="text-gray-400 flex-grow">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-6 text-cyan-400 flex items-center gap-2 self-start font-semibold">
                  Read More <ExternalLinkIcon />
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
       <div 
        className={`text-center mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '300ms' }}
       >
          <a 
            href="#"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            View All Posts
          </a>
        </div>
    </section>
  );
};

export default Blog;
