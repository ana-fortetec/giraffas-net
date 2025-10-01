import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
            <Image
              src="/giraffas-logo-3.jpg"
              alt="Giraffas Net Logo"
              fill
              className="rounded-[10px]"
              sizes="(max-width: 768px) 60px, 50px"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-[#7f3800]">GIRAFFAS NET</h1>
            <p className="text-xs text-[#894a17]">Sua Internet nas Alturas</p>
          </div>
        </div>

        <nav className="hidden md:flex flex-grow items-center justify-center gap-8 lg:mr-24">
          <a
            href="#home"
            className="text-sm font-medium text-[#7f3800] hover:text-[#ffcc00] transition-colors"
          >
            Início
          </a>
          <a
            href="#plans"
            className="text-sm font-medium text-[#7f3800] hover:text-[#ffcc00] transition-colors"
          >
            Planos
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[#7f3800] hover:text-[#ffcc00] transition-colors"
          >
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/5599984264983"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-[#7f3800] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#894a17] transition-colors"
        >
          <span>Assinar</span>
        </a>
      </div>
    </header>
  );
}
