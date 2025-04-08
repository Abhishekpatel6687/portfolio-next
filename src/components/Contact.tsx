"use client";

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { Meteors } from "@/components/ui/meteors";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Minimum 10 characters"),
});

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function Page() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { 
      errors,
      // isValid
    },
    setFocus,
  } = useForm<ContactFormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0] as keyof ContactFormValues;
      setFocus(firstErrorField);
    }
  }, [errors, setFocus]);

  const onValidSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/abhishekpatel6687@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(
          "Something went wrong, but your message might have been sent."
        );
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br to-green-950 from-black text-white">
      <Toaster position="top-right" />
      <div className="absolute hidden md:flex justify-start items-end z-10 h-full">
        <Multimedia />
      </div>

      <div className="flex justify-between items-center">
        <Meteors number={60} className="z-10" />

        <div className="w-[96%] min-h-screen flex justify-center items-center">
          <div className="z-20 p-6 sm:p-8 w-[80rem] mt-4 text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Take a coffee & chat with me
            </h1>
            <p className="xl:block hidden text-sm text-gray-400 mb-8">
              We&apos;re here to help! Drop us a message and we&apos;ll get back
              to you soon.
            </p>

            <div className="flex  flex-col xl:mt-16 md:px-2 md:flex-row md:py-5">
              <div className="text-black flex md:w-1/2 p-4 rounded-xl flex-col gap-4 mb-4">
                <div className="flex flex-wrap justify-between gap-4">
                  <a
                    href="mailto:abhishekpatel6687@gmail.com"
                    className="flex gap-2 px-2 py-2 rounded-lg bg-pink-50 items-center hover:bg-pink-100"
                  >
                    <Image src="/Image/gmail.png" width={34} height={34} alt="Gmail Icon" />
                    <p className="text-sm">abhishekpatel6687@gmail.com</p>
                  </a>
                  <a
                    href="tel:+917071326687"
                    className="flex gap-1 pr-24 pl-1 py-2 rounded-lg bg-green-100 items-center hover:bg-green-200"
                  >
                    <Image src="/Image/mobile.png" width={34} height={34} alt="Phone Icon" />
                    <p className="text-sm">+91 7071326687</p>
                  </a>
                </div>

                <div className="flex gap-1 px-2 py-2 rounded-lg bg-green-50 items-center hover:bg-green-100">
                  <Image src="/Image/mobile.png" width={34} height={34} alt="Location Icon" />
                  <p className="text-sm">Dwarika sector-8, Delhi, 110077</p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-48 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.979465468172!2d81.01013577425218!3d26.808782464551367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb177ba59213%3A0xfd12dad33afbc85d!2sPhoenix%20Palassio!5e0!3m2!1sen!2sin!4v1695056337657!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onValidSubmit)}
                className="space-y-4 text-start text-black flex md:w-1/2 p-4 rounded-xl flex-col"
              >
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full h-12 px-4 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">
                    {errors.name.message}
                  </span>
                )}

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email"
                  className="w-full h-12 px-4 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}

                <textarea
                  {...register("message")}
                  placeholder="Your Message"
                  className="w-full h-32 px-4 py-2 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
                ></textarea>
                {errors.message && (
                  <span className="text-red-600 text-sm">
                    {errors.message.message}
                  </span>
                )}

                <button
                  type="submit"
                  // disabled={!isValid}
                  className="bg-green-700 w-40 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-black z-10 flex justify-end items-center">
          <PageLink id={5} />
        </div>
      </div>
    </div>
  );
}
