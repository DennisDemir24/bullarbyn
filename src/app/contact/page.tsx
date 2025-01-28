import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Want to place an order? Contact us on Instagram!</p>
        <div className="mt-10 flex items-center justify-center">
          <Button asChild size="lg">
            <Link
              href="https://www.instagram.com/bullarbyn.bageri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Contact on Instagram
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

