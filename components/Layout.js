import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Ecom' : 'Ecom - App'}</title>
        <meta
          name="description"
          content="A Ecommerce Application using NextJs and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              ECOM APP
            </Link>
            <div>
              <Link href="/cart" className="p-4">
                Cart
              </Link>
              <Link href="/login" className="p-4">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright © 2023 Ecom</p>
        </footer>
      </div>
    </>
  );
}
