import React from 'react';
import Title from './Title';

const formUrl = "https://getform.io/f/dbb759d8-e372-44e5-8ebf-21550b9626ea";

function Contact(props) {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action={formUrl}
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Let's Talk</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-sky-300 dark:focus:outline-amber-300"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 my-5 bg-transparent border-2 rounded-md focus:outline-sky-300 dark:focus:outline-amber-300"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Inquiries"
                        rows="10"
                        cols="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-sky-300 dark:focus:outline-amber-300"
                    />
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md
                        text-white drop-shadow-xl bg-gradient-to-r from-sky-400 bg-emerald-400 
                        hover:outline-amber-400"
                    >
                        Let's Talk!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;