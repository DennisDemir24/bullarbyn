import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="relative isolate bg-[#fefcf3]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Bullarbyn Bakery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We bake our favorite recipes from all over Europe with local organic ingredients in the heart of Malmö.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="https://www.instagram.com/bullarbyn.bageri/">
                  View Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Specialties
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From traditional Polish pastries to modern interpretations, every item is baked fresh daily using the
              finest ingredients in our local bakery.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Fresh Daily",
                  description:
                    "All our products are baked fresh every morning using traditional recipes and techniques.",
                },
                {
                  name: "Polish Inspiration",
                  description: "We bring authentic Polish flavors and combine them with modern baking innovations.",
                },
                {
                  name: "Local Ingredients",
                  description: "We source our ingredients from local suppliers to ensure the highest quality.",
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="font-display text-xl font-semibold leading-7 text-gray-900">{feature.name}</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-brand-orange/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Weekend Brunch at Bullarbyn
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join us every weekend for a delightful brunch experience featuring our artisanal breads, organic
                ingredients, and locally sourced products.
              </p>
              <dl className="mt-8 space-y-6 text-base leading-7 text-gray-600">
                  <dt className="font-display text-lg font-semibold text-gray-900">When?</dt>
                  <dd className="mt-1">Saturday 08–16 & Sunday 09–16</dd>
                <div>
                  <dt className="font-display text-lg font-semibold text-gray-900">What to expect?</dt>
                  <dd className="mt-1">
                    From our famous &apos;Bolle med ost&apos; to our zero-waste granola bowl, we offer a unique blend of Danish
                    and Swedish breakfast traditions using the finest organic ingredients.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <Image
                src={"/images/brunch-menu.jpeg"}
                alt="Bullarbyn Brunch Menu featuring various breakfast options including Danish pastries and organic sourdough"
                width={800}
                height={1000}
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

