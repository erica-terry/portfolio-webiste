import Logo from './logo'
import Social from './socials'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <Social />
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; ericamterry.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
