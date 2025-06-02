import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tokopediaUrl: string;
  whatsappNumber: string;
  className?: string;
}

export default function ProductCard({
  name,
  description,
  price,
  imageUrl,
  tokopediaUrl,
  whatsappNumber,
  className = '',
}: ProductCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/fallback.png';
  };

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ingin memesan produk *${name}* seharga Rp${price.toLocaleString('id-ID')}.`
  )}`;

  return (
    <div className={`shadow-md rounded-md border ${className}`}>
      <div className="p-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover mb-4"
          onError={handleImageError}
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-green-600 font-bold mt-2">Rp{price.toLocaleString('id-ID')}</p>

        <div className="mt-4 flex gap-3">
          <a
            href={tokopediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition"
          >
            {/* TokopediaLogo SVG di sini jika mau */}
            Checkout Tokopedia
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition"
          >
            {/* WhatsAppLogo SVG di sini jika mau */}
            Checkout WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
