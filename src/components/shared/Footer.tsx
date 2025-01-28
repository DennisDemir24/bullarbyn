import { Instagram } from "lucide-react"

const openingHours = [
  { days: "Tuesday - Friday", hours: "08–18" },
  { days: "Saturday", hours: "08–16" },
  { days: "Sunday", hours: "09–16" },
  { days: "Monday", hours: "Closed" },
]

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Address Section */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gray-900">Visit Us</h3>
            <a
              href="https://www.google.com/maps?q=Amiralsgatan+18,+211+55+Malmö"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm leading-6 text-gray-600 hover:text-brand-orange transition-colors"
            >
              <address className="not-italic">
                Amiralsgatan 18
                <br />
                211 55 Malmö
              </address>
            </a>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gray-900">Opening Hours</h3>
            <dl className="mt-4 space-y-1 text-sm text-gray-600">
              {openingHours.map((schedule) => (
                <div key={schedule.days} className="flex justify-between gap-4">
                  <dt className="flex-none">{schedule.days}</dt>
                  <dd className="text-right">{schedule.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Social Media & Links Section */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="mt-4 flex items-center space-x-4">
              <a
                href="https://www.instagram.com/bullarbyn.bageri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-orange transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Bullarbyn Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

