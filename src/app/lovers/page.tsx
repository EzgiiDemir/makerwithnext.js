"use client";
// pages/sevgiline-web-sitesi-yap.js
import Link from "next/link";

export default function Lovers() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Sevgiline Özel Web Sitesi Yap</h1>
      <img
        src="https://via.placeholder.com/400x300"
        alt="Sevgiline Web Sitesi Yap"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <p className="text-gray-700 mt-4 text-center">
        Sevgiline onunla ilgili fotoğraflar, anılar ve özel dokunuşlarla dolu
        bir web sitesi yaparak onu mutlu edebilirsin!
      </p>
      <p className="text-gray-700 mt-2 text-center">
        İşte sevgiline özel bir web sitesi nasıl yapacağınla ilgili adımlar:
      </p>
      <ol className="list-decimal list-inside text-left mt-4">
        <li>Onun en sevdiği fotoğrafları ve anıları topla.</li>
        <li>Kişisel mesajlar ve anılarla dolu bir sayfa tasarla.</li>
        <li>Ona özel bir alan adıyla siteyi yayına al.</li>
      </ol>
      <Link href="/">Geri Dön</Link>
    </div>
  );
}
