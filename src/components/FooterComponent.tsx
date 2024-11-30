'use client';
import React from 'react';
import { Footer } from 'flowbite-react';

export const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <Footer container className="dark:bg-gray-900">
      <div className="w-screen max-w-[1536px] mx-auto text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#"
            src="/images/Logo.png"
            alt="Fifth Store Logo"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Ibinkwiye" year={year} />
      </div>
    </Footer>
  );
};
