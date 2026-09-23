import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Shield,
  Database,
  FileText,
  Zap,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-160 flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden bg-linear-to-b from-white/90 to-white/90 bg-cover bg-[url('/border.png')] bg-center">
        <div className="absolute top-0 left-0 w-48 h-150 bg-linear-to-r from-blue-500/20 to-transparent blur-[150px] pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-48 h-150 bg-linear-to-l from-blue-500/20 to-transparent blur-[150px] pointer-events-none"></div>
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-2 mb-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/adfd109428b883baf1ec5f6fe163b18583f7b299?width=312"
              alt="Don't SEA Made Easy"
              className="h-5 w-auto"
            />
            <div className="h-2 w-24 bg-linear-to-r from-white via-[#248BB3] to-white rounded-full"></div>
          </div>

          <h1 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-[48px] font-medium leading-tight text-gray-800 mb-2">
              Your Content Ranks Everywhere.
            </div>
            <div className="text-5xl md:text-6xl lg:text-[60px] font-bold leading-tight text-[#248BB3]">
              Your Brand Voice Stays Authentic.
            </div>
          </h1>

          <p className="text-base md:text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-12">
            Pibi Tech is the only AI content platform built for founders and
            marketers who need enterprise-level SEO results without sacrificing
            their authentic brand voice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-linear-to-r from-[#2563eb] to-[#059669] text-white font-medium px-8 py-3 rounded-full flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#248BB3]/25 group">
              Start Your Content Autopilot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all">
              Get started
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-150 bg-linear-to-r from-blue-500/20 to-transparent blur-[150px] pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-48 h-150 bg-linear-to-l from-blue-500/20 to-transparent blur-[150px] pointer-events-none"></div>

        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-xs font-semibold tracking-[2px] text-gray-900 mb-4">
              WHAT MAKES US DIFFERENT
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[48px] font-medium leading-tight text-gray-800 mb-3">
              Multi-Agent{" "}
              <span className="font-bold text-[#248BB3]">
                Intelligence System
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Five specialized AI agents work together to create content that
              ranks and converts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-2xl border-2 border-[#248BB3]-light p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Research Agent
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Identifies high-value keywords and analyzes competitor content
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-[#248BB3]-light p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Writing Agent
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Generates 1,500-2,500 word articles optimized for search
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-[#248BB3]-light p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Brand Agent
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Ensures every sentence matches your unique voice and tone
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-[#248BB3]-light p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Database className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Knowledge Agent
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Integrates your private docs, YouTube videos, and expertise
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-[#248BB3]-light p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Publishing Agent
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Automates WordPress integration and scheduling
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-xs font-semibold tracking-[2px] text-gray-900 mb-4">
              THE PROBLEM
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[48px] leading-tight mb-3">
              <span className="font-medium text-gray-800">
                Content Marketing{" "}
              </span>
              <span className="font-bold text-[#248BB3]">
                Shouldn't Be This Hard
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Every successful founder faces these brutal challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <h3 className="text-2xl font-bold text-[#248BB3] mb-3">
                Time Drain
              </h3>
              <p className="text-gray-600 leading-relaxed">
                4-8 hours per article means 120-180 hours/month for consistent
                publishing. That's an entire part-time hire just for content.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <h3 className="text-2xl font-bold text-[#248BB3] mb-3">
                Inconsistent Publishing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A few posts here and thereenough to feel guilty, not enough to
                rank. Google rewards consistency, not sporadic efforts.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <h3 className="text-2xl font-bold text-[#248BB3] mb-3">
                Broken Brand Voice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Freelancers or cheap AI produce work that doesn't sound like
                you. Your audience notices, and your trust erodes.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <h3 className="text-2xl font-bold text-[#248BB3] mb-3">
                High Cost, Low ROI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                $100-$300 per article from freelancers, with unpredictable
                outcomes. Scale that to 30 articles and your budget explodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-xs font-semibold tracking-[2px] text-gray-900 mb-4">
              CORE FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[48px] leading-tight mb-3">
              <span className="font-medium text-gray-800">
                Everything You Need to{" "}
              </span>
              <span className="font-bold text-[#248BB3]">Dominate SEO</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Built for founders who want results, not complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Answer Engine Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize for ChatGPT, Perplexity, and Claude, not just Google.
                Your content appears in AI answers across platforms.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Brand Voice Mastery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload 2-3 writing samples and our Brand Kit learns your tone,
                style, and vocabulary. Every article sounds authentically you.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Predictive Ranking Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time SERP analysis shows keyword difficulty, competition,
                and ranking probability before you publish.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Database className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Private Knowledge Base
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload internal docs, case studies, and proprietary data. Your
                content showcases unique expertise competitors can't copy.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Bulk Generation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generate 10, 20, or 30 articles at once. Perfect for content
                sprints, product launches, or backfilling your blog.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                WordPress Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                One-click connection publishes articles directly to your
                WordPress site. Autopilot scheduling handles the rest.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Real-Time SERP Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See what's ranking now and why. Our SERP intelligence guides
                topic selection and content structure.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Multi-Model AI Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Switch between GPT-4, Claude, and other premium models. Choose
                the best AI for each article type and topic.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#248BB3]-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                48+ Language Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generate content in any major language. Expand globally without
                hiring translators or local writers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-150 bg-white/80 blur-[150px] pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-48 h-150 bg-white/80 blur-[150px] pointer-events-none"></div>

        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-xs font-semibold tracking-[2px] text-gray-900 mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[48px] leading-tight mb-3">
              <span className="font-medium text-gray-800">From Zero to </span>
              <span className="font-bold text-[#248BB3]">
                Content Autopilot
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Get started in 5 minutes, see results in 30 days
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e049b27c97a62f209815dc2ed5a1a549cae9a16f?width=588"
                alt="Connect Your Site"
                className="w-full h-auto object-cover rounded-t-2xl"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  Connect Your Site
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  One-click WordPress integration or use our API for custom CMS.
                  Takes 60 seconds.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/38ec1ec22c173887cd39ee9be90c593401f0f8da?width=588"
                alt="Teach Your Voice"
                className="w-full h-auto object-cover rounded-t-2xl"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  Teach Your Voice
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Upload 2-3 writing examples or describe your brand tone. Our
                  Brand Kit learns in minutes.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f4e42a9da7b629bd1edcf7cc0965e148e6b8cfc4?width=588"
                alt="Activate Autopilot"
                className="w-full h-auto object-cover rounded-t-2xl"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  Activate Autopilot
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Set your publishing schedule. SEOengine handles keyword
                  research, writing, and publishing daily.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f4e42a9da7b629bd1edcf7cc0965e148e6b8cfc4?width=588"
                alt="Watch Traffic Grow"
                className="w-full h-auto object-cover rounded-t-2xl"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  Watch Traffic Grow
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Track rankings, traffic, and conversions in your dashboard.
                  Typical results: 200-400% organic growth by month 6.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
