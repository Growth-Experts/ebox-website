import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogAuthors, blogPosts, featuredPost, getBlogPostUrl } from '../data/blog';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));

const BlogVisual: React.FC<{ label: string; alt?: string; src?: string; className?: string }> = ({ label, alt, src, className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-ebox-dark via-ebox-deep to-ebox-forest ${className}`}>
    {src ? (
      <img src={src} alt={alt ?? label} className="h-full min-h-[260px] w-full object-cover" />
    ) : (
      <>
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ebox-lime/20 blur-2xl" />
        <div className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-ebox-teal/20 blur-2xl" />
        <div className="relative flex h-full min-h-[260px] flex-col justify-between p-8 text-white">
          <span className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-ebox-lime">
            {label}
          </span>
          <div className="space-y-3">
            <div className="h-2 w-28 rounded-full bg-ebox-lime" />
            <div className="h-2 w-44 rounded-full bg-white/40" />
            <div className="h-2 w-36 rounded-full bg-white/25" />
          </div>
        </div>
      </>
    )}
  </div>
);

const BlogCard: React.FC<{ post: (typeof blogPosts)[number] }> = ({ post }) => {
  const author = blogAuthors[post.authorId];
  const postPath = `/blog/${post.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link to={postPath} aria-label={`Read ${post.title}`} className="block focus:outline-none focus:ring-2 focus:ring-ebox-lime focus:ring-offset-2">
        {post.featuredImage ? (
          <BlogVisual
            label={post.featuredImage.label}
            alt={post.featuredImage.alt}
            src={post.featuredImage.src}
            className="min-h-[210px] rounded-none"
          />
        ) : (
          <div className="flex min-h-[210px] items-center justify-center bg-ebox-deep/5 p-8 transition-colors group-hover:bg-ebox-deep/10">
            <div className="rounded-full border border-ebox-forest/10 bg-white px-5 py-2 text-sm font-semibold text-ebox-forest">
              eBox Insights
            </div>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-500">
          <span>{post.readMinutes} min read</span>
        </div>
        <h2 className="text-2xl font-bold leading-tight text-ebox-dark group-hover:text-ebox-forest">
          <Link to={postPath}>{post.title}</Link>
        </h2>
        <p className="mt-4 flex-1 text-gray-600 leading-relaxed">{post.description}</p>
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
          <div>
            <p className="text-sm font-semibold text-ebox-dark">{author.name}</p>
            <p className="text-sm text-gray-500">{formatDate(post.datePublished)}</p>
          </div>
          <Link
            to={postPath}
            className="inline-flex items-center gap-2 text-sm font-bold text-ebox-forest transition-colors hover:text-ebox-dark"
            aria-label={`Read article: ${post.title}`}
          >
            Read article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const BlogLanding: React.FC = () => {
  const otherPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);
  const featuredAuthor = blogAuthors[featuredPost.authorId];
  const pageDescription =
    'Practical guides for MRI-based real estate teams on eForms, approval workflows, data imports, audit trails, and property operations.';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        name: 'eBox Blog',
        url: 'https://www.eboxsoftware.com/blog',
        description: pageDescription,
        publisher: {
          '@type': 'Organization',
          name: 'eBox Software',
          url: 'https://www.eboxsoftware.com',
          logo: 'https://www.eboxsoftware.com/images/ebox-logo.svg',
        },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: getBlogPostUrl(post),
          datePublished: post.datePublished,
          author: {
            '@type': 'Person',
            name: blogAuthors[post.authorId].name,
          },
        })),
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
            item: 'https://www.eboxsoftware.com/blog',
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <Helmet>
        <title>eBox Blog | MRI Workflow Guides for Real Estate Teams</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.eboxsoftware.com/blog" />
        <meta property="og:title" content="eBox Blog | MRI Workflow Guides for Real Estate Teams" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.eboxsoftware.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.eboxsoftware.com/images/ebox-logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="eBox Blog | MRI Workflow Guides for Real Estate Teams" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.eboxsoftware.com/images/ebox-logo.svg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-gradient-to-br from-ebox-dark to-ebox-deep py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-ebox-lime/20 bg-ebox-lime/15 px-4 py-1.5 text-sm font-semibold text-ebox-lime">
              eBox Insights
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Articles and insights from the eBox team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">
              Practical thinking from eBox on workflows, data imports, approvals, and the operational details behind better real estate software.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="group grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2">
            <Link
              to={`/blog/${featuredPost.slug}`}
              aria-label={`Read featured article: ${featuredPost.title}`}
              className="block focus:outline-none focus:ring-2 focus:ring-ebox-lime focus:ring-offset-2"
            >
              <BlogVisual
                label={featuredPost.featuredImage?.label ?? 'Featured guide'}
                alt={featuredPost.featuredImage?.alt}
                src={featuredPost.featuredImage?.src}
                className="h-full rounded-none"
              />
            </Link>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featuredPost.datePublished)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readMinutes} min read
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-ebox-dark">
                <Link to={`/blog/${featuredPost.slug}`} className="transition-colors group-hover:text-ebox-forest">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{featuredPost.description}</p>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ebox-lime px-6 py-3 font-bold text-ebox-dark transition-all hover:brightness-95 hover:shadow-md"
              >
                Read featured article
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={featuredAuthor.avatarImage}
                  alt={featuredAuthor.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-ebox-lime/30"
                />
                <div>
                  <p className="font-semibold text-ebox-dark">{featuredAuthor.name}</p>
                  <p className="text-sm text-gray-500">{featuredAuthor.role}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-ebox-dark">More from the blog</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogLanding;
