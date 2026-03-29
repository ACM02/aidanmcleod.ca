import { FaServer, FaUsers, FaTools, FaCode, FaRobot, FaTv } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';

const CSSACampaign = ({ isDark }) => {
  const sectionTitle = `text-3xl font-bold mb-8 ${isDark ? 'text-purple-400' : 'text-sky-600'}`;
  const cardBg = isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200 shadow-sm';

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-24 relative z-10">

      <section className="text-center">
        <h1 className={`text-6xl md:text-7xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Aidan <span className={isDark ? 'text-purple-400' : 'text-sky-600'}>McLeod</span>
        </h1>
        <p className="text-2xl font-bold uppercase tracking-widest opacity-80">for Director of Technology</p>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className={sectionTitle.replace('mb-8', 'mb-0')}>Primary goals</h2>
          <div className="h-px flex-grow bg-current opacity-20"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <PlatformCard
            icon={<FaServer />}
            title="Server upkeep"
            description="Making sure the server stays up and as secure as possible is important, and will be a baseline for all of my other work."
            isDark={isDark}
          />
          <PlatformCard
            icon={<FaUsers />}
            title="Tech Committee"
            description="With lots of experience on committees, I plan to offer mentorship and learning opportunities to all who are interested."
            isDark={isDark}
          />
          <PlatformCard
            icon={<FaTools />}
            title="Ongoing Work"
            description="The current CSSA exec team has multiple ongoing projects which I plan to continue and finish, cleaning up tech debt and avoiding half-finished work."
            isDark={isDark}
          />
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className={sectionTitle.replace('mb-8', 'mb-0')}>Plans for new stuff</h2>
          <div className="h-px flex-grow bg-current opacity-20"></div>
        </div>
        <p className="mb-8 opacity-80 max-w-2xl text-lg">One everything is running smoothly, I've got a few plans for new things that can be brought to the CSSA:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <RoadmapItem icon={<FaCode />} title="Website Resources" text="The CSSA has several online resources, but I hope to expand them with more guides, better organization, and course specific information." isDark={isDark} />
          <RoadmapItem icon={<FaBowlFood />} title="Canteen Modernization" text="A modern payment system for the lounge canteen has been needed for a while, and I plan to implement one." isDark={isDark} />
          <RoadmapItem icon={<FaRobot />} title="Community Engagement" text="I think that I can improve engagement on our Discord server by adding some bot features, like automated emote addition, and showcasing CSSA member work." isDark={isDark} />
          <RoadmapItem icon={<FaTv />} title="Lounge Display" text="Providing I can get the hardware 🤞 I want to put a dynamic display in the lounge showing useful info like bus timings, upcoming events, and more." isDark={isDark} />
        </div>
      </section>

      {/* Why Me / Experience */}
      <section className="">
        <div className={`p-8 rounded-2xl border ${cardBg}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why I'm Running</h2>
          <p className="mb-6 leading-relaxed opacity-90">
            Having been a member of the CSSA for nearly 4 years and a counselor for 1, I've seen the value that the CSSA provides to CS students and I want to help create that value and a positive environment for the next generation of CS students.

            I have a wide variety of volunteer experiences spanning several years which have prepared me well to take on this role. For the last ~2 years I have served as the director of finance for the UMEsports club, overseeing the budget of a new, small scale club trying to push initiatives with relatively little resources. In this position I have also become well acquainted with the workings of UMSU and the requirements UMSU clubs must fulfill. Additionally, over the last year, I have been on the CSSA tech committee under Ara, where I have contributed to the CSSA website and learned about the structure of the CSSA's server and tech suite. Beyond UM, I also have several years of experience as a member of the Young Adults and Youth committee for my church, where I have represented my region, managed their technology (shared files and archives), as well as co-planned/lead several province-wide weekend-long retreat events for youth.
          </p>
        </div>
      </section>
    </main>
  );
};

const PlatformCard = ({ icon, title, description, isDark }) => (
  <div className={`p-8 rounded-2xl border transition-all ${isDark ? 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-sky-400'}`}>
    <div className={`mb-4 text-3xl ${isDark ? 'text-purple-400' : 'text-sky-600'}`}>{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
  </div>
);

const RoadmapItem = ({ icon, title, text, isDark }) => (
  <div className={`flex items-start gap-4 p-5 rounded-xl border ${isDark ? 'bg-slate-800/30 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
    <div className={`mt-1 ${isDark ? 'text-purple-400' : 'text-sky-600'}`}>{icon}</div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{text}</p>
    </div>
  </div>
);

export default CSSACampaign;