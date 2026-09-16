"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@notafandv.info";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message before sending.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const subject = `Message from ${name} via Device Watch UK`;
    const body = `${message}\n\nFrom: ${name} (${email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
      <p className="text-sm text-dw-fg-muted">
        This form opens your email client with the message pre-filled, sent
        to {CONTACT_EMAIL}. Nothing is stored or sent by this website
        itself; you send the email yourself from your own mail app.
      </p>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dw-fg">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-dw-border bg-dw-bg-raised px-3 py-2 text-sm text-dw-fg placeholder:text-dw-fg-muted focus:border-dw-blue"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dw-fg">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-dw-border bg-dw-bg-raised px-3 py-2 text-sm text-dw-fg placeholder:text-dw-fg-muted focus:border-dw-blue"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dw-fg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-dw-border bg-dw-bg-raised px-3 py-2 text-sm text-dw-fg placeholder:text-dw-fg-muted focus:border-dw-blue"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="rounded-md bg-dw-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dw-blue-light"
      >
        Open email to send
      </button>

      <p className="text-xs text-dw-fg-muted">
        Prefer to email directly?{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-dw-blue-light hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  );
}
