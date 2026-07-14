import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const MriAscendThankYou: React.FC = () => {
  const location = useLocation();
  const firstName = (location.state as { firstName?: string })?.firstName ?? '';

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Thanks! | eBox at MRI Ascend APAC 2026</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.eboxsoftware.com/mriascend/thank-you" />
      </Helmet>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-ebox-lime/20 p-4 rounded-full">
              <CheckCircle className="w-12 h-12 text-ebox-forest" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-ebox-dark mb-4 text-balance">
            {firstName ? `You're in, ${firstName}!` : "You're in!"}
          </h1>

          <p className="text-lg text-gray-600 mb-4 max-w-lg mx-auto text-pretty">
            You've been entered into the draw and we've got your details. The eBox team will be in
            touch after the show.
          </p>

          <p className="text-gray-500 mb-10">We've also sent a confirmation to your email.</p>

          <Button to="/" variant="primary" size="lg">
            See more about eBox
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MriAscendThankYou;
