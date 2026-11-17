import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";

const articles = [
  {
    category: "LOCAL ROADS",
    date: "May 7, 2026",
    source: "Times Union",
    title: "The Catskills road that closes every winter",
    description: "Platte Clove Road connects Saugerties and Hunter, but its seasonal closure and commercial-vehicle restrictions make planning ahead essential.",
    image: "https://images.pexels.com/photos/30282411/pexels-photo-30282411.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative photo of a snow-covered mountain road lined with trees",
    url: "https://www.timesunion.com/hudsonvalley/catskills/article/platte-clove-road-seasonal-closure-22217531.php",
  },
  {
    category: "WINTER WEATHER",
    date: "January 25, 2026",
    source: "Times Union",
    title: "Major snowstorm brings travel restrictions to upstate New York",
    description: "A powerful winter storm brought travel disruptions across the region, with commercial-vehicle restrictions on the New York State Thruway and heavy snow forecast for the Catskills.",
    image: "https://images.pexels.com/photos/714482/pexels-photo-714482.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative photo of a bridge covered in snow during a winter storm",
    url: "https://www.timesunion.com/news/article/monster-snow-storm-slams-upstate-new-york-21314575.php",
  },
  {
    category: "TRUCKING & WEATHER",
    date: "December 2, 2025",
    source: "Times Union",
    title: "First winter storm makes roads hazardous across eastern New York",
    description: "Snow and crashes made travel difficult in the Capital Region and Hudson Valley, including a tractor-trailer crash that closed a road in Hoosick.",
    image: "https://images.pexels.com/photos/9348900/pexels-photo-9348900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative photo of a truck carrying logs along a rural road",
    url: "https://www.timesunion.com/weather/article/first-winter-storm-wallops-albany-hudson-valley-21218341.php",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="section-gradient pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-green-400 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-5">From the road & the woods</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">News from <span className="text-green-400">our neck of the woods.</span></h1>
          <p className="text-lg md:text-xl text-steel-grey-light leading-relaxed">Stories and updates on roads, trucking, and winter weather in the Catskills and beyond, selected for our Lanesville community.</p>
        </div>

        <div className="flex items-end justify-between border-b border-border pb-5 mb-8">
          <div>
            <p className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase mb-2">Worth the read</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Recent articles</h2>
          </div>
          <span className="text-sm text-steel-grey-light">03 stories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((article) => (
            <article key={article.url} className="group bg-card border border-border rounded-lg overflow-hidden flex flex-col hover-lift">
              <div className="overflow-hidden">
                <img src={article.image} alt={article.alt} className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide mb-4">
                  <span className="text-green-400">{article.category}</span>
                  <span className="text-steel-grey-light">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-snug mb-3">{article.title}</h3>
                <p className="text-steel-grey-light leading-relaxed text-sm mb-6">{article.description}</p>
                <div className="mt-auto pt-5 border-t border-border flex justify-between items-center gap-4">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold text-sm inline-flex items-center gap-2 hover:underline">Read article <ArrowUpRight className="w-4 h-4" /></a>
                  <span className="text-xs text-steel-grey-light">{article.source}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 border border-border rounded-lg bg-card/70 p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase mb-2">Need a hand?</p>
            <h2 className="text-2xl font-bold text-foreground mb-2">Let's get to work.</h2>
            <p className="text-steel-grey-light">For logging and trucking services in Lanesville and across New York, get in touch.</p>
          </div>
          <a href="tel:+15182497069" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">Call (518) 249-7069 <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Blog;
