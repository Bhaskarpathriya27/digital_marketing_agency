import Image from "next/image";
import {
  IconBrandTwitter,
  IconBrandTelegram,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="md:mx-20 px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://assets.aceternity.com/logo-dark.png"
                alt="logo"
                width={50}
                height={50}
              />
              <span className="font-medium text-2xl text-black dark:text-white">
                Startup
              </span>
            </div>
            <p className="mb-2 text-sm">Your Best Marketing Partner</p>
            <a
              href="mailto:hello@nextwave.com"
              className="text-lg font-semibold text-gray-900"
            >
              hello@nextwave.com
            </a>
          </div>

          {/* Column Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Pay-Per-Click Advertising
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Content Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  User Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Icons (Tabler Icons) */}
          <div className="flex space-x-4 text-gray-500">
            <a href="#" className="hover:text-gray-900">
              <IconBrandTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <IconBrandTelegram size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <IconBrandFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <IconBrandInstagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2024 Nextwave. All Rights Reserved.
          </p>

          {/* Terms & Conditions */}
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
