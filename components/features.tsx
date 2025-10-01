import { Wifi, Zap, Headphones } from "lucide-react"

const features = [
  {
    icon: Wifi,
    title: "Conexão Estável",
    description: "Fibra óptica de alta qualidade",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Velocidade para toda família",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento sempre disponível",
  },
]

export function Features() {
  return (
    <section className="bg-[#894a17] py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Por Que Escolher a Giraffas Net?
          </h2>
          <p className="text-pretty text-lg text-white/90">
            Mais do que internet, oferecemos uma experiência completa de conectividade
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="mb-6 rounded-full bg-[#ffcc00] p-4">
                  <Icon className="h-8 w-8 text-[#7f3800]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
