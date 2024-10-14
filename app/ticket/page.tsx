"use client";
import html2canvas from "html2canvas";
import React, { useRef } from "react";

import Ticket from "@/components/ticket/ticket";
import { Button } from "@/components/ui/Button";

const TicketPage = () => {
  const ticketRef = useRef(null);

  const handleDownload = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      link.href = dataUrl;
      link.download = "ticket.png";
      link.click();
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-pink-500">
      <div ref={ticketRef}>
        <Ticket />
      </div>
      <Button size="sm" className="mt-5" onClick={handleDownload}>
        Download Ticket
      </Button>
    </div>
  );
};

export default TicketPage;
