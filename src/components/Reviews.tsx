import React, { useMemo } from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Review {
  id: number;
  text: string;
  name: string;
  alias: string;
  rating: number;
  date: string; // e.g. "Mar 02, 2025"
}

const ALL_REVIEWS: Review[] = [
  {
    id: 1,
    text: "Moving into my Manhattan studio through OptimaRent was seamless. The online application and fast approval made NYC renting way less stressful.",
    name: "Emily Johnson",
    alias: "E. J.",
    rating: 5,
    date: "Feb 11, 2026",
  },
  {
    id: 2,
    text: "Loved how transparent the pricing was. No hidden fees, just the application fee and first month’s rent exactly as listed.",
    name: "Michael Chen",
    alias: "M. C.",
    rating: 5,
    date: "Jan 28, 2026",
  },
  {
    id: 3,
    text: "The Williamsburg loft I found here is exactly as advertised. Bright, modern, and the building has great amenities.",
    name: "Sophia Martinez",
    alias: "S. M.",
    rating: 4,
    date: "Nov 19, 2025",
  },
  {
    id: 4,
    text: "Customer support responded to my questions about the lease within an hour. That’s rare in New York.",
    name: "David Kim",
    alias: "D. K.",
    rating: 5,
    date: "Oct 05, 2025",
  },
  {
    id: 5,
    text: "The Brooklyn 2BR listing matched the photos perfectly. No bait-and-switch, which I’ve experienced with other sites.",
    name: "Olivia Brown",
    alias: "O. B.",
    rating: 4,
    date: "Aug 14, 2025",
  },
  {
    id: 6,
    text: "I appreciated being able to see rent, application fee, and total move-in cost upfront before applying.",
    name: "James Anderson",
    alias: "J. A.",
    rating: 5,
    date: "Jul 02, 2025",
  },
  {
    id: 7,
    text: "The interface is clean and mobile-friendly. I applied for my Chelsea studio from my phone during my lunch break.",
    name: "Grace Lee",
    alias: "G. L.",
    rating: 5,
    date: "May 27, 2025",
  },
  {
    id: 8,
    text: "My partner and I found a 1BR in East Village that fit our budget, and the process felt very professional.",
    name: "Ryan Thompson",
    alias: "R. T.",
    rating: 4,
    date: "Apr 10, 2025",
  },
  {
    id: 9,
    text: "I liked that the listings focused on real photos and realistic prices instead of too-good-to-be-true deals.",
    name: "Isabella Rossi",
    alias: "I. R.",
    rating: 4,
    date: "Mar 18, 2025",
  },
  {
    id: 10,
    text: "As a first-time renter in NYC, the clear steps and guidance helped me feel confident in my application.",
    name: "Daniel Walker",
    alias: "D. W.",
    rating: 5,
    date: "Jan 09, 2025",
  },
  {
    id: 11,
    text: "The lease terms were easy to review online, and I received the official activation email exactly when promised.",
    name: "Hannah Wilson",
    alias: "H. W.",
    rating: 5,
    date: "Dec 03, 2024",
  },
  {
    id: 12,
    text: "Found a Brooklyn apartment close to the subway with good natural light. The details in the listing were spot on.",
    name: "Christopher Davis",
    alias: "C. D.",
    rating: 4,
    date: "Nov 21, 2024",
  },
  {
    id: 13,
    text: "The ability to see total due (application + first month) before paying was super helpful for my budgeting.",
    name: "Natalie Green",
    alias: "N. G.",
    rating: 5,
    date: "Oct 07, 2024",
  },
  {
    id: 14,
    text: "I’ve used other rental platforms before, but this one felt tailored for serious NYC renters, not just browsers.",
    name: "Jason Miller",
    alias: "J. M.",
    rating: 4,
    date: "Sep 15, 2024",
  },
  {
    id: 15,
    text: "Secure payments through Airtm and clear instructions made the financial part less intimidating.",
    name: "Priya Patel",
    alias: "P. P.",
    rating: 5,
    date: "Aug 02, 2024",
  },
  {
    id: 16,
    text: "The Manhattan 1BR I applied for was already popular, but my application was processed quickly and fairly.",
    name: "Ethan Clark",
    alias: "E. C.",
    rating: 4,
    date: "Jul 19, 2024",
  },
  {
    id: 17,
    text: "Love the dark mode design. I was browsing late at night and my eyes definitely appreciated it.",
    name: "Madison Rivera",
    alias: "M. R.",
    rating: 5,
    date: "Jun 11, 2024",
  },
  {
    id: 18,
    text: "The lease activation email arrived within 30 minutes after my first rent payment, just as stated.",
    name: "Aaron Williams",
    alias: "A. W.",
    rating: 5,
    date: "May 24, 2024",
  },
  {
    id: 19,
    text: "We moved from out of state and relied heavily on the site’s photos and descriptions. No unpleasant surprises on arrival.",
    name: "Chloe Nguyen",
    alias: "C. N.",
    rating: 5,
    date: "Apr 06, 2024",
  },
  {
    id: 20,
    text: "Filtering by neighborhood made it easy to compare Manhattan vs. Brooklyn options in my price range.",
    name: "Logan Harris",
    alias: "L. H.",
    rating: 4,
    date: "Mar 12, 2024",
  },
  {
    id: 21,
    text: "Application status updates were clear, so I never felt like my information disappeared into a black hole.",
    name: "Zoe King",
    alias: "Z. K.",
    rating: 5,
    date: "Jan 29, 2024",
  },
  {
    id: 22,
    text: "Transparent move-in costs and clear communication made this the smoothest apartment search I’ve had in NYC.",
    name: "Benjamin Scott",
    alias: "B. S.",
    rating: 5,
    date: "Dec 10, 2023",
  },
  {
    id: 23,
    text: "The East Village listing showed real neighborhood photos, which helped me decide quickly.",
    name: "Ava Lopez",
    alias: "A. L.",
    rating: 4,
    date: "Nov 03, 2023",
  },
  {
    id: 24,
    text: "I appreciated that support didn’t pressure me—just answered my questions and let me decide at my own pace.",
    name: "Jacob White",
    alias: "J. W.",
    rating: 4,
    date: "Oct 22, 2023",
  },
  {
    id: 25,
    text: "The platform feels built for modern renters—smooth UX, fast loading, and everything works on mobile.",
    name: "Lily Parker",
    alias: "L. P.",
    rating: 5,
    date: "Sep 09, 2023",
  },
  {
    id: 26,
    text: "I liked seeing exact ZIP codes and clear descriptions. It helped me verify commute times easily.",
    name: "Noah Rodriguez",
    alias: "N. R.",
    rating: 4,
    date: "Aug 01, 2023",
  },
  {
    id: 27,
    text: "The whole process—from browsing to getting my key—felt streamlined and professional.",
    name: "Sofia Garcia",
    alias: "S. G.",
    rating: 5,
    date: "Jul 18, 2023",
  },
  {
    id: 28,
    text: "Even with my tight deadline, I was able to secure a place in Brooklyn without sacrificing quality.",
    name: "William Baker",
    alias: "W. B.",
    rating: 4,
    date: "Jun 05, 2023",
  },
  {
    id: 29,
    text: "The reviews section itself helped build trust—so here I am leaving one too.",
    name: "Harper Evans",
    alias: "H. E.",
    rating: 5,
    date: "Apr 27, 2023",
  },
  {
    id: 30,
    text: "Everything was laid out clearly: fees, rents, and timelines. That clarity is rare in NYC real estate.",
    name: "Alexander Moore",
    alias: "A. M.",
    rating: 5,
    date: "Feb 16, 2023",
  },
];

const ReviewsSection: React.FC = () => {
  const { theme } = useTheme();

  // Pick 7 random reviews on each render/refresh
  const randomReviews = useMemo(() => {
    const shuffled = [...ALL_REVIEWS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 7);
  }, []);

  return (
    <section
      className={`
        py-24
        ${theme === 'dark'
          ? 'bg-gradient-to-b from-slate-900 via-indigo-900/60 to-slate-900'
          : 'bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className={`
              text-4xl md:text-5xl font-black mb-4
              ${theme === 'dark'
                ? 'bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-slate-900 via-amber-900 to-rose-800 bg-clip-text text-transparent'
              }
            `}
          >
            Residents Love OptimaRent
          </h2>
          <p
            className={`
              text-lg md:text-xl max-w-2xl mx-auto
              ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
            `}
          >
            Real stories from renters who’ve secured their New York apartments through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomReviews.map((review) => (
            <div
              key={review.id}
              className={`
                relative p-7 rounded-3xl shadow-xl backdrop-blur-xl border
                ${theme === 'dark'
                  ? 'bg-slate-800/70 border-slate-700/70 hover:border-sky-500/60'
                  : 'bg-white/90 border-amber-200/70 hover:border-amber-400/80'
                }
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              `}
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 mr-1 ${
                      star <= review.rating
                        ? theme === 'dark'
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-amber-500 fill-amber-500'
                        : theme === 'dark'
                          ? 'text-slate-600'
                          : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>

              <p
                className={`
                  text-sm leading-relaxed mb-6
                  ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}
                `}
              >
                “{review.text}”
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`
                      text-sm font-bold
                      ${theme === 'dark' ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    {review.name}
                  </p>
                  <p
                    className={`
                      text-xs
                      ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
                    `}
                  >
                    {review.alias}
                  </p>
                </div>
                <span
                  className={`
                    text-xs font-medium px-3 py-1 rounded-full
                    ${theme === 'dark'
                      ? 'bg-slate-900/70 text-slate-300 border border-slate-700'
                      : 'bg-amber-50 text-slate-700 border border-amber-200'
                    }
                  `}
                >
                  {review.date}
                </span>
              </div>

              {/* Accent bar */}
              <div
                className={`
                  absolute inset-x-6 bottom-0 h-1 rounded-t-full
                  ${theme === 'dark'
                    ? 'bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400'
                    : 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500'
                  }
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
