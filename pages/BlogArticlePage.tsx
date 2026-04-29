import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Check, Clock, Copy, Link as LinkIcon } from 'lucide-react';
import Button from '../components/Button';
import {
  blogAuthors,
  BLOG_BASE_URL,
  getBlogPostBySlug,
  getBlogPostUrl,
  getPostWordCount,
} from '../data/blog';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));

const slugifyHeading = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const ArticleVisual: React.FC<{ label: string; alt?: string; src?: string }> = ({ label, alt, src }) => (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ebox-dark via-ebox-deep to-ebox-forest">
    {src ? (
      <img src={src} alt={alt ?? label} className="min-h-[320px] w-full object-cover" />
    ) : (
      <>
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ebox-lime/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-ebox-teal/20 blur-3xl" />
        <div className="relative min-h-[320px] p-8 md:p-10 text-white flex flex-col justify-between">
          <span className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-ebox-lime">
            {label}
          </span>
          <div className="max-w-md space-y-4">
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="rounded-xl border border-white/15 bg-white/10 p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-ebox-lime text-sm font-bold text-ebox-dark">
                    {step}
                  </div>
                  <div className="h-2 rounded-full bg-white/40" />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <div className="mb-3 h-2 w-32 rounded-full bg-ebox-lime" />
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-white/35" />
                <div className="h-2 w-3/4 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.99h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.03H3.54V8.99H7.1v11.46ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
  </svg>
);

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };

    updateReadingProgress();
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    window.addEventListener('resize', updateReadingProgress);

    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
      window.removeEventListener('resize', updateReadingProgress);
    };
  }, [slug]);

  const shareUrl = post ? getBlogPostUrl(post) : BLOG_BASE_URL;
  const encodedUrl = encodeURIComponent(shareUrl);
  const imageUrl = post?.featuredImage?.src
    ? `https://www.eboxsoftware.com${post.featuredImage.src}`
    : 'https://www.eboxsoftware.com/images/ebox-logo.svg';

  const schema = useMemo(() => {
    if (!post) return null;

    const author = blogAuthors[post.authorId];

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          image: imageUrl,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          wordCount: getPostWordCount(post),
          mainEntityOfPage: shareUrl,
          author: {
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
            description: author.profile,
            image: `https://www.eboxsoftware.com${author.avatarImage}`,
            sameAs: [author.linkedinUrl],
          },
          publisher: {
            '@type': 'Organization',
            name: 'eBox Software',
            url: 'https://www.eboxsoftware.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.eboxsoftware.com/images/ebox-logo.svg',
            },
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.eboxsoftware.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: BLOG_BASE_URL,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: post.title,
              item: shareUrl,
            },
          ],
        },
      ],
    };
  }, [post, shareUrl, imageUrl]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const author = blogAuthors[post.authorId];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="fixed left-0 top-0 z-[60] h-1 bg-ebox-lime transition-all" style={{ width: `${readingProgress}%` }} />
      <Helmet>
        <title>{post.title} | eBox Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={shareUrl} />
        <meta property="og:title" content={`${post.title} | eBox Blog`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:author" content={author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | eBox Blog`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={imageUrl} />
        {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      </Helmet>

      <article>
        <header className="bg-gradient-to-br from-ebox-dark to-ebox-deep py-16 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ebox-lime hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <div className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.datePublished)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readMinutes} min read
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">{post.title}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">{post.description}</p>
            </div>
          </div>
        </header>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {post.featuredImage && (
              <ArticleVisual label={post.featuredImage.label} alt={post.featuredImage.alt} src={post.featuredImage.src} />
            )}
          </div>
        </section>

        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <img
                    src={author.avatarImage}
                    alt={author.name}
                    className="mb-4 h-14 w-14 rounded-full object-cover ring-2 ring-ebox-lime/30"
                  />
                  <p className="font-bold text-ebox-dark">{author.name}</p>
                  <p className="mt-1 text-sm font-medium text-ebox-forest">{author.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{author.profile}</p>
                  <a
                    href={author.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-ebox-forest hover:text-ebox-forest"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">Share Article</p>
                  <div className="space-y-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center justify-between rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-ebox-forest hover:text-ebox-forest"
                    >
                      LinkedIn
                      <LinkIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center justify-between rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-ebox-forest hover:text-ebox-forest"
                    >
                      Facebook
                      <LinkIcon className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="flex w-full cursor-pointer items-center justify-between rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-ebox-forest hover:text-ebox-forest"
                    >
                      {copied ? 'Copied' : 'Copy link'}
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </aside>

              <div className="min-w-0">
                <div className="max-w-none">
                  {post.body.map((block, index) => {
                    if (block.type === 'h2') {
                      return (
                        <h2
                          key={`${block.type}-${index}`}
                          id={slugifyHeading(block.text)}
                          className="mt-12 scroll-mt-28 text-3xl font-bold tracking-tight text-ebox-dark"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === 'h3') {
                      return (
                        <h3 key={`${block.type}-${index}`} className="mt-8 text-2xl font-bold text-ebox-dark">
                          {block.text}
                        </h3>
                      );
                    }

                    if (block.type === 'note') {
                      return (
                        <div
                          key={`${block.type}-${index}`}
                          className="mt-10 rounded-2xl border-l-4 border-ebox-lime bg-ebox-deep/5 p-6 text-base font-medium leading-relaxed text-ebox-dark"
                        >
                          {block.text}
                        </div>
                      );
                    }

                    return (
                      <p key={`${block.type}-${index}`} className="mt-6 text-lg leading-8 text-gray-700">
                        {block.text}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-14 rounded-3xl bg-ebox-dark p-8 text-white md:p-10">
                  <h2 className="text-3xl font-bold">Want to see this workflow in eForms?</h2>
                  <p className="mt-4 max-w-2xl text-gray-300">
                    Book a short walkthrough and see how structured forms, approval routing, validation, and
                    direct MRI import can work for your portfolio.
                  </p>
                  <div className="mt-6">
                    <Button to="/book-demo" variant="primary">
                      Book a Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogArticlePage;
