"use client";
import React, { useState } from "react";
import { Header } from "./Navbar";
import SmoothScrollProvider from "./SmoothScrollProvider";
import QuoteModal from "./QuoteModal";
import Footer from "./Footer";
import { useModal } from "@/context/ModalContext";

export default function MainLayout({ children }) {
  const { isModalOpen, setIsModalOpen } = useModal();
  return (
    <>
      <Header onQuoteClick={() => setIsModalOpen(true)} />

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
      <Footer />
    </>
  );
}
