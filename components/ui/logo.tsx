import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img width="36" height="36" src="images/erica-terry-logo.svg" alt="Erica Terry Logo" />
    </Link>
  )
}
