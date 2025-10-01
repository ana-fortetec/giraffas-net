import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#894a17]/20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Giraffas Net" width={50} height={50} className="rounded-lg" />
              <div>
                <h3 className="font-bold text-[#7f3800]">GIRAFFAS NET</h3>
                <p className="text-xs text-[#894a17]">Sua Internet nas Alturas</p>
              </div>
            </div>
            <p className="text-sm text-[#894a17] leading-relaxed">Conectando você ao que realmente importa.</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#7f3800]">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-[#894a17] hover:text-[#ffcc00] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#plans" className="text-[#894a17] hover:text-[#ffcc00] transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#894a17] hover:text-[#ffcc00] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#7f3800]">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#ffcc00] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a
                    href="https://wa.me/5599984264983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#894a17] hover:text-[#ffcc00] transition-colors"
                  >
                    (99) 98426-4983
                  </a>
                  <a
                    href="https://wa.me/5599981304269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#894a17] hover:text-[#ffcc00] transition-colors"
                  >
                    (99) 98130-4269
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ffcc00] shrink-0" />
                <span className="text-[#894a17]">contato@giraffasnet.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#ffcc00] mt-0.5 shrink-0" />
                <span className="text-[#894a17]">Atendemos toda a região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#894a17]/20 pt-8 text-center">
          <p className="text-sm text-[#894a17]">
            © {new Date().getFullYear()} Giraffas Net. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
