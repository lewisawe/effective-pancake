import React from 'react';
import SectionTitle from './ui/SectionTitle';

const BLOG_POSTS = [
  {
    title: 'What Happens When You Red-Team Your Own Agent',
    url: 'https://lewisawe.hashnode.dev/what-happens-when-you-red-team-your-own-agent',
    source: 'Hashnode',
    tags: ['Security', 'AI'],
  },
  {
    title: 'Building Multi-Agent AWS Operations Intelligence with Amazon Bedrock AgentCore',
    url: 'https://dev.to/lewisawe',
    source: 'dev.to',
    tags: ['AWS', 'AI', 'Bedrock'],
  },
  {
    title: 'Creating a Flood Awareness PSA with AWS Nova Canvas',
    url: 'https://lewisawe.hashnode.dev/creating-a-flood-awareness-psa-with-aws-nova-canvas',
    source: 'Hashnode',
    tags: ['AWS', 'AI', 'Social Impact'],
  },
  {
    title: 'Common Pitfalls That Can Make Your AWS Cloud Bill Balloon',
    url: 'https://dev.to/lewisawe',
    source: 'dev.to',
    tags: ['AWS', 'Cost Optimization', 'FinOps'],
  },
  {
    title: 'I Built "Hackerman" with Amazon Q',
    url: 'https://dev.to/aws-builders/i-built-hackerman-with-amazon-q-29jn',
    source: 'dev.to',
    tags: ['AWS', 'Amazon Q', 'AI'],
  },
  {
    title: 'Juicy Details: THM Challenge Room Walkthrough',
    url: 'https://lewisawe.hashnode.dev/juicy-details-thm-challenge-room-walkthrough',
    source: 'Hashnode',
    tags: ['Security', 'TryHackMe'],
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <SectionTitle title="Writing" />
      <p className="mt-4 text-sm text-ink-muted">
        Articles on{' '}
        <a href="https://dev.to/lewisawe" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded">dev.to</a>
        {' '}and{' '}
        <a href="https://lewisawe.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded">Hashnode</a>.
      </p>
      <div className="mt-8 space-y-4">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-3 border-b border-gray-700/30 hover:border-teal-500/40 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded"
          >
            <div className="min-w-0">
              <h3 className="font-display font-medium text-ink-primary group-hover:text-teal-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-ink-muted bg-surface-sunken px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-xs text-ink-faint shrink-0 mt-1 hidden sm:block">{post.source}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
