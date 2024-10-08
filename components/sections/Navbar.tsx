"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./buttons/Button";
import Link from "next/link";

const Navbar = ({ isTicketSubdomain }: { isTicketSubdomain?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-white sticky top-0 z-30">
      <div className="container w-full bg-white py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="https://www.techignite.live/">
            <Image
              src="/icons/logo.svg"
              alt="Tech Ignite Logo"
              width={55}
              height={34}
              className="mr-3"
            />
          </Link>
          <div className="h-[34px] border-[#DEE2E6] border bg-black rounded-full"></div>
          <Image
            src="/icons/gdsc.svg"
            alt="Tech Ignite Logo"
            width={200.54}
            height={34}
            className="ml-3"
          />
        </div>

        <div className="md:hidden z-40" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div
          className={`${menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-10 md:items-center text-[#344363] fixed md:relative top-0 left-0 w-full h-full md:w-auto md:h-auto bg-white p-10 md:p-0`}
        >
          {!isTicketSubdomain && (
            <a href="#About" onClick={toggleMenu}>
              About Tech Ignite
            </a>
          )}
          {/* {!isTicketSubdomain && (
            <a href="#Schedule" onClick={toggleMenu}>
              Schedule
            </a>
          )} */}
          {!isTicketSubdomain && (
            <a href="#Speakers" onClick={toggleMenu}>
              Speakers
            </a>
          )}
          {!isTicketSubdomain && (
            <a href="#Sponsors" onClick={toggleMenu}>
              Sponsors
            </a>
          )}
          {/* {!isTicketSubdomain && (
            <a href="#Faqs" onClick={toggleMenu}>
              FAQs
            </a>
          )} */}
          <a
            target="_blank"
            href="https://gdsc.community.dev/university-of-uyo-uyo-nigeria/"
            onClick={toggleMenu}
          >
            Contact
          </a>

          <a
            href="https://lu.ma/event/evt-UkQmzgDlFU4DNoy"
            // className="luma-checkout--button"
            data-luma-action="checkout"
            data-luma-event-id="evt-UkQmzgDlFU4DNoy"
          >
            <Button onClick={toggleMenu}>Register Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
