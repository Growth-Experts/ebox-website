export type BlogAuthorId = 'bjorn' | 'dean';

export interface BlogAuthor {
  id: BlogAuthorId;
  name: string;
  role: string;
  profile: string;
  avatarInitials: string;
  avatarImage: string;
}

export interface BlogContentBlock {
  type: 'h2' | 'h3' | 'p' | 'note';
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  authorId: BlogAuthorId;
  featured: boolean;
  featuredImage?: {
    alt: string;
    label: string;
    src?: string;
  };
  body: BlogContentBlock[];
}

export const BLOG_BASE_URL = 'https://www.eboxsoftware.com/blog';

export const blogAuthors: Record<BlogAuthorId, BlogAuthor> = {
  bjorn: {
    id: 'bjorn',
    name: 'Björn Peterson',
    role: 'Co-founder, eBox Software',
    profile:
      'Björn works with real estate finance and operations teams to turn complex MRI workflows into structured, auditable software processes.',
    avatarInitials: 'BP',
    avatarImage: '/images/bjorn-peterson.png',
  },
  dean: {
    id: 'dean',
    name: 'Dean Nixon',
    role: 'Co-founder, eBox Software',
    profile:
      'Dean helps property teams connect day-to-day operational workflows with the MRI data structures that keep portfolios running.',
    avatarInitials: 'DN',
    avatarImage: '/images/dean-nixon.png',
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'journal-entry-approval-workflow-multi-entity-mri-portfolio',
    title: 'How to Structure a Journal Entry Approval Workflow for a Multi-Entity MRI Portfolio',
    description:
      'A practical guide to field-level validation, conditional routing, approval decisions, audit trails, and MRI imports for multi-entity property finance teams.',
    category: 'Workflow Guides',
    datePublished: '2026-04-29',
    dateModified: '2026-04-29',
    readMinutes: 4,
    authorId: 'bjorn',
    featured: true,
    featuredImage: {
      alt: 'Structured journal entry approval workflow from data entry through approval and MRI import',
      label: 'Journal entry workflow',
      src: '/images/journal-entry-workflow-featured.svg',
    },
    body: [
      {
        type: 'p',
        text: "If you're managing a property portfolio across multiple entities, the question isn't whether you need a structured journal entry approval workflow. It's whether the one you're running right now can actually scale.",
      },
      {
        type: 'p',
        text: "For most MRI-based property finance teams, the answer involves some combination of email threads, informal sign-offs, and spreadsheet version tracking. It works until it doesn't, and when something goes wrong at month-end, tracing it back is harder than it should be.",
      },
      {
        type: 'p',
        text: 'This guide covers what a structured journal entry approval workflow looks like, why each stage matters, and what happens when any step is missing.',
      },
      {
        type: 'h2',
        text: 'Why informal approval breaks at scale',
      },
      {
        type: 'p',
        text: "A single entity with one approver doesn't need a workflow. But add multiple entities, varied transaction sizes, a finance team across locations, and a compliance requirement to document every decision, and the informal process starts costing you time and accuracy.",
      },
      {
        type: 'p',
        text: "The common failure points are predictable. The wrong person approves a journal that should have gone to a senior sign-off. A batch gets submitted before it's been reviewed. An entry goes through with a GL account that doesn't match the entity. None of these errors are visible until they've already reached the database, or until something doesn't reconcile at period close.",
      },
      {
        type: 'p',
        text: "The core issue is that when approval happens informally, there's no mechanism to enforce routing rules, validate the data before sign-off, or record the decision in a way you can reconstruct later.",
      },
      {
        type: 'h2',
        text: 'The four stages of a structured workflow',
      },
      {
        type: 'h3',
        text: '1. Data entry with field-level validation',
      },
      {
        type: 'p',
        text: "Before anything moves toward approval, the data needs to be checked against MRI's requirements at the point of entry. That means GL accounts are validated against the correct entity and ledger code. Mandatory fields flagged as incomplete before submission. Batch totals checked for balance.",
      },
      {
        type: 'p',
        text: "This isn't something that should happen after the import runs. Catching a GL account mismatch at entry takes seconds. Catching it after the import has failed, or worse, after it's gone through incorrectly, takes considerably longer.",
      },
      {
        type: 'h3',
        text: '2. Conditional routing by transaction type',
      },
      {
        type: 'p',
        text: "Not every journal entry should follow the same approval path. A GBP 500,000 intercompany loan accrual warrants a different sign-off chain than a GBP 3,000 monthly utility charge. A new entity's first journal batch should route differently from a routine recurring entry.",
      },
      {
        type: 'p',
        text: 'Conditional routing means the approval chain is determined by the transaction itself, amount, type, entity, or any combination of criteria your business requires. The right people review the right transactions automatically, without someone manually deciding who to forward an email to.',
      },
      {
        type: 'h3',
        text: '3. Multi-step approval with documented decisions',
      },
      {
        type: 'p',
        text: 'Each approver in the chain reviews the journal entry, can leave a comment, and either approves or rejects with a reason. That decision is timestamped and recorded against the specific form, not in a separate email thread that nobody can find six months later.',
      },
      {
        type: 'p',
        text: 'For multi-step chains, each approval triggers the next stage automatically. No chasing. No ambiguity about whether the previous step was completed.',
      },
      {
        type: 'h3',
        text: '4. MRI import after approval, not before',
      },
      {
        type: 'p',
        text: 'The import to MRI runs only after the full approval chain is complete. The data that reaches your database has already been validated against MRI field requirements and signed off by the correct approvers. The audit trail, who submitted, who approved, when, and what comments were left, is stored against the record automatically.',
      },
      {
        type: 'h2',
        text: 'What the audit trail captures',
      },
      {
        type: 'p',
        text: "This is the part most teams don't think about until they need it. A regulator asks for documentation of a specific journal batch from eight months ago. An internal auditor wants to know who approved a particular intercompany entry and when. A team member has left, and nobody is sure who signed off on the entries from their last month.",
      },
      {
        type: 'p',
        text: 'A structured workflow means the answer to all of these questions is already recorded. Every submission, every approval decision, every rejection, and resubmission is logged against the form, retrievable at any point.',
      },
      {
        type: 'h2',
        text: 'Building this into your MRI stack',
      },
      {
        type: 'p',
        text: 'eForms adds this workflow layer directly to your MRI instance. Journal entry templates, single batch and multi-batch, come pre-built with field-level validation, conditional approval routing, and direct MRI import on approval. The data hierarchy is respected at the form level: GL accounts, entities, and ledger codes are validated against your specific MRI configuration before anyone submits anything.',
      },
      {
        type: 'p',
        text: 'For property teams managing MRI across multiple entities in North America, EMEA, or APAC, this is the workflow infrastructure that sits between your team and your database, and makes month-end close considerably more predictable.',
      },
      {
        type: 'note',
        text: 'eBox Software is an MRI Certified Technology Partner. eForms and eConnect are built for MRI-based real estate teams across North America, EMEA, and APAC.',
      },
    ],
  },
  {
    slug: 'reduce-mri-import-errors-before-month-end-close',
    title: 'How to Reduce MRI Import Errors Before Month-End Close',
    description:
      'A practical month-end checklist for catching invalid fields, mismatched ledgers, and incomplete approvals before data reaches MRI.',
    category: 'Month-End Close',
    datePublished: '2026-04-22',
    dateModified: '2026-04-22',
    readMinutes: 5,
    authorId: 'dean',
    featured: false,
    featuredImage: {
      alt: 'Month-end checklist for reducing MRI import errors',
      label: 'Month-end controls',
    },
    body: [
      {
        type: 'p',
        text: 'Most MRI import errors are not mysterious. They usually come from missing fields, incorrect entity relationships, stale spreadsheet templates, or approval steps that happen too late in the process.',
      },
      {
        type: 'h2',
        text: 'Start validation before submission',
      },
      {
        type: 'p',
        text: 'The fastest way to reduce import failures is to validate at the point of entry. If a GL code is not valid for the selected entity, the person entering the journal should know immediately, not after finance has already reviewed the batch.',
      },
      {
        type: 'h2',
        text: 'Standardise the template',
      },
      {
        type: 'p',
        text: 'Teams often inherit spreadsheets that have been copied for years. A structured template reduces variation and makes every required field visible before the workflow moves forward.',
      },
      {
        type: 'h2',
        text: 'Keep approval close to the data',
      },
      {
        type: 'p',
        text: 'Approvals should be connected to the actual form data, not separated into email threads. That gives finance leaders a complete record of what was submitted, what changed, and who approved it.',
      },
    ],
  },
  {
    slug: 'approval-routing-rules-property-finance-teams',
    title: 'Approval Routing Rules Every Property Finance Team Should Document',
    description:
      'The routing rules MRI-based finance teams should define before they automate journals, invoices, tenant charges, and recurring processes.',
    category: 'Approval Workflows',
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    readMinutes: 6,
    authorId: 'bjorn',
    featured: false,
    body: [
      {
        type: 'p',
        text: 'Approval automation only works when the business rules are clear. Before a workflow is built, property finance teams need to document which conditions change the approval path.',
      },
      {
        type: 'h2',
        text: 'Entity and region',
      },
      {
        type: 'p',
        text: 'A transaction for one region may need a different finance lead, asset manager, or portfolio approver than another. Entity and region rules should be explicit from the start.',
      },
      {
        type: 'h2',
        text: 'Value thresholds',
      },
      {
        type: 'p',
        text: 'Materiality matters. The approval path for routine operating expenses should not be identical to the path for large accruals, capital items, or intercompany movements.',
      },
      {
        type: 'h2',
        text: 'Transaction type',
      },
      {
        type: 'p',
        text: 'Journals, invoices, tenant charges, and master data changes each carry different risks. Documenting transaction-specific routing keeps workflow logic understandable as the portfolio grows.',
      },
    ],
  },
  {
    slug: 'when-property-teams-outgrow-spreadsheets-for-mri-processes',
    title: 'When Property Teams Outgrow Spreadsheets for MRI Processes',
    description:
      'How to recognise when spreadsheets have moved from helpful working files to operational risk in your MRI workflows.',
    category: 'Operations',
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    readMinutes: 4,
    authorId: 'dean',
    featured: false,
    body: [
      {
        type: 'p',
        text: 'Spreadsheets are useful until they become the system of record. For MRI teams, the danger point is when critical approvals, validations, and audit evidence live outside the platform they eventually feed.',
      },
      {
        type: 'h2',
        text: 'Version control becomes the process',
      },
      {
        type: 'p',
        text: 'If the team spends more time checking which file is current than reviewing the work itself, the spreadsheet has become a process bottleneck.',
      },
      {
        type: 'h2',
        text: 'Approvals become hard to prove',
      },
      {
        type: 'p',
        text: 'Email sign-offs are easy in the moment and painful later. When audit evidence is scattered across inboxes, proving who approved what becomes more difficult than it needs to be.',
      },
      {
        type: 'h2',
        text: 'Validation happens too late',
      },
      {
        type: 'p',
        text: 'The best time to catch an issue is while the user is entering the data. If validation only happens during import, every correction becomes a rework cycle.',
      },
    ],
  },
];

export const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

export const getBlogPostBySlug = (slug: string | undefined) =>
  blogPosts.find((post) => post.slug === slug);

export const getBlogPostUrl = (post: BlogPost) => `${BLOG_BASE_URL}/${post.slug}`;

export const getPostWordCount = (post: BlogPost) =>
  post.body.reduce((count, block) => count + block.text.trim().split(/\s+/).length, 0);
