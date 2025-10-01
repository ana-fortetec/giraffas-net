export function Hero() {
  return (
    <section id="home" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-[#7f3800] sm:text-6xl md:text-7xl">
            Sua Internet nas <span className="text-[#ffcc00]">Alturas</span>
          </h1>

          <p className="mb-12 text-pretty text-lg text-[#894a17] md:text-xl">
            Conecte-se com velocidade e estabilidade. Internet fibra óptica a partir de R$ 60,00 por mês.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#plans"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-[#ffcc00] px-10 text-base font-semibold text-[#7f3800] hover:bg-[#ffcc00]/90 transition-all"
            >
              Ver Planos
            </a>
            <a
              href="https://wa.me/5599984264983"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-[#7f3800] bg-white px-10 text-base font-semibold text-[#7f3800] hover:bg-[#7f3800] hover:text-white transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
