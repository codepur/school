import Image from "next/image";

const blogPosts = [
  {
    src: "/images/Image (2).png",
    title: "Annual Day Celebrations 2024",
    excerpt:
      "A spectacular showcase of talent and creativity by our students during the annual day celebrations.",
    date: "March 15, 2024",
  },
  {
    src: "/images/Image (3).png",
    title: "Science Exhibition Winners",
    excerpt:
      "Our students won multiple awards at the inter-school science exhibition held last month.",
    date: "February 28, 2024",
  },
  {
    src: "/images/Image (4).png",
    title: "Sports Day Highlights",
    excerpt:
      "An exciting day of athletic competitions, teamwork, and sportsmanship on the school grounds.",
    date: "January 20, 2024",
  },
];

export default function FromTheSchool() {
  return (
    <section className="py-16 md:py-24 bg-school-cream">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-dark">
              From the School
            </h2>
          </div>
          {/* Decorative */}
          <div className="hidden md:block">
            <Image
              src="/images/Vector 6.svg"
              alt=""
              width={29}
              height={47}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-school-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">
                  {post.date}
                </p>
                <h3 className="text-base font-bold text-school-dark mb-2 group-hover:text-school-maroon transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
