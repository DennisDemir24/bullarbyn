import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-brand-yellow/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Story</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Bullarbyn, baking is our love language. We&apos;re more than just a bakery – we&apos;re a celebration of organic
              ingredients, traditional methods, and the joy of fresh-baked goods.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900">Our Ingredients</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We take pride in sourcing the finest ingredients from local suppliers. Our organic flour comes from
              Limabacka Kvarn, our butter from Thise, and our cheese from Almnäs Bruk. Every ingredient is carefully
              selected to ensure the highest quality in everything we bake.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900">Our Process</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We believe in the art of slow food and traditional baking methods. Our sourdough is crafted with patience
              and care, using 100% organic ingredients. From our Danish-inspired pastries to our Polish-influenced
              breads, each item is made by hand with attention to detail and respect for traditional techniques.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900">Our Philosophy</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sustainability is at the heart of what we do. From our zero-waste granola bowls made from leftover buns to
              our commitment to organic and local ingredients, we strive to make choices that are good for both our
              customers and our planet.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Focus Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  100% Focus on Quality
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Every item that leaves our bakery reflects our commitment to excellence. From our precious sourdough
                  organic bread to our seasonal focaccia toppings, we put quality first.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {[
                    {
                      name: "Organic Ingredients",
                      description:
                        "We use organic Swedish flour from Limabacka Kvarn, Danish organic butter from Thise, and aromatic Tegel cheese from Almnäs Bruk.",
                    },
                    {
                      name: "Seasonal Menu",
                      description:
                        "Our menu changes with the seasons, featuring toppings and ingredients from local farmers and producers.",
                    },
                    {
                      name: "Zero Waste Initiative",
                      description:
                        "We create delicious new products from leftover ingredients, like our popular granola bowl made from cinnamon and cardamom buns.",
                    },
                  ].map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div className="absolute left-1 top-1 h-5 w-5 text-brand-orange">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="inline"> {feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              alt="Fresh baked goods at Bullarbyn Bakery"
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="bg-brand-orange/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Visit Us in Malmö
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Come experience our fresh-baked goods and warm hospitality. Whether you&apos;re stopping by for a morning
              coffee, weekend brunch, or picking up your daily bread, we&apos;re here to serve you the best in artisanal
              baking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

