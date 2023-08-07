import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <ul className="flex mb-4 md:order-1 md:mb-0">
            <li>
                <a href="mailto:mail@ericamterry.com" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
            </li>
            <li className="ml-6">
                <a href="https://github.com/erica-terry" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                    <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                </a>
            </li>
            <li className="ml-6">
                <a href="https://www.linkedin.com/in/ericamterry" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
            </li>
        </ul>
    );
}

