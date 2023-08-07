'use client'

import * as React from 'react';
import { useState } from "react";


const ContactForm: React.FC = () => {

    const [isSubmitted, updateIsSubmitted] = useState<boolean>(false)

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Submit form to email

        updateIsSubmitted(true)
    }

    return (
        <div className="text-center lg:text-left lg:max-w-xl">
            {!isSubmitted ? (
                <>
                    <h3 className="h3 text-white mb-2">Want to get in touch?</h3>
                    <p className="text-gray-300 text-lg mb-6">I hope you enjoyed exploring my portfolio!  If you have any inquiries, collaboration opportunities, or just want to connect, don't hesitate to reach out to my email <a className="text-blue-300" href="mailto:mail@ericamterry.com">mail@ericamterry.com</a> or use the provided contact form below. Happy coding!</p>
                    {/* CTA form */}
                    <form className="w-full lg:w-auto" onSubmit={(e) => submitForm(e)}>
                        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-lg lg:mx-0 pb-8">
                            <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Email" aria-label="Email" required />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-lg lg:mx-0 pb-8">
                            <input type="text" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="First Name" aria-label="First Name" required />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-lg lg:mx-0 pb-8">
                            <input type="text" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Last Name" aria-label="Last Name" required />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-lg lg:mx-0 pb-8">
                            <textarea className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Tell me about yourself!" aria-label="Tell me about yourself!" required></textarea>
                        </div>
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" type="submit">Submit</button>
                    </form>
                </>
            ) : (
                <>
                    {/* Success message */}
                    <h3 className="h3 text-white mb-2">Thanks for getting in touch!</h3>
                    <p className="text-gray-300 text-lg mb-6">I look forward to chatting and will get back to you shortly.</p>
                </>)
            }
        </div >
    );
}

export default ContactForm