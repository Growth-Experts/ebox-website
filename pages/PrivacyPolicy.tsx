import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Privacy Policy | eBox Software</title>
        <meta name="description" content="eBox Software privacy policy. Learn how we collect, use, and protect your personal information when you use eBox products and our website." />
        <link rel="canonical" href="https://eboxsoftware.com/privacy" />
      </Helmet>

      {/* Header */}
      <section className="bg-ebox-dark text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: 30/06/2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <p className="text-ebox-dark font-semibold">
            This policy applies when you use eBox Software (eboxsoftware.com), including our eForms and eConnect products. eBox is part of Open Box Software, and this policy governs how we handle your data across our websites and services.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Our Commitment to Your Privacy</h2>
          <p>
            Welcome to eBox Software. We value our relationship with you, and protecting your personal
            information is a priority for us. This privacy policy explains how we collect, use, and protect your
            data and outlines your rights. Whether you're a client, a potential candidate for employment or
            part of our team, we believe that understanding your needs, preferences, and expectations is key
            to providing you with the support and service you deserve. Please take a moment to read through
            this document to understand how we handle your information, and if you have any questions,
            don't hesitate to reach out.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Scope</h2>
          <p>
            This policy applies whenever you interact with Open Box Software (including eBox Software) through our
            website (including eboxsoftware.com) or other systems. Whether you're browsing our site, exchanging
            emails, or participating in our services, this policy covers how we handle the data we collect. Our
            policy will be always kept up-to-date and available on our website.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Key Terms</h2>
          <p>To help with understanding key terms used within this policy, here's a quick glossary of our definitions:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Personal Information</strong> means the details that can identify you, such as your name or contact information. It is information relating to an identifiable, natural or juristic person.</li>
            <li><strong>Special Personal Information</strong> means information relating to religious or philosophical beliefs, race or ethnic origin, trade union membership, political opinions, health, sex life, biometric or criminal behaviour, as defined under POPIA.</li>
            <li><strong>"Us", "We", or "Our"</strong> means Open Box Software (Pty) Ltd, a company incorporated in terms of the company laws of the Republic of South Africa with registration number 2003/019617/07 and includes reference to our affiliated companies.</li>
            <li><strong>Financial Information</strong> refers to the details you provide for billing, payment processing, and accounting, such as bank account information, payment history, or billing preferences.</li>
            <li><strong>Processing</strong> means the actions related to your data, like storing, updating, merging, using, or deleting it.</li>
            <li><strong>Cookies</strong> are small files we send to your browser to help improve your experience on our website.</li>
            <li><strong>"You" or "the User" or "client"</strong> means the Data Subject: That's you – the person whose data we're working with.</li>
            <li><strong>Information Officer</strong> means the person appointed by Open Box to act on its behalf in fulfilling responsibilities set out by applicable laws. This role involves managing compliance with data protection regulations and ensuring that the Company handles personal information responsibly.</li>
            <li><strong>Third-Party Processor</strong> means an external party who processes personal information on behalf of Open Box Software, such as cloud service providers or payroll vendors.</li>
          </ul>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">How We Protect Your Information</h2>
          <p>At Open Box Software, we protect the privacy of the personal information you share with us through:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Transparency:</strong> We only use your data for the reasons it was collected, and we'll always ask for your permission if we need to use it for something new.</li>
            <li><strong>Accuracy:</strong> We keep your information up-to-date and accurate as possible but kindly ask you to help maintain your information by sending us any updates as they change.</li>
            <li><strong>Security:</strong> We use both physical and technical measures to keep your data safe, whether it's stored in a file or digitally.</li>
            <li><strong>Lawfully:</strong> Your data will always be handled lawfully and with care and respect. We ensure that all processing activities are aligned with the lawful bases outlined in POPIA, including consent, contractual necessity, legal obligation, and legitimate interest.</li>
          </ul>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">What We Collect and Why</h2>
          <p>To offer you the best possible experience, we collect data in a few ways:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Automatically:</strong> When you visit our website, we collect basic details like the type of browser you're using, the pages you visited, and your IP address. This helps us improve our site and services.</li>
            <li><strong>Personal information:</strong> This includes, but is not limited to, information that could identify you such as:
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>For site visitors, clients and suppliers: Name, contact details and other basic identifiers required to respond to inquiries, manage services or maintain business relationships.</li>
                <li>For candidates and employees: In addition to basic information, this may include sensitive or special category information such as information about your education, health (where required for role suitability or statutory obligations), criminal record (where required for role screening or legal compliance) or work history. We only collect and use such information when necessary for a specific, lawful purpose—for example, when assessing suitability for a role, fulfilling legal or contractual obligations or supporting operational needs. Collection of such information is in line with applicable data protection laws such as POPIA and GDPR.</li>
                <li>Knowing this helps us provide a personalised experience, from managing projects to offering relevant advice and solutions, to ensuring we hire the right individuals into Open Box. We take great care to protect information and use it only to nurture our relationships with you, or to ensure we are working with good people who fit our culture and delivery expectations.</li>
              </ul>
            </li>
            <li>Where we collect special personal information, we only process it with your consent when required for specific, lawful reasons and with the utmost confidentiality and care.</li>
            <li><strong>Additional information we may collect:</strong>
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Your preferences: Details about your service or communication preferences, ensuring our interactions are meaningful and aligned with your needs.</li>
                <li>Opinions: Feedback or assessments about you, collected only when relevant to making decisions about service delivery, role suitability, or other legitimate business interests.</li>
                <li>Private or Confidential Communications: Communications you've shared with us, including any private or confidential details, which are treated with utmost care and used only for the intended purpose of the interaction.</li>
              </ul>
            </li>
            <li><strong>Financial & Company Details:</strong> We may ask for information like your contact details, company info, or financial data (e.g., billing details, payment methods) to process transactions securely and deliver the services you need.</li>
            <li><strong>Operations & Administration:</strong> We may process your data for billing, customer service, or system maintenance purposes. We may also reach out from time to time to ensure your details are up to date.</li>
          </ul>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">How We Use Your Information</h2>
          <p>We use your data in a way that's respectful of your privacy and with clear intentions:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Strengthening Relationships:</strong> Your preferences help us provide personalised solutions, timely updates, and advice tailored to your needs.</li>
            <li><strong>To provide our services:</strong> From fulfilling service requests to processing payments to being your most trusted partner.</li>
            <li><strong>Maintaining Trust:</strong> We ensure that all data, including financial and personal preferences, is handled securely and transparently, building trust with every interaction.</li>
            <li><strong>Improving Experiences:</strong> We analyse feedback and usage data to continuously enhance our services and align with your expectations.</li>
            <li><strong>When required by law:</strong> If we need to comply with legal obligations, we'll only process data as needed.</li>
            <li><strong>With your consent:</strong> If we need additional permission to process your data, we'll ask. Your information will not be used for a secondary purpose unless we have your consent or another lawful basis, in line with our PAIA Manual and applicable data protection laws.</li>
          </ul>
          <p className="mt-4">
            By sharing your information with us, you're giving us your permission to securely process and
            store it in line with these terms and any relevant laws. If you ever feel concerned, you can
            withdraw this consent by notifying us in writing to{' '}
            <a href="mailto:info@openboxsoftware.com" className="text-ebox-forest hover:underline">info@openboxsoftware.com</a>.
          </p>
          <p className="mt-4">
            Please note that certain information may be retained in accordance with our PAIA Manual or other
            applicable legal requirements, even after consent is withdrawn. In such cases, we will securely
            archive or anonymise your data where required and retain it only for as long as necessary to meet
            legal, compliance, or operational needs, such as defending legal claims or fulfilling statistical or
            historical requirements, and always with appropriate safeguards in place.
          </p>
          <p className="mt-4">
            If you believe your personal information has been used inappropriately or outside the law, please
            get in touch with us as soon as possible so we can address your concerns. If you're not satisfied
            with our response, you can escalate your complaint to the Information Regulator.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Sharing and Transferring Data</h2>
          <p>We value your privacy and only share your personal information in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Business operations:</strong> For instance, sharing data with HR for recruitment purposes or with financial processors for billing.</li>
            <li><strong>Legal requirements:</strong> When required to protect our legal rights or comply with regulations.</li>
            <li><strong>Business transfers:</strong> During mergers, acquisitions, or asset sales.</li>
            <li><strong>Collaborating for You:</strong> Sharing preferences and relevant details with trusted partners or team members (for example, external contractors or consulting firms) helps us tailor solutions and support services to your needs.</li>
            <li><strong>Legal and Compliance:</strong> If required by law, we will disclose your data in a responsible and compliant manner.</li>
            <li><strong>To protect our organisation:</strong> Data may be shared to safeguard the rights, property, and safety of our company, team, and resources.</li>
            <li><strong>During business transitions:</strong> If we're involved in a merger, sale, financing, or business acquisition, your data might be shared as part of the process.</li>
            <li><strong>For updates and accuracy:</strong> We may share information to verify or update your details or respond to requests for data changes, disclosures, or erasure.</li>
          </ul>
          <p className="mt-4">
            If your data needs to be shared with third-party processors or transferred internationally (for
            example, to cloud service providers, financial institutions or data storage platforms), we take
            every step to ensure those parties meet high technical and organisational security standards. This
            includes compliance with data protection laws like POPIA and GDPR to keep your information
            secure and properly handled.
          </p>
          <p className="mt-4">
            Please rest assured: we will never sell, trade, rent, or share your personal information (like your
            name, email, or phone number) with other parties unless you've explicitly agreed to it. We'll also
            do our utmost to prevent accidental disclosures to unauthorised individuals.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Retention</h2>
          <p>
            We retain your information, including preferences and financial data, for as long as it's needed to
            maintain our relationship with you and deliver our services. When it's no longer needed, we will
            securely delete, archive or anonymise it. If we need to keep it longer periods for legal or
            regulatory obligations, we will do so in compliance with applicable data protection laws and ensure
            it is stored securely for the required duration.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Our Cookie Policy</h2>
          <p>
            We use cookies to make our website run smoothly and improve your experience. These cookies
            help us understand how visitors use our site so that we can keep making it better. You're welcome
            to adjust your cookie settings anytime, though this may impact certain functionality on our site.
          </p>
          <p className="mt-4">
            In some cases, we partner with trusted third-party services that may use cookies and other
            tracking technologies to enhance functionality, such as providing interactive content, analytics, or
            targeted messaging. These third-party cookies collect anonymous data, ensuring that no
            personally identifiable information is linked to you.
          </p>

          <h2 className="text-2xl font-bold text-ebox-dark mt-12 mb-4">Contact Us</h2>
          <p>
            If you have any questions, concerns, or would like more details on our privacy practices, please
            feel free to reach out. You can find our contact information on the{' '}
            <Link to="/contact" className="text-ebox-forest hover:underline">Contact Us</Link> page of our
            website or email us directly at{' '}
            <a href="mailto:info@openboxsoftware.com" className="text-ebox-forest hover:underline">info@openboxsoftware.com</a>.
          </p>
          <p className="mt-6 text-gray-600">
            Thank you for trusting us with your information. We look forward to continuing our relationship
            with you while keeping your data safe and secure.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
