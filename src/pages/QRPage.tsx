import { QRCodeSVG } from "qrcode.react";

export default function QRPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-10 p-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-2">
          VIVIENNE
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-red-600">
          SABO
        </h1>
      </div>

      <div className="bg-white border-4 border-black p-8 flex flex-col items-center gap-6">
        <QRCodeSVG
          value="https://data-analytics-enhancer--preview.poehali.dev/"
          size={260}
          fgColor="#000000"
          bgColor="#ffffff"
        />
        <div className="w-full h-1 bg-red-600" />
        <p className="text-sm uppercase tracking-widest text-black font-bold">
          Сканируй и смотри сайт
        </p>
      </div>

      <p className="text-xs uppercase tracking-widest text-neutral-400">
        Французская косметика · viviennesabo.ru
      </p>
    </main>
  );
}
