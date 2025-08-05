"use client"; // Directive to mark this as a client component in Next.js App Router

import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

// Define the type for the props of the FormInput component
interface FormInputProps {
    label: string;
    placeholder: string;
    type?: string;
    optional?: boolean;
    isTextArea?: boolean;
    onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    viewExampleLink?: string;
}

// Helper component for form input fields remains the same
const FormInput: React.FC<FormInputProps> = ({
    label,
    placeholder,
    type = "text",
    optional = false,
    isTextArea = false,
    onFileChange,
    viewExampleLink
}) => {
    const inputId = label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    return (
        <div className="mb-4">
            <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
                {label} {optional && <span className="text-gray-500">(Optional)</span>}
            </label>
            {isTextArea ? (
                <textarea
                    id={inputId}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
                    rows={4}
                ></textarea>
            ) : type === 'file' ? (
                <div className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <span id={`${inputId}-filename`} className="text-gray-500 truncate pr-2">Upload your file</span>
                     <label htmlFor={inputId} className="cursor-pointer text-sm font-semibold text-blue-600 hover:underline shrink-0">
                        Browse
                    </label>
                    <input
                        type="file"
                        id={inputId}
                        className="hidden"
                        onChange={onFileChange}
                    />
                </div>
            ) : (
                <input
                    type={type}
                    id={inputId}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
                />
            )}
             {type === 'file' && viewExampleLink && (
                    <a href={viewExampleLink} target="_blank" rel="noopener noreferrer" className="mt-1 text-xs text-blue-600 hover:underline inline-block">
                        View Example
                    </a>
            )}
        </div>
    );
};


// Main page component for Next.js
const SparkfluencerPage: NextPage = () => {
    // Handler for file input changes with TypeScript event type
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const fileDisplayId = `${e.target.id}-filename`;
        const fileDisplayElement = document.getElementById(fileDisplayId);

        if (file && fileDisplayElement) {
            fileDisplayElement.textContent = file.name;
            console.log("Uploaded file:", file.name);
            // You can add logic here to handle the uploaded file
        }
    };

    return (
        <>
            <Head>
                <title>Spark-fluencer Program | Join Our Creator Community</title>
                <meta name="description" content="Join the Spark-fluencer Program and collaborate with Sparkorama. We're looking for passionate influencers and trendsetters in beauty and wellness." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white font-sans">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Spark-fluencer Program</h1>
                    </header>

                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column: Information */}
                        <div className="text-gray-700">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Inviting all influencers and today's trendsetters to get onboard as a <span className="font-bold">Spark-fluencer!</span>
                            </h2>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Join The Sparkorama Circle</h3>
                                <p>
                                    Ready to ignite your influence? We're building an exclusive community for creators who are passionate about beauty and wellness. This is more than a campaign; it's a platform to empower your creativity, amplify your unique voice, and connect with a network that celebrates your individuality.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Your Creator Perks:</h3>
                                <ul className="list-none space-y-2">
                                    <li><span className="text-[#ffc404] font-bold mr-2">&#8226;</span><span className="font-semibold">Experience Top Salons on Us:</span> Enjoy complimentary beauty and wellness services.</li>
                                    <li><span className="text-[#ffc404] font-bold mr-2">&#8226;</span><span className="font-semibold">Monetize Your Influence:</span> Earn competitive commissions through our affiliate program.</li>
                                    <li><span className="text-[#ffc404] font-bold mr-2">&#8226;</span><span className="font-semibold">Get the Spotlight:</span> Be featured across Sparkorama's official social media channels.</li>
                                    <li><span className="text-[#ffc404] font-bold mr-2">&#8226;</span><span className="font-semibold">Unlock VIP Access:</span> Receive exclusive offers and early access to new features.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Does this sound like you? We'd love to connect!</h3>
                                <ul className="list-none space-y-2">
                                     <li><span className="text-gray-800 font-bold mr-2">&#8226;</span>You have a public Instagram profile with over <span className="font-bold underline">10k engaged followers.</span></li>
                                    <li><span className="text-gray-800 font-bold mr-2">&#8226;</span>You're a natural at creating beautiful and engaging content.</li>
                                    <li><span className="text-gray-800 font-bold mr-2">&#8226;</span>You shine on camera and love making amazing Reels.</li>
                                    <li><span className="text-gray-800 font-bold mr-2">&#8226;</span>You're excited about the idea of an official Instagram collaboration with us.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Can't wait to join us?</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <FormInput label="Name*" placeholder="Your full name" />
                                <FormInput label="Contact*" placeholder="Your email or phone number" />
                                <FormInput label="Where are you based?* Area, city" placeholder="e.g., Bandra, Mumbai" />
                                <FormInput label="Your Instagram / Youtube handle*" placeholder="@yourhandle" />
                                <FormInput label="Approx followers / subscribers*" placeholder="e.g., 15k" />
                                <FormInput
                                    label="Attach screenshot of keen Women followers ratio*"
                                    type="file"
                                    placeholder=""
                                    onFileChange={handleFileChange}
                                    viewExampleLink="#"
                                />
                                 <FormInput
                                    label="Attach screenshot of Top cities*"
                                    type="file"
                                    placeholder=""
                                    onFileChange={handleFileChange}
                                    viewExampleLink="#"
                                />
                                 <FormInput
                                    label="Attach screenshot of age range*"
                                    type="file"
                                    placeholder=""
                                    onFileChange={handleFileChange}
                                    viewExampleLink="#"
                                />
                                <FormInput label="Tell us about you and your audience" isTextArea={true} optional={true} placeholder="What makes your content special?" />

                                <button
                                    type="submit"
                                    className="w-full bg-[#ffc404] text-gray-900 font-bold py-3 px-8 rounded-lg shadow-md hover:brightness-95 transition-all duration-300 transform hover:scale-105"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default SparkfluencerPage;
