import {
  GraduationCap,
  BookOpen,
  Award,
  Trophy,
  ScrollText,
  Notebook,
  School,
  Users,
} from 'lucide-react';

/**
 * Page-wide subtle floating icons — fixed-position layer that sits behind
 * all content. Adds a faint "education ecosystem" feel as the user scrolls
 * without ever competing with foreground text.
 *
 * Different from AnimatedHeroBackground: that one lives inside the hero
 * with connection lines and higher density. This one is a sparse,
 * very-low-opacity ambient layer.
 */
const NODES = [
  { Icon: GraduationCap, top: '12vh', left: '85vw', size: 64, dur: 14, delay: 0   },
  { Icon: BookOpen,      top: '38vh', left: '6vw',  size: 56, dur: 16, delay: 1.5 },
  { Icon: Award,         top: '70vh', left: '90vw', size: 60, dur: 12, delay: 0.8 },
  { Icon: ScrollText,    top: '120vh',left: '8vw',  size: 52, dur: 15, delay: 2.0 },
  { Icon: Trophy,        top: '160vh',left: '88vw', size: 58, dur: 13, delay: 0.6 },
  { Icon: School,        top: '210vh',left: '12vw', size: 70, dur: 17, delay: 1.2 },
  { Icon: Notebook,      top: '260vh',left: '85vw', size: 50, dur: 14, delay: 0.4 },
  { Icon: Users,         top: '310vh',left: '5vw',  size: 56, dur: 16, delay: 1.8 },
];

export default function GlobalBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {NODES.map((n, i) => {
        const Icon = n.Icon;
        return (
          <div
            key={i}
            className="absolute text-navy-900"
            style={{
              top: n.top,
              left: n.left,
              opacity: 0.04,
              animation: `gb-float ${n.dur}s ease-in-out ${n.delay}s infinite`,
            }}
          >
            <Icon size={n.size} strokeWidth={1.4} />
          </div>
        );
      })}
      <style>{`
        @keyframes gb-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-20px) rotate(4deg); }
        }
      `}</style>
    </div>
  );
}
