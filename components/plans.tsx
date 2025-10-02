import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    speed: "50",
    price: "60,00",
    features: [
      "Ideal para navegar e redes sociais",
      "Streaming em HD",
      "Até 3 dispositivos",
    ],
  },
  {
    name: "Padrão",
    speed: "90",
    price: "70,00",
    popular: true,
    features: [
      "Perfeito para trabalho e estudo",
      "Streaming em Full HD",
      "Até 5 dispositivos",
    ],
  },
  {
    name: "Premium",
    speed: "150",
    price: "80,00",
    features: [
      "Máxima velocidade para gamers",
      "Streaming em 4K",
      "Dispositivos ilimitados",
    ],
  },
];

export function Plans() {
  return (
    <section id="plans" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-[#7f3800] sm:text-5xl">
            Escolha Seu Plano
          </h2>
          <p className="text-pretty text-lg text-[#894a17]">
            Planos flexíveis para todas as necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border-2 bg-white p-8 ${
                plan.popular
                  ? "border-[#ffcc00] shadow-lg"
                  : "border-[#894a17]/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#ffcc00] px-4 py-1 text-xs font-semibold text-[#7f3800]">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center pb-6 border-b border-[#894a17]/10">
                <h3 className="text-xl font-bold text-[#7f3800] mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#7f3800]">
                    {plan.speed}
                  </span>
                  <span className="text-xl text-[#894a17]">MB</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-[#894a17]">R$</span>
                  <span className="text-3xl font-bold text-[#ffcc00]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[#894a17]">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 py-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-[#ffcc00] mt-0.5" />
                    <span className="text-sm text-[#7f3800]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5599981304269"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#ffcc00] text-[#7f3800] hover:bg-[#ffcc00]/90"
                    : "bg-[#7f3800] text-white hover:bg-[#894a17]"
                }`}
              >
                Assinar Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
