export function CTA() {
  return (
    <section className="bg-[#7f3800] py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Conecte-se com velocidade, estabilidade e confiança
          </h2>
          <p className="mb-10 text-pretty text-lg text-white/90">
            Planos de internet fibra óptica a partir de R$ 60,00 por mês.
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
              className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-white bg-transparent px-10 text-base font-semibold text-white hover:bg-white hover:text-[#7f3800] transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
