import { Link } from "react-router-dom";

export default function Home() {
  const categories = [
    { name: "Men's Fashion", icon: "👔" },
    { name: "Women's Fashion", icon: "👗" },
    { name: "Jewelry", icon: "💎" },
    { name: "Electronics", icon: "💻" },
  ];

  const features = [
    {
      title: "Free Delivery",
      desc: "Fast & free shipping on selected orders.",
      icon: "🚚",
    },
    {
      title: "Secure Payment",
      desc: "100% safe and trusted checkout.",
      icon: "🔒",
    },
    {
      title: "Best Quality",
      desc: "Top-rated products from trusted brands.",
      icon: "⭐",
    },
    {
      title: "Easy Returns",
      desc: "7-day hassle-free return policy.",
      icon: "↩️",
    },
  ];

  const offers = [
    {
      title: "Summer Sale",
      desc: "Up to 50% off on trending fashion.",
      color:
        "from-pink-500 to-rose-500 dark:from-pink-700 dark:to-red-700",
    },
    {
      title: "Electronics Fest",
      desc: "Latest gadgets at best prices.",
      color:
        "from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-900",
    },
    {
      title: "Luxury Jewelry",
      desc: "Exclusive premium collections.",
      color:
        "from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-700",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-950 text-black dark:text-white transition duration-300 overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-gray-950 dark:via-gray-900 dark:to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="inline-block uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-yellow-300 bg-white/10 dark:bg-white/5 px-5 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md mb-4">  
              ✨ Welcome to eStore
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
              Shop Smarter,
              <br />
              Live Better 🛍️
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-100 max-w-xl mx-auto md:mx-0">
              Discover fashion, gadgets, jewelry and daily
              essentials with unbeatable deals and premium
              quality.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/products"
                className="bg-white text-indigo-700 px-7 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/wishlist"
                className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition"
              >
                Wishlist
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  10K+
                </h3>
                <p className="text-xs sm:text-sm text-gray-200">
                  Happy Users
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  500+
                </h3>
                <p className="text-xs sm:text-sm text-gray-200">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  24/7
                </h3>
                <p className="text-xs sm:text-sm text-gray-200">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
                alt="hero"
                className="rounded-2xl h-[260px] sm:h-[360px] md:h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                {item.icon}
              </div>

              <h3 className="text-sm sm:text-xl font-bold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white dark:bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center hover:shadow-xl transition bg-gray-50 dark:bg-gray-950"
              >
                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Special Offers 🔥
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${offer.color} text-white rounded-3xl p-7 shadow-xl`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                {offer.title}
              </h3>

              <p className="mb-6 text-sm sm:text-base">
                {offer.desc}
              </p>

              <Link
                to="/products"
                className="bg-white text-black px-5 py-2 rounded-full font-semibold inline-block"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-black to-gray-800 dark:from-gray-900 dark:to-black text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold mb-5">
            Ready to Start Shopping?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Browse premium collections and enjoy a smooth
            online shopping experience.
          </p>

          <Link
            to="/products"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition inline-block"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
}