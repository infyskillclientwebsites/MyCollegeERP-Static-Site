import {
  GraduationCap,
  BookOpen,
  User,
  Users,
  Award,
  ScrollText,
  ClipboardList,
  Trophy,
  Library,
  School,
  Notebook,
  Receipt,
} from 'lucide-react';

/**
 * Subtle animated SVG-icon background that evokes the education ecosystem —
 * graduation caps, books, students, scrolls, awards drift gently and are
 * connected by dashed lines that suggest data flow / interconnection.
 *
 * Built entirely with CSS animations + lucide icons. No JS animation
 * library, no canvas, no measurable performance cost. Honors
 * prefers-reduced-motion via the global utility in index.css.
 *
 * Icons use very low opacity (~0.06–0.12) so they sit firmly behind text.
 */

const FLOATING_NODES = [
  { id: 'cap1',    Icon: GraduationCap, top: '8%',  left: '6%',   size: 56, dur: 7,  delay: 0,   tint: 'text-brand-blue' },
  { id: 'book1',   Icon: BookOpen,      top: '18%', left: '88%',  size: 48, dur: 8,  delay: 0.5, tint: 'text-brand-teal' },
  { id: 'user1',   Icon: User,          top: '32%', left: '14%',  size: 40, dur: 6,  delay: 1.2, tint: 'text-amber-500' },
  { id: 'scroll1', Icon: ScrollText,    top: '44%', left: '92%',  size: 44, dur: 9,  delay: 0.8, tint: 'text-purple-500' },
  { id: 'award1',  Icon: Award,         top: '62%', left: '4%',   size: 52, dur: 7,  delay: 0.3, tint: 'text-rose-500' },
  { id: 'trophy1', Icon: Trophy,        top: '78%', left: '85%',  size: 46, dur: 8,  delay: 1.5, tint: 'text-amber-600' },
  { id: 'users1',  Icon: Users,         top: '88%', left: '22%',  size: 50, dur: 6,  delay: 0.6, tint: 'text-brand-blue' },
  { id: 'library', Icon: Library,       top: '52%', left: '50%',  size: 64, dur: 10, delay: 0.0, tint: 'text-navy-700' },
  { id: 'note',    Icon: Notebook,      top: '14%', left: '46%',  size: 38, dur: 7,  delay: 1.8, tint: 'text-brand-teal' },
  { id: 'list',    Icon: ClipboardList, top: '70%', left: '60%',  size: 42, dur: 8,  delay: 1.0, tint: 'text-indigo-500' },
  { id: 'school',  Icon: School,        top: '25%', left: '70%',  size: 48, dur: 9,  delay: 0.4, tint: 'text-emerald-600' },
  { id: 'receipt', Icon: Receipt,       top: '58%', left: '30%',  size: 38, dur: 7,  delay: 1.3, tint: 'text-rose-400' },
];

// Pairs of node IDs to connect with animated dashed lines.
// Coordinates are read from FLOATING_NODES at render time.
const CONNECTIONS = [
  ['cap1', 'note'],
  ['note', 'school'],
  ['school', 'book1'],
  ['user1', 'library'],
  ['library', 'list'],
  ['list', 'trophy1'],
  ['users1', 'receipt'],
  ['receipt', 'library'],
  ['award1', 'user1'],
  ['scroll1', 'school'],
];

export default function AnimatedHeroBackground() {
  // Helper to look up percentage coordinates by node id
  const nodePos = (id) => {
    const n = FLOATING_NODES.find((x) => x.id === id);
    return n ? { x: parseFloat(n.left), y: parseFloat(n.top) } : { x: 50, y: 50 };
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Connection lines (SVG, animated dash) */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {CONNECTIONS.map(([from, to], idx) => {
          const a = nodePos(from);
          const b = nodePos(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#line-grad)"
              strokeWidth="0.12"
              strokeDasharray="0.8 0.6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                animation: `dash-flow 3s linear ${idx * 0.4}s infinite`,
                opacity: 0.55,
              }}
            />
          );
        })}
      </svg>

      {/* Floating icon nodes */}
      {FLOATING_NODES.map((n) => {
        const Icon = n.Icon;
        return (
          <div
            key={n.id}
            className={`absolute ${n.tint}`}
            style={{
              top: n.top,
              left: n.left,
              opacity: 0.1,
              transform: 'translate(-50%, -50%)',
              animation: `drift ${n.dur}s ease-in-out ${n.delay}s infinite`,
            }}
          >
            <Icon size={n.size} strokeWidth={1.5} />
          </div>
        );
      })}

      {/* Local keyframes (scoped via style tag — kept here so the component
          is self-contained and the keyframes don't pollute global CSS) */}
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
          50%      { transform: translate(-50%, -50%) translateY(-14px) rotate(3deg); }
        }
        @keyframes dash-flow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -2.8; }
        }
      `}</style>
    </div>
  );
}
