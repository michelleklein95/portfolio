import type { ImageMetadata } from 'astro';

import cyberThumb from '../assets/projects/cyber-thumb.jpg';
import cyberPoster from '../assets/projects/cyber-video-poster.jpg';
import aiThumb from '../assets/projects/ai-teachers-thumb.jpg';
import aiStill from '../assets/projects/ai-teachers-still.jpg';
import maytronicsThumb from '../assets/projects/maytronics-thumb.jpg';
import maytronics1 from '../assets/projects/maytronics-screen-1.jpg';
import maytronics2 from '../assets/projects/maytronics-screen-2.jpg';
import maytronics3 from '../assets/projects/maytronics-screen-3.jpg';
import academicThumb from '../assets/projects/academic-thumb.jpg';
import academicScreen from '../assets/projects/academic-title-screen.jpg';
import safetyThumb from '../assets/projects/work-safety-thumb.jpg';
import safety1 from '../assets/projects/work-safety-scene-1.jpg';
import safety2 from '../assets/projects/work-safety-scene-2.jpg';
import socialThumb from '../assets/projects/social-media-thumb.jpg';
import social1 from '../assets/projects/social-video-1.jpg';
import social2 from '../assets/projects/social-video-2.jpg';
import raftiqueThumb from '../assets/projects/raftique-thumb.jpg';
import nikeThumb from '../assets/projects/landing-dumbbell-thumb.jpg';
import nikeFull from '../assets/projects/nike-landing-full.jpg';

export type Category = 'el' | 'onb' | 'vid' | 'web';

export const categories: { id: Category; label: string }[] = [
  { id: 'el', label: 'E-learning' },
  { id: 'onb', label: 'Onboarding' },
  { id: 'vid', label: 'Video' },
  { id: 'web', label: 'Web & Marketing' },
];

/**
 * One item in a project's "The product" area.
 * - video:       poster image + play button. Add `youtubeId` or `facebookUrl` to make it play.
 * - interactive: poster image; click loads the live version (`url`, e.g. a Genially link) in place.
 * - image:       a screenshot; opens full screen on click. `portrait` for phone screens.
 * - link:        a card that opens an external website. Add `url`.
 * - page:        a tall full-page design shown as a preview; opens full screen on click.
 */
export type Media = {
  kind: 'video' | 'interactive' | 'image' | 'link' | 'page';
  image: ImageMetadata;
  alt: string;
  caption?: string;
  youtubeId?: string;
  facebookUrl?: string;
  url?: string;
  portrait?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  lead: string;
  role: string;
  tools: string[];
  badge?: string;
  thumb: ImageMetadata;
  thumbAlt: string;
  sections: { heading: string; text: string }[];
  media: Media[];
  // Shown only when filled in, e.g. completion rates or learner feedback.
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: 'cyber-security-courseware',
    title: 'Cyber Security Courseware',
    category: 'el',
    summary:
      'Turned mandatory security training into an engaging, story-driven course with point-of-view videos starring real employees.',
    lead: 'Turning a mandatory, notoriously dry compliance topic into a story-driven course people actually engage with.',
    role: 'Instructional designer, scriptwriter & producer',
    tools: ['Articulate Storyline'],
    thumb: cyberThumb,
    thumbAlt: 'Hands typing on a laptop under a glowing security shield',
    sections: [
      {
        heading: 'The challenge',
        text: 'Mandatory cyber-security training is notoriously dry, and employees tend to tune out. The goal was to turn a monotonous compliance topic into an interactive learning experience people would actually engage with.',
      },
      { heading: 'Audience', text: 'Employees required to complete mandatory cyber-security training.' },
      {
        heading: 'My approach',
        text: 'I built the courseware around point-of-view videos featuring real employees. I wrote the scripts, managed the director, actors and production schedule, and even stepped in front of the camera myself, so every scenario felt relatable, authentic and visually compelling.',
      },
    ],
    media: [
      {
        kind: 'video',
        image: cyberPoster,
        alt: 'Opening screen of the cyber security courseware video',
        caption: 'Excerpt from the courseware, shown at 3× speed',
        youtubeId: 'leU-XhRL8zs',
      },
    ],
  },
  {
    slug: 'ai-for-teachers-microsoft-education',
    title: 'AI for Teachers: Microsoft Education IL',
    category: 'vid',
    summary:
      "A promo and training video series encouraging teaching staff to adopt AI tools, released during the Ministry of Education's AI Week.",
    lead: 'A video series that motivates teachers to adopt AI tools and gives them the foundations to use them well.',
    role: 'Project lead & producer',
    tools: ['Premiere Pro', 'After Effects', 'Illustrator', 'ChatGPT (scripting)'],
    thumb: aiThumb,
    thumbAlt: 'A teacher working on a laptop in a bright office',
    sections: [
      {
        heading: 'The challenge',
        text: 'Microsoft Education IL wanted to promote the use of AI tools among teaching staff. The content had to do two jobs at once: motivate teachers to try AI, and give them valuable, foundational knowledge on integrating it into their teaching.',
      },
      { heading: 'Audience', text: 'Teaching staff across Israel.' },
      {
        heading: 'My approach',
        text: "I led the project end to end, from the initial marketing concept through scripting, directing, graphic design and post-production, to high institutional standards. The series was published during the Ministry of Education's AI Week, on the Ministry's digital platform.",
      },
    ],
    media: [
      {
        kind: 'video',
        image: aiStill,
        alt: 'Still from the AI for Teachers video series',
        caption: 'From the AI for Teachers series',
        youtubeId: 'YfzcnGQz0n4',
      },
    ],
  },
  {
    slug: 'maytronics-onboarding',
    title: 'Maytronics Onboarding Kit',
    category: 'onb',
    summary:
      'A needs-based welcome journey for new hires at a global high-tech manufacturer, on desktop and mobile.',
    lead: 'A needs-based welcome journey that prepares new hires for their first day at a global high-tech company.',
    role: 'Instructional designer (M.A. thesis)',
    tools: ['Genially'],
    badge: 'M.A. thesis',
    thumb: maytronicsThumb,
    thumbAlt: 'The Maytronics office building',
    sections: [
      {
        heading: 'The challenge',
        text: 'Maytronics wanted a better onboarding experience for the new hires joining its factory, one that would help them integrate faster and start on the right foot.',
      },
      { heading: 'Audience', text: 'New employees at the Maytronics factory.' },
      {
        heading: 'My approach',
        text: 'I ran a comprehensive needs analysis at the factory, working closely with the instructional team to understand the specific needs and challenges new workers face. Based on it, I developed a series of three interactive welcome messages, on desktop and mobile, that welcome new hires and prepare them for their first day, so their journey starts positive and informed.',
      },
    ],
    media: [
      {
        kind: 'interactive',
        image: maytronics1,
        alt: 'Desktop welcome screen: Management Team, with a Start button',
        caption: 'Desktop: meet the management team',
        url: 'https://view.genially.com/6509f20012476b001845e01e',
      },
      {
        kind: 'interactive',
        image: maytronics2,
        alt: "Mobile welcome screen with the CEO's welcome letter",
        caption: 'Mobile: welcome letter',
        url: 'https://view.genially.com/642a6e1ca78d570011f49f4f',
        portrait: true,
      },
      {
        kind: 'interactive',
        image: maytronics3,
        alt: 'Mobile screen: upcoming events for the first day and first month',
        caption: 'Mobile: upcoming events',
        url: 'https://view.genially.com/64fca81f1f741c00119b947e',
        portrait: true,
      },
    ],
  },
  {
    slug: 'love-thy-neighbor-academic-course',
    title: '"Love Thy Neighbor": Academic Course',
    category: 'el',
    summary:
      'Adapted a debate-heavy in-person Judaism course at HIT into interactive online courseware with built-in assessment.',
    lead: 'Moving a debate-driven academic course online without losing the critical thinking that made it work.',
    role: 'Instructional designer',
    tools: ['Articulate Storyline', 'Moodle', 'Video editing tools'],
    thumb: academicThumb,
    thumbAlt: 'A student with glasses looking at a tablet showing a study illustration',
    sections: [
      {
        heading: 'The challenge',
        text: 'HIT\'s in-person Judaism course, "Love Thy Neighbor As Thyself", relied heavily on live debate. The challenge was to turn it into an engaging digital learning experience that still sparks discussion and critical thinking.',
      },
      { heading: 'Audience', text: 'HIT students taking the course online.' },
      {
        heading: 'My approach',
        text: 'Working closely with the course professor, I adapted the course into online courseware with in-depth analysis of biblical verses, exploring multiple interpretations and contexts. Interactive elements keep learners thinking critically, and a short assessment built into the Moodle course site checks their understanding.',
      },
    ],
    media: [
      {
        kind: 'video',
        image: academicScreen,
        alt: 'Course opening screen in Hebrew: welcome to the "Love Thy Neighbor" unit, with a Start button',
        caption: 'Walkthrough of the courseware (Hebrew)',
        youtubeId: 'jawbuvV9DVs',
      },
    ],
  },
  {
    slug: 'work-safety-videos',
    title: 'Work Safety Videos',
    category: 'vid',
    summary: 'Two animated videos for a regulation-compliant work-safety course.',
    lead: 'Animated scenarios that make workplace safety rules clear, built to meet legal regulations.',
    role: 'Instructional video designer',
    tools: ['Vyond'],
    thumb: safetyThumb,
    thumbAlt: 'A hard hat, ear muffs, work gloves and safety goggles',
    sections: [
      {
        heading: 'About the project',
        text: 'Two animated videos created for a work-safety courseware, designed according to legal safety regulations.',
      },
    ],
    media: [
      { kind: 'video', image: safety1, alt: 'Animated office scene with four employees', caption: 'Video 1', youtubeId: 'lukRd47BbLs' },
      {
        kind: 'video',
        image: safety2,
        alt: 'Animated office scene near the printer',
        caption: 'Video 2',
        youtubeId: '-EgZzhP8LcY',
      },
    ],
  },
  {
    slug: 'social-media-videos',
    title: 'Social Media Videos',
    category: 'web',
    summary: 'Short videos produced for Facebook marketing campaigns.',
    lead: 'Short videos created and produced for Facebook marketing campaigns.',
    role: 'Video creator & producer',
    tools: ['Create Studio'],
    thumb: socialThumb,
    thumbAlt: 'A woman filming herself with a smartphone',
    sections: [
      {
        heading: 'About the project',
        text: 'I created and produced these videos for Facebook marketing campaigns.',
      },
    ],
    media: [
      { kind: 'video', image: social1, alt: 'A smartphone on a desk next to glasses and a laptop',
        caption: 'Video 1',
        facebookUrl: 'https://www.facebook.com/Tikshuv121/videos/27844513095140115/',
      },
      {
        kind: 'video',
        image: social2,
        alt: 'Animated scene about employee onboarding with a Hebrew caption',
        caption: 'Video 2',
        facebookUrl: 'https://www.facebook.com/Tikshuv121/videos/498723776183594/',
      },
    ],
  },
  {
    slug: 'raftique-business-website',
    title: 'Raftique Picnic: Business Website',
    category: 'web',
    summary: "Ran a picnic business's website end-to-end: photo shoots, image editing and marketing strategy.",
    lead: 'Running the website and marketing of a private picnic business.',
    role: 'Website & marketing manager',
    tools: ['Wix'],
    thumb: raftiqueThumb,
    thumbAlt: 'A styled picnic table with cushions, plates and flowers',
    sections: [
      {
        heading: 'About the project',
        text: 'I manage the website of Raftique, a private picnic business. That includes photo shoots, image editing and developing marketing strategies.',
      },
    ],
    media: [
      {
        kind: 'link',
        image: raftiqueThumb,
        alt: 'The Raftique Picnic website',
        caption: 'raftique.com',
        url: 'https://www.raftique.com/',
      },
    ],
  },
  {
    slug: 'nike-gloves-landing-page',
    title: 'Nike Gloves: Landing Page Concept',
    category: 'web',
    summary: 'Concept landing page for sports gloves, designed during graphic design studies.',
    lead: 'A concept landing page for Nike sports gloves, from my graphic design studies.',
    role: 'Designer (student project)',
    tools: ['Figma'],
    thumb: nikeThumb,
    thumbAlt: 'A dumbbell in blue light',
    sections: [
      {
        heading: 'About the project',
        text: 'A concept landing page for Nike sports gloves, designed as part of my graphic design studies at HackerU.',
      },
    ],
    media: [
      {
        kind: 'link',
        image: nikeFull,
        alt: 'The gloves landing page: "Grip Your Future. Glove UP!"',
        caption: 'The landing page, built from my Figma design',
        url: '/work/nike-gloves-landing-page/live/',
      },
    ],
  },
];
