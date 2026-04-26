import React, { useState, useEffect } from 'react';
import { Search, Menu, ChevronRight, TrendingUp, Facebook, Instagram, Twitter, Mail, X, ChevronLeft, ShoppingCart, Star, Smartphone, Home, Shirt, Heart, Info, Headset, Utensils, Flame, Zap, ShoppingBag, Tag, Share2, Check, ZoomIn, ChevronDown, Gamepad2, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';

// --- GOOGLE ANALYTICS ---
const gaId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || 'G-JM30T34J0X';

const useGoogleAnalytics = (id: string | undefined) => {
  useEffect(() => {
    if (!id || typeof window === 'undefined') return;

    // Google Tag (gtag.js)
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [id]);
};

// --- UTILS ---
const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  const cleaned = priceStr.replace('R$', '').replace('.', '').replace(',', '.').trim();
  return parseFloat(cleaned) || 0;
};

// --- DATA: EDITABLE CONTENT ---
const LOGO_URL = 'https://i.postimg.cc/fLhv5N5c/mercado-compras.png';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xwvawwar');

  if (state.succeeded) {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="bg-green-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto text-green-500">
          <ChevronRight size={32} className="rotate-[-90deg]" /> 
        </div>
        <h3 className="text-xl font-bold text-gray-900">Mensagem Enviada!</h3>
        <p className="text-gray-600">Obrigado pelo contato. Responderemos em breve no seu e-mail.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-ml-blue font-bold hover:underline mt-4"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p>Tem alguma dúvida, sugestão ou deseja anunciar conosco? Entre em contato através do formulário abaixo ou pelos nossos canais oficiais.</p>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
          <input 
            id="name"
            name="name"
            type="text" 
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-ml-blue outline-none transition-all" 
            placeholder="Seu nome" 
          />
          <ValidationError prefix="Nome" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
          <input 
            id="email"
            name="email"
            type="email" 
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-ml-blue outline-none transition-all" 
            placeholder="seu@email.com" 
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Mensagem</label>
          <textarea 
            id="message"
            name="message"
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-ml-blue outline-none transition-all h-32" 
            placeholder="Como podemos ajudar?"
          ></textarea>
          <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <button 
          type="submit" 
          disabled={state.submitting}
          className="btn-blue w-full flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : 'Enviar Mensagem'}
        </button>
        {state.errors && (
          <div className="space-y-2">
            <p className="text-red-500 text-sm text-center">Ocorreu um erro ao enviar.</p>
            <p className="text-gray-500 text-[10px] text-center leading-tight">
              Verifique os campos acima ou tente novamente mais tarde.
            </p>
          </div>
        )}
      </form>

      <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm">
          <Mail size={18} className="text-ml-blue" />
          <span className="font-medium">regisroneynr@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

const MODAL_CONTENT: Record<string, { title: string; content: React.ReactNode }> = {
  about: {
    title: "Quem Somos",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>O Mercado Compras é um site de recomendações de produtos que atua como afiliado do Mercado Livre. Nosso objetivo é ajudar você a encontrar ofertas, promoções e produtos interessantes de forma rápida, prática e segura.</p>
        <p>Não somos uma loja virtual tradicional. O Mercado Compras não realiza vendas diretas, não processa pagamentos e não faz entregas. Nosso papel é divulgar produtos e direcionar você para o site oficial do Mercado Livre, onde a compra é efetivamente realizada.</p>
        <p>Trabalhamos com plataformas confiáveis e buscamos sempre apresentar produtos relevantes, com boas avaliações e preços competitivos. No entanto, todas as informações detalhadas, como prazo de entrega, garantia, trocas e suporte, são de responsabilidade exclusiva do Mercado Livre onde a compra é finalizada.</p>
        <p>Ao clicar em um produto em nosso site, você será redirecionado para o site do Mercado Livre. Podemos receber uma comissão por essa indicação, sem custo adicional para você.</p>
        <p>Nosso compromisso é oferecer uma experiência simples, transparente e útil para nossos visitantes.</p>
        <p>Se tiver dúvidas, entre em contato conosco através dos canais disponíveis no site.</p>
        <p className="font-bold">Mercado Compras – Facilitando suas escolhas online.</p>
      </div>
    )
  },
  privacy: {
    title: "Política de Privacidade",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o Mercado Compras coleta, utiliza e protege suas informações.</p>
        <h3 className="font-bold text-gray-900 mt-4">1. Coleta de informações</h3>
        <p>Podemos coletar informações básicas, como:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Dados de navegação (cookies)</li>
          <li>Endereço IP</li>
          <li>Informações fornecidas voluntariamente (ex: email em newsletter)</li>
        </ul>
        <h3 className="font-bold text-gray-900 mt-4">2. Uso das informações</h3>
        <p>As informações coletadas são utilizadas para:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Melhorar a experiência do usuário</li>
          <li>Personalizar conteúdo e ofertas</li>
          <li>Analisar o desempenho do site</li>
        </ul>
        <h3 className="font-bold text-gray-900 mt-4">3. Cookies</h3>
        <p>Utilizamos cookies para melhorar a navegação e exibir conteúdos relevantes. Você pode desativá-los nas configurações do seu navegador.</p>
        <h3 className="font-bold text-gray-900 mt-4">4. Links de terceiros</h3>
        <p>O Mercado Compras contém links para sites externos (como o Mercado Livre). Não temos controle sobre esses sites e não somos responsáveis por suas políticas de privacidade ou práticas.</p>
        <h3 className="font-bold text-gray-900 mt-4">5. Afiliados</h3>
        <p>Nosso site utiliza links de afiliados. Ao clicar nesses links, você será redirecionado para sites terceiros, onde a compra será realizada. Podemos receber comissões por essas indicações.</p>
        <h3 className="font-bold text-gray-900 mt-4">6. Segurança</h3>
        <p>Adotamos medidas para proteger suas informações, mas não podemos garantir segurança absoluta na internet.</p>
        <h3 className="font-bold text-gray-900 mt-4">7. Alterações</h3>
        <p>Esta política pode ser atualizada a qualquer momento, sem aviso prévio.</p>
        <h3 className="font-bold text-gray-900 mt-4">8. Contato</h3>
        <p>Se tiver dúvidas sobre esta política, entre em contato pelos canais disponíveis no site.</p>
        <p className="font-bold">Mercado Compras – Transparência e respeito à sua privacidade.</p>
      </div>
    )
  },
  terms: {
    title: "Termos de Uso",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>Ao acessar e utilizar o site Mercado Compras, você concorda com os termos e condições abaixo:</p>
        <h3 className="font-bold text-gray-900 mt-4">1. Natureza do serviço</h3>
        <p>O Mercado Compras é um site de divulgação de produtos como afiliado. Não vendemos produtos diretamente, não realizamos cobranças e não efetuamos entregas.</p>
        <h3 className="font-bold text-gray-900 mt-4">2. Responsabilidade sobre compras</h3>
        <p>Todas as compras são realizadas em sites de terceiros. Portanto:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Não somos responsáveis por pagamentos</li>
          <li>Não realizamos entregas</li>
          <li>Não nos responsabilizamos por atrasos, extravios ou problemas logísticos</li>
          <li>Não fazemos trocas ou devoluções</li>
        </ul>
        <p>Qualquer problema com o produto deve ser resolvido diretamente com o Mercado Livre (onde a compra foi finalizada).</p>
        <h3 className="font-bold text-gray-900 mt-4">3. Informações dos produtos</h3>
        <p>Buscamos manter informações atualizadas, porém:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Preços podem mudar sem aviso</li>
          <li>Disponibilidade pode variar</li>
          <li>Informações completas devem ser verificadas no site do Mercado Livre</li>
        </ul>
        <h3 className="font-bold text-gray-900 mt-4">4. Links externos</h3>
        <p>Nosso site contém links para terceiros. Não temos controle sobre o conteúdo, políticas ou práticas desses sites.</p>
        <h3 className="font-bold text-gray-900 mt-4">5. Uso do site</h3>
        <p>Você concorda em utilizar o site de forma legal, ética e sem violar direitos de terceiros.</p>
        <h3 className="font-bold text-gray-900 mt-4">6. Propriedade intelectual</h3>
        <p>Todo o conteúdo do site (textos, layout, design) pertence ao Mercado Compras, salvo quando indicado.</p>
        <h3 className="font-bold text-gray-900 mt-4">7. Alterações dos termos</h3>
        <p>Os termos podem ser atualizados a qualquer momento, sem aviso prévio.</p>
        <h3 className="font-bold text-gray-900 mt-4">8. Aceitação</h3>
        <p>Ao continuar utilizando o site, você declara estar de acordo com estes termos.</p>
        <p className="font-bold">Mercado Compras – Informação clara para decisões seguras.</p>
      </div>
    )
  },
  contact: {
    title: "Contato",
    content: <ContactForm />
  }
};

const CAROUSEL_PRODUCTS = [
  {
    isFullImage: true,
    imageUrl: "https://i.postimg.cc/PrFztVpT/copa-do-mundo-2026-album-capa-brochura-fifa-world-cup-2026.png",
    affiliateLink: "https://meli.la/2Mp7TWG",
    badge: "",
    releaseDate: "",
    title: "",
    price: "",
    installments: ""
  },
  {
    isFullImage: true,
    imageUrl: "https://i.postimg.cc/QM93B96m/tudo-que-voce-precisa-em-um-so-lugar.png",
    affiliateLink: "internal:all",
    badge: "",
    releaseDate: "",
    title: "",
    price: "",
    installments: ""
  },
  {
    isFullImage: true,
    imageUrl: "https://i.postimg.cc/sDX2z8Kb/super-ofertas-casa-e-cozinha.png",
    affiliateLink: "internal:casa-e-cozinha",
    badge: "",
    releaseDate: "",
    title: "",
    price: "",
    installments: ""
  }
];

const CATEGORIES = [
  {
    id: "eletronicos",
    title: "ELETRÔNICOS",
    icon: <Smartphone size={32} />,
    products: [
      { 
        id: 4, 
        name: "Barbeador E Cortador De Cabelo 3 Em 1 Kemei Km-6558", 
        originalPrice: "R$ 139,90",
        price: "R$ 48,89", 
        discount: "65% OFF",
        rating: "4.6",
        reviewsCount: "13519",
        isBestSeller: true,
        subTitle: "1º em Barbeadores Elétricos",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_638009-MLU77163689638_072024-F.webp", 
        link: "https://meli.la/2Nyg73S" 
      },
      { 
        id: 3, 
        name: "Celular Samsung Galaxy A07 128gb, 4gb, Câmera 50mp, Tela 6.7 , Proteção Ip54, Processador 6nm - Violeta", 
        originalPrice: "R$ 899,00",
        price: "R$ 599,40", 
        discount: "33% OFF",
        installments: "10x R$ 66,60 sem juros",
        rating: "4.9",
        reviewsCount: "56595",
        isBestSeller: true,
        subTitle: "1º em Celulares e Telefones",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_765861-MLA95532186080_102025-F.webp", 
        link: "https://meli.la/1jcuMtw" 
      },
      { 
        id: 2, 
        name: "Fechadura Digital Inteligente Biométrica Senha Eletronica Touch Com Tuya Wifi Para Casa/hotel Adequado Para Portas Esquerdas/direitas Com Chaves+cartões Ic Cor Preto", 
        originalPrice: "R$ 519,98",
        price: "R$ 265,19", 
        discount: "48% OFF",
        installments: "12x R$ 25,94",
        rating: "4.7",
        reviewsCount: "37",
        isBestSeller: true,
        subTitle: "4º em Digitais Genérica",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_758484-MLA108861879013_032026-F.webp", 
        link: "https://meli.la/1vARj2V" 
      },
      { 
        id: 1, 
        name: "Novo Echo Dot 5ª Geração com Relógio | Smart Speaker com Alexa", 
        originalPrice: "R$ 549,00",
        price: "R$ 428,00", 
        discount: "22% OFF",
        installments: "12x R$ 41,39",
        rating: "4.9",
        reviewsCount: "22220",
        isBestSeller: true,
        subTitle: "1º em Assistentes Pessoais",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_929868-MLA99520021024_112025-F.webp", 
        link: "https://meli.la/15nyeTH" 
      },
    ]
  },
  {
    id: "casa-e-cozinha",
    title: "CASA E COZINHA",
    icon: <Utensils size={32} />,
    products: [
      { 
        id: 209, 
        name: "Kit Jogo De Facas Inox Corte Afiado Antiaderente Presente Cor Marrom-escuro", 
        originalPrice: "R$ 129,99",
        price: "R$ 74,19", 
        discount: "42% OFF",
        installments: "12x R$ 7,31",
        rating: "4.8",
        reviewsCount: "14460",
        isBestSeller: true,
        subTitle: "1º em Facas e Cutelos",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_876550-MLA99498421420_112025-F.webp", 
        link: "https://meli.la/2LCWacp" 
      },
      { 
        id: 206, 
        name: "Varal De Chão Grande De Roupas 3 Andares Dobrável Cor Azul Kontuz 170 cm", 
        originalPrice: "R$ 119,90",
        price: "R$ 72,90", 
        discount: "39% OFF",
        installments: "12x R$ 7,18",
        rating: "4.6",
        reviewsCount: "86101",
        isBestSeller: true,
        subTitle: "1º em Varais",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_712866-MLA109482654866_042026-F.webp", 
        link: "https://meli.la/2BVqijb" 
      },
      { 
        id: 205, 
        name: "Protetor De Colchão Impermeável Solteiro Matelado Resistente A Líquidos Antiácaro Antialérgico Branco", 
        originalPrice: "R$ 69,98",
        price: "R$ 34,98", 
        discount: "50% OFF",
        rating: "4.4",
        reviewsCount: "20885",
        isBestSeller: true,
        subTitle: "1º em Protetores para Colchões",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_727727-MLA99975530551_112025-F.webp", 
        link: "https://meli.la/2ehbPPt" 
      },
      { 
        id: 200, 
        name: "Garrafa Térmica Água Squeeze Inox Academia Quente e Frio", 
        originalPrice: "R$ 59,90",
        price: "R$ 36,54", 
        discount: "38% OFF",
        rating: "4.8", 
        reviewsCount: "46647", 
        isBestSeller: true,
        subTitle: "1º em Garrafas de Café",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_963485-MLB94579785063_102025-F-800mlgarrafa-termica-agua-squeeze-inox-academiaquente-e-frio.webp", 
        link: "https://meli.la/1yL2vsb" 
      },
      { 
        id: 8, 
        name: "Kit 24 Talheres Luxo Premium Faqueiro Dourado Com Maleta", 
        originalPrice: "R$ 120,89",
        price: "R$ 71,06", 
        discount: "41% OFF",
        installments: "12x R$ 7,00",
        rating: "4.9",
        reviewsCount: "133",
        isBestSeller: true,
        subTitle: "2º em Faqueiros",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_665982-MLB88943084362_082025-F.webp", 
        link: "https://meli.la/1SP5z48" 
      },
      { 
        id: 7, 
        name: "Guarda Roupa Dobrável Organizador Colmeia Preto 8 Prateleiras IRSINA", 
        originalPrice: "R$ 138,00",
        price: "R$ 97,45", 
        discount: "29% OFF",
        installments: "12x R$ 9,60",
        rating: "4.6",
        reviewsCount: "3413",
        isBestSeller: true,
        subTitle: "2º em Organizadores de Roupa Intima",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_938828-MLA99418141062_112025-F.webp", 
        link: "https://meli.la/1Fnqp2q" 
      },
      { 
        id: 6, 
        name: "Ventilador Arno X-treme 9 Mesa 40cm Ve90", 
        originalPrice: "R$ 459,99",
        price: "R$ 289,00", 
        discount: "37% OFF",
        installments: "6x R$ 48,17 sem juros",
        rating: "4.8",
        reviewsCount: "9085",
        isBestSeller: true,
        subTitle: "11º em Ar e Ventilação",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_686594-MLA99930624347_112025-F.webp", 
        link: "https://meli.la/2FAGbni" 
      },
      { 
        id: 5, 
        name: "Jogo Talheres Faqueiro Búzios Aço Inox 24 Peças Tramontina", 
        originalPrice: "R$ 108,99",
        price: "R$ 63,25", 
        discount: "41% OFF",
        installments: "12x R$ 6,23",
        rating: "4.8",
        reviewsCount: "39503",
        isBestSeller: true,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_885228-MLA105354697197_012026-F.webp", 
        link: "https://meli.la/1njxMxH" 
      },
      { 
        id: 101, 
        name: "Copo Térmico Gigante 1,2l Inox Com Tampa E Inox Canudo", 
        originalPrice: "R$ 99,98",
        price: "R$ 48,98", 
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_952523-MLB109996174757_042026-F-copo-termico-gigante-12l-inox-com-tampa-e-inox-canudo.webp", 
        link: "https://meli.la/1GBQdcv", 
        discount: "51% OFF", 
        rating: "4.9", 
        reviewsCount: "5238", 
        isBestSeller: true,
        subTitle: "2º em Canecas e Copos Térmicos"
      },
    ]
  },
  {
    id: "moda",
    title: "MODA",
    icon: <Shirt size={32} />,
    products: [
      { 
        id: 210, 
        name: "Kit 10 Peças De Roupa Conjunto Infantil Menino Dia A Dia", 
        originalPrice: "R$ 159,99",
        price: "R$ 69,99", 
        discount: "56% OFF",
        installments: "12x R$ 6,89",
        rating: "4.8",
        reviewsCount: "15956",
        isBestSeller: true,
        subTitle: "1º em Kits de Conjuntos de Roupa",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_732414-MLB86474429728_062025-F-kit-10-pecas-de-roupa-conjunto-infantil-menino-dia-a-dia.webp", 
        link: "https://meli.la/2rbsRyu" 
      },
      { 
        id: 204, 
        name: "Conjunto Fitness Virginia Top Shorts Meia Coxa Cintura Alta", 
        originalPrice: "R$ 69",
        price: "R$ 32,92", 
        discount: "52% OFF",
        installments: "no Pix",
        rating: "4.4",
        reviewsCount: "27008",
        isBestSeller: true,
        subTitle: "1º em Conjuntos",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_718401-MLB80817900517_112024-F-conjunto-fitness-virginia-top-shorts-meia-coxa-cintura-alta.webp", 
        link: "https://meli.la/1Fq5vvu" 
      },
      { 
        id: 203, 
        name: "Calça Tactel Jogger Com Elastano Active Wear Void Verão", 
        originalPrice: "R$ 68,15",
        price: "R$ 37,66", 
        discount: "44% OFF",
        rating: "4.6",
        reviewsCount: "22914",
        isBestSeller: true,
        subTitle: "1º em Calças e Joggings",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_880618-MLB95661478919_102025-F-calca-tactel-jogger-com-elastano-active-wear-void-vero.webp", 
        link: "https://meli.la/1ckRBVZ" 
      },
      { 
        id: 201, 
        name: "Kit 4 Camiseta Dry-fit Sandrini Masculina Academia Caminhada", 
        originalPrice: "R$ 135,41",
        price: "R$ 59,99", 
        discount: "55% OFF",
        installments: "12x R$ 5,91",
        rating: "4.6",
        reviewsCount: "24668",
        isBestSeller: true,
        subTitle: "1º em Camisetas e Regatas",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_626928-MLB82004918446_022025-F-kit-4-camiseta-dry-fit-sandrini-masculina-academia-caminhada.webp", 
        link: "https://meli.la/2dy8hRS" 
      },
      { 
        id: 16, 
        name: "Kit 4 Bermuda Shorts Tactel Sandrini Elastano Academia Praia", 
        originalPrice: "R$ 124,99",
        price: "R$ 94,99", 
        discount: "24% OFF",
        installments: "12x R$ 9,36",
        rating: "4.7",
        reviewsCount: "3459",
        isBestSeller: true,
        subTitle: "4º em Bermudas e Shorts",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_740026-MLB86614660221_062025-F.webp", 
        link: "https://meli.la/2sRgrdM" 
      },
      { 
        id: 15, 
        name: "Blusa Tule Transparente Feminina Segunda Pele Tendencia", 
        originalPrice: "R$ 49,90",
        price: "R$ 30,97", 
        discount: "38% OFF",
        rating: "4.6",
        reviewsCount: "5018",
        isBestSeller: true,
        subTitle: "6º em Blusas",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_740301-MLB84701093399_052025-F-blusa-tule-transparente-feminina-segunda-pele-tendencia.webp", 
        link: "https://meli.la/3497Ai4" 
      },
      { 
        id: 14, 
        name: "Tênis Sandrini Aero Run Academia Caminhada Treino", 
        originalPrice: "R$ 149,99",
        price: "R$ 58,19", 
        discount: "61% OFF",
        installments: "12x R$ 5,73",
        rating: "4.6",
        reviewsCount: "2134",
        isBestSeller: true,
        subTitle: "13º em Calçados",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_655320-MLB107468613084_032026-F-tnis-sandrini-aero-run-academia-caminhada-treino.webp", 
        link: "https://meli.la/2U6JBwj" 
      },
      { 
        id: 13, 
        name: "Calça Jeans Wide Leg Feminina Cintura Alta Sem Lycra Stillge", 
        originalPrice: "R$ 109,99",
        price: "R$ 64,89", 
        discount: "41% OFF",
        rating: "4.6",
        reviewsCount: "22517",
        isBestSeller: true,
        subTitle: "5º em Calças",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_717613-MLB96633630079_102025-F-calca-jeans-wide-leg-feminina-cintura-alta-sem-lycra-stillge.webp", 
        link: "https://meli.la/2KSar8S",
        installments: "no Pix ou R$ 66,90"
      },
    ]
  },
  {
    id: "brinquedos",
    title: "BRINQUEDOS",
    icon: <Gamepad2 size={32} />,
    products: [
      { 
        id: 208, 
        name: "Patinete Infantil 3 Rodas Dobrável Com Led Conect Brinq BV0011 Brinquedo para Crianças Estável, Seguro E Divertido Colorido", 
        originalPrice: "R$ 199,90",
        price: "R$ 49,90", 
        discount: "75% OFF",
        rating: "4.5",
        reviewsCount: "11127",
        isBestSeller: true,
        subTitle: "1º em De Pé",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_647379-MLA100478895706_122025-F.webp", 
        link: "https://meli.la/2GBeYfH" 
      },
      { 
        id: 237, 
        name: "Patrulha Canina Coleção 6 Carrinhos Fricção Brinquedo", 
        originalPrice: "R$ 64,75",
        price: "R$ 40,15", 
        discount: "37% OFF",
        rating: "4.8",
        reviewsCount: "2357",
        isBestSeller: true,
        subTitle: "1º em Veículos sem Controle Remoto",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_828220-MLB74214627159_012024-F.webp", 
        link: "https://meli.la/1nwABAJ" 
      },
      { 
        id: 202, 
        name: "Bebê Reborn Boneca Menina Silicone Girafinha Pode Dar Banho", 
        originalPrice: "R$ 359,80",
        price: "R$ 140,89", 
        discount: "60% OFF",
        installments: "no Pix ou R$ 148,31 em 4x R$ 37,08 sem juros",
        rating: "4.7",
        reviewsCount: "6793",
        isBestSeller: true,
        subTitle: "1º em Bonecas, Bonecos e Bebês",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_862339-MLB99399524881_112025-F.webp", 
        link: "https://meli.la/1jb35xq" 
      }
    ]
  },
  {
    id: "livros-e-revistas",
    title: "LIVROS E REVISTAS",
    icon: <BookOpen size={32} />,
    products: [
      { 
        id: 301, 
        name: "Copa Do Mundo 2026 - Álbum Capa Brochura - FIFA WORLD CUP 2026", 
        price: "R$ 24,90", 
        rating: "5.0",
        reviewsCount: "1",
        isBestSeller: true,
        subTitle: "PRÉ-VENDA | Lançamento 30 de abril",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_820260-MLA109899566259_032026-F.webp", 
        link: "https://meli.la/2Mp7TWG" 
      }
    ]
  }
];

const BEST_SELLERS = [
  { 
    id: 301, 
    name: "Copa Do Mundo 2026 - Álbum Capa Brochura - FIFA WORLD CUP 2026", 
    price: "R$ 24,90", 
    rating: "5.0",
    reviewsCount: "1",
    isBestSeller: true,
    subTitle: "PRÉ-VENDA | Lançamento 30 de abril",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_820260-MLA109899566259_032026-F.webp", 
    link: "https://meli.la/2Mp7TWG",
    categoryId: "livros-e-revistas"
  },
  { 
    id: 210, 
    name: "Kit 10 Peças De Roupa Conjunto Infantil Menino Dia A Dia", 
    originalPrice: "R$ 159,99",
    price: "R$ 69,99", 
    discount: "56% OFF",
    installments: "12x R$ 6,89",
    rating: "4.8",
    reviewsCount: "15956",
    isBestSeller: true,
    subTitle: "1º em Kits de Conjuntos de Roupa",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_732414-MLB86474429728_062025-F-kit-10-pecas-de-roupa-conjunto-infantil-menino-dia-a-dia.webp", 
    link: "https://meli.la/2rbsRyu", 
  },
  { 
    id: 209, 
    name: "Kit Jogo De Facas Inox Corte Afiado Antiaderente Presente Cor Marrom-escuro", 
    originalPrice: "R$ 129,99",
    price: "R$ 74,19", 
    discount: "42% OFF",
    installments: "12x R$ 7,31",
    rating: "4.8",
    reviewsCount: "14460",
    isBestSeller: true,
    subTitle: "1º em Facas e Cutelos",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_876550-MLA99498421420_112025-F.webp", 
    link: "https://meli.la/2LCWacp", 
  },
  { 
    id: 208, 
    name: "Patinete Infantil 3 Rodas Dobrável Com Led Conect Brinq BV0011 Brinquedo para Crianças Estável, Seguro E Divertido Colorido", 
    originalPrice: "R$ 199,90",
    price: "R$ 49,90", 
    discount: "75% OFF",
    rating: "4.5", 
    reviewsCount: "11127", 
    isBestSeller: true,
    subTitle: "1º em De Pé",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_647379-MLA100478895706_122025-F.webp", 
    link: "https://meli.la/2GBeYfH", 
  },
  { 
    id: 207, 
    name: "Patrulha Canina Coleção 6 Carrinhos Fricção Brinquedo", 
    originalPrice: "R$ 64,75",
    price: "R$ 40,15", 
    discount: "37% OFF",
    rating: "4.8", 
    reviewsCount: "2357", 
    isBestSeller: true,
    subTitle: "1º em Veículos sem Controle Remoto",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_828220-MLB74214627159_012024-F.webp", 
    link: "https://meli.la/1nwABAJ", 
  },
  { 
    id: 206, 
    name: "Varal De Chão Grande De Roupas 3 Andares Dobrável Cor Azul Kontuz 170 cm", 
    originalPrice: "R$ 119,90",
    price: "R$ 72,90", 
    discount: "39% OFF",
    installments: "12x R$ 7,18",
    rating: "4.6", 
    reviewsCount: "86101", 
    isBestSeller: true,
    subTitle: "1º em Varais",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_712866-MLA109482654866_042026-F.webp", 
    link: "https://meli.la/2BVqijb", 
  },
  { 
    id: 205, 
    name: "Protetor De Colchão Impermeável Solteiro Matelado Resistente A Líquidos Antiácaro Antialérgico Branco", 
    originalPrice: "R$ 69,98",
    price: "R$ 34,98", 
    discount: "50% OFF",
    rating: "4.4", 
    reviewsCount: "20885", 
    isBestSeller: true,
    subTitle: "1º em Protetores para Colchões",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_727727-MLA99975530551_112025-F.webp", 
    link: "https://meli.la/2ehbPPt", 
  },
  { 
    id: 204, 
    name: "Conjunto Fitness Virginia Top Shorts Meia Coxa Cintura Alta", 
    originalPrice: "R$ 69",
    price: "R$ 32,92", 
    discount: "52% OFF",
    rating: "4.4", 
    reviewsCount: "27008", 
    isBestSeller: true,
    subTitle: "1º em Conjuntos",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_718401-MLB80817900517_112024-F-conjunto-fitness-virginia-top-shorts-meia-coxa-cintura-alta.webp", 
    link: "https://meli.la/1Fq5vvu", 
    installments: "no Pix"
  },
  { 
    id: 203, 
    name: "Calça Tactel Jogger Com Elastano Active Wear Void Verão", 
    originalPrice: "R$ 68,15",
    price: "R$ 37,66", 
    discount: "44% OFF",
    rating: "4.6", 
    reviewsCount: "22914", 
    isBestSeller: true,
    subTitle: "1º em Calças e Joggings",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_880618-MLB95661478919_102025-F-calca-tactel-jogger-com-elastano-active-wear-void-vero.webp", 
    link: "https://meli.la/1ckRBVZ", 
  },
  { 
    id: 202, 
    name: "Bebê Reborn Boneca Menina Silicone Girafinha Pode Dar Banho", 
    originalPrice: "R$ 359,80",
    price: "R$ 140,89", 
    discount: "60% OFF",
    rating: "4.7", 
    reviewsCount: "6793", 
    isBestSeller: true,
    subTitle: "1º em Bonecas, Bonecos e Bebês",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_862339-MLB99399524881_112025-F.webp", 
    link: "https://meli.la/1jb35xq", 
    installments: "no Pix ou R$ 148,31 em 4x R$ 37,08 sem juros"
  },
  { 
    id: 201, 
    name: "Kit 4 Camiseta Dry-fit Sandrini Masculina Academia Caminhada", 
    originalPrice: "R$ 135,41",
    price: "R$ 59,99", 
    discount: "55% OFF",
    rating: "4.6", 
    reviewsCount: "24668", 
    isBestSeller: true,
    subTitle: "1º em Camisetas e Regatas",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_626928-MLB82004918446_022025-F-kit-4-camiseta-dry-fit-sandrini-masculina-academia-caminhada.webp", 
    link: "https://meli.la/2dy8hRS", 
    installments: "12x R$ 5,91"
  },
  { 
    id: 200, 
    name: "Garrafa Térmica Água Squeeze Inox Academia Quente e Frio", 
    originalPrice: "R$ 59,90",
    price: "R$ 36,54", 
    discount: "38% OFF",
    rating: "4.8", 
    reviewsCount: "46647", 
    isBestSeller: true,
    subTitle: "1º em Garrafas de Café",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_963485-MLB94579785063_102025-F-800mlgarrafa-termica-agua-squeeze-inox-academiaquente-e-frio.webp", 
    link: "https://meli.la/1yL2vsb", 
  },
  { 
    id: 114, 
    name: "Kit 4 Bermuda Shorts Tactel Sandrini Elastano Academia Praia", 
    originalPrice: "R$ 124,99",
    price: "R$ 94,99", 
    discount: "24% OFF",
    rating: "4.7", 
    reviewsCount: "3459", 
    isBestSeller: true,
    subTitle: "4º em Bermudas e Shorts",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_740026-MLB86614660221_062025-F.webp", 
    link: "https://meli.la/2sRgrdM", 
    installments: "12x R$ 9,36"
  },
  { 
    id: 113, 
    name: "Blusa Tule Transparente Feminina Segunda Pele Tendencia", 
    originalPrice: "R$ 49,90",
    price: "R$ 30,97", 
    discount: "38% OFF",
    rating: "4.6", 
    reviewsCount: "5018", 
    isBestSeller: true,
    subTitle: "6º em Blusas",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_740301-MLB84701093399_052025-F-blusa-tule-transparente-feminina-segunda-pele-tendencia.webp", 
    link: "https://meli.la/3497Ai4"
  },
  { 
    id: 112, 
    name: "Tênis Sandrini Aero Run Academia Caminhada Treino", 
    originalPrice: "R$ 149,99",
    price: "R$ 58,19", 
    discount: "61% OFF",
    rating: "4.6", 
    reviewsCount: "2134", 
    isBestSeller: true,
    subTitle: "13º em Calçados",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_655320-MLB107468613084_032026-F-tnis-sandrini-aero-run-academia-caminhada-treino.webp", 
    link: "https://meli.la/2U6JBwj", 
    installments: "12x R$ 5,73"
  },
  { 
    id: 111, 
    name: "Calça Jeans Wide Leg Feminina Cintura Alta Sem Lycra Stillge", 
    originalPrice: "R$ 109,99",
    price: "R$ 64,89", 
    discount: "41% OFF",
    rating: "4.6", 
    reviewsCount: "22517", 
    isBestSeller: true,
    subTitle: "5º em Calças",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_717613-MLB96633630079_102025-F-calca-jeans-wide-leg-feminina-cintura-alta-sem-lycra-stillge.webp", 
    link: "https://meli.la/2KSar8S",
    installments: "no Pix ou R$ 66,90"
  },
  { 
    id: 110, 
    name: "Kit 24 Talheres Luxo Premium Faqueiro Dourado Com Maleta", 
    originalPrice: "R$ 120,89",
    price: "R$ 71,06", 
    discount: "41% OFF",
    rating: "4.9", 
    reviewsCount: "133", 
    isBestSeller: true,
    subTitle: "2º em Faqueiros",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_665982-MLB88943084362_082025-F.webp", 
    link: "https://meli.la/1SP5z48", 
    installments: "12x R$ 7,00"
  },
  { 
    id: 109, 
    name: "Guarda Roupa Dobrável Organizador Colmeia Preto 8 Prateleiras IRSINA", 
    originalPrice: "R$ 138,00",
    price: "R$ 97,45", 
    discount: "29% OFF",
    rating: "4.6", 
    reviewsCount: "3413", 
    isBestSeller: true,
    subTitle: "2º em Organizadores de Roupa Intima",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_938828-MLA99418141062_112025-F.webp", 
    link: "https://meli.la/1Fnqp2q", 
    installments: "12x R$ 9,60"
  },
  { 
    id: 108, 
    name: "Ventilador Arno X-treme 9 Mesa 40cm Ve90", 
    originalPrice: "R$ 459,99",
    price: "R$ 289,00", 
    discount: "37% OFF",
    rating: "4.8", 
    reviewsCount: "9085", 
    isBestSeller: true,
    subTitle: "11º em Ar e Ventilação",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_686594-MLA99930624347_112025-F.webp", 
    link: "https://meli.la/2FAGbni", 
    installments: "6x R$ 48,17 sem juros"
  },
  { 
    id: 107, 
    name: "Barbeador E Cortador De Cabelo 3 Em 1 Kemei Km-6558", 
    originalPrice: "R$ 139,90",
    price: "R$ 48,89", 
    discount: "65% OFF",
    rating: "4.6", 
    reviewsCount: "13519", 
    isBestSeller: true,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_638009-MLU77163689638_072024-F.webp", 
    link: "https://meli.la/2Nyg73S",
    subTitle: "1º em Barbeadores Elétricos"
  },
  { 
    id: 106, 
    name: "Celular Samsung Galaxy A07 128gb, 4gb, Câmera 50mp, Tela 6.7 , Proteção Ip54, Processador 6nm - Violeta", 
    originalPrice: "R$ 899,00",
    price: "R$ 599,40", 
    discount: "33% OFF",
    rating: "4.9", 
    reviewsCount: "56595", 
    isBestSeller: true,
    subTitle: "1º em Celulares e Telefones",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_765861-MLA95532186080_102025-F.webp", 
    link: "https://meli.la/1jcuMtw", 
    installments: "10x R$ 66,60 sem juros"
  },
  { 
    id: 105, 
    name: "Fechadura Digital Inteligente Biométrica Senha Eletronica Touch Com Tuya Wifi Para Casa/hotel Adequado Para Portas Esquerdas/direitas Com Chaves+cartões Ic Cor Preto", 
    originalPrice: "R$ 519,98",
    price: "R$ 265,19", 
    discount: "48% OFF",
    rating: "4.7", 
    reviewsCount: "37", 
    isBestSeller: true,
    subTitle: "4º em Digitais Genérica",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_758484-MLA108861879013_032026-F.webp", 
    link: "https://meli.la/1vARj2V", 
    installments: "12x R$ 25,94"
  },
  { 
    id: 100, 
    name: "Novo Echo Dot 5ª Geração com Relógio | Smart Speaker com Alexa", 
    originalPrice: "R$ 549,00",
    price: "R$ 428,00", 
    discount: "22% OFF",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_929868-MLA99520021024_112025-F.webp", 
    link: "https://meli.la/15nyeTH", 
    rating: "4.9", 
    reviewsCount: "22220", 
    isBestSeller: true,
    subTitle: "1º em Assistentes Pessoais",
    installments: "12x R$ 41,39"
  },
  { 
    id: 101, 
    name: "Copo Térmico Gigante 1,2l Inox Com Tampa E Inox Canudo", 
    originalPrice: "R$ 99,98",
    price: "R$ 48,98", 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_952523-MLB109996174757_042026-F-copo-termico-gigante-12l-inox-com-tampa-e-inox-canudo.webp", 
    link: "https://meli.la/1GBQdcv", 
    discount: "51% OFF", 
    rating: "4.9", 
    reviewsCount: "5238", 
    isBestSeller: true,
    subTitle: "2º em Canecas e Copos Térmicos"
  },
  { 
    id: 102, 
    name: "Lavadora Lava Jato Portátil Pressão 2 Baterias + Maleta", 
    originalPrice: "R$ 229,90",
    price: "R$ 100,72", 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_710675-MLB89102120983_082025-F.webp", 
    link: "https://meli.la/1dFjoqo", 
    discount: "56% OFF", 
    rating: "4.5", 
    reviewsCount: "27017", 
    isBestSeller: true,
    subTitle: "1º em Lavadoras de Jato Elétricas"
  },
  { 
    id: 103, 
    name: "Mochila Grande Alça Reforçada Resistente Faculdade Trabalho", 
    originalPrice: "R$ 78,90",
    price: "R$ 44,28", 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_812719-MLB92851761813_092025-F-mochila-grande-alca-reforcada-resistente-faculdade-trabalho.webp", 
    link: "https://meli.la/1oK5F4b", 
    discount: "43% OFF", 
    rating: "4.5", 
    reviewsCount: "10985", 
    isBestSeller: true,
    subTitle: "1º em Malas e Bolsas"
  },
  { 
    id: 104, 
    name: "Compressor De Ar Digital Mini 12v Portátil Com Lanterna Led Para Moto Carro Bike Ciclismo E Enchimento De Pneus", 
    originalPrice: "R$ 99,99",
    price: "R$ 60,21", 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_750504-MLA109109285404_042026-F.webp", 
    link: "https://meli.la/1mC5M24", 
    discount: "39% OFF", 
    rating: "4.8", 
    reviewsCount: "1353", 
    isBestSeller: true,
    subTitle: "2º em Compressores de Ar",
    installments: "3x R$ 20,07 sem juros"
  },
];

const parseDiscount = (discountStr: string): number => {
  if (!discountStr) return 0;
  const match = discountStr.match(/(\d+)%/);
  return match ? parseInt(match[1]) : 0;
};

// --- COMPONENTS ---

const Header = ({ onOpenModal, searchTerm, onSearchChange, onViewAll, onViewHighDiscounts, onCategoryClick, onHomeClick }: { 
  onOpenModal: (type: string) => void; 
  searchTerm: string; 
  onSearchChange: (val: string) => void;
  onViewAll: () => void;
  onViewHighDiscounts: () => void;
  onCategoryClick: (id: string) => void;
  onHomeClick: () => void;
}) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuLoading, setIsMenuLoading] = useState(false);
  const sortedCategories = [...CATEGORIES].sort((a, b) => a.title.localeCompare(b.title));

  const handleMouseEnter = () => {
    setIsCategoriesOpen(true);
    setIsMenuLoading(true);
    setTimeout(() => setIsMenuLoading(false), 500);
  };

  const navLinks = [
    { label: 'Página Inicial', icon: <Home size={18} />, onClick: onHomeClick },
    { label: 'OFERTAS IMPERDÍVEIS', icon: <Tag size={18} />, onClick: onViewHighDiscounts, highlight: true },
    { label: 'Mais Vendidos', icon: <TrendingUp size={18} />, href: '#mais-vendidos' },
    { label: 'Eletrônicos', icon: <Smartphone size={18} />, href: '#eletronicos' },
    { label: 'Casa e Cozinha', icon: <Utensils size={18} />, href: '#casa-e-cozinha' },
    { label: 'Moda', icon: <Shirt size={18} />, href: '#moda' },
    { label: 'Livros e Revistas', icon: <BookOpen size={18} />, href: '#livros-e-revistas' },
  ];

  return (
    <header className="bg-[#FFE600] h-auto lg:h-[99px] sticky top-0 z-[60] shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-6 py-2 lg:py-0">
        {/* Top Row: Logo + Search + Ad */}
        <div className="flex items-center justify-between lg:justify-start gap-4 lg:gap-8 h-12 lg:h-[52px]">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-800"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={onHomeClick} className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={LOGO_URL} 
                alt="Mercado Compras" 
                className="h-8 lg:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-grow items-center gap-6 h-full">
            <div className="relative w-full max-w-[580px]">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-9 px-4 rounded bg-white border-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] focus:outline-none placeholder-gray-400 text-sm"
                placeholder="Buscar produtos, marcas e muito mais..."
              />
            </div>

            {/* Animated GIF Banner */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01 }}
              onClick={onViewHighDiscounts}
              className="flex-shrink-0 w-[436px] h-[54px] overflow-hidden rounded-tl-2xl rounded-br-2xl cursor-pointer border border-black/5 shadow-sm"
            >
              <img 
                src="https://i.postimg.cc/fTbn3HTj/ofertas-imperdiveis.gif" 
                alt="Ofertas Imperdíveis" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Mobile Search Icon / Favorite */}
          <div className="lg:hidden flex items-center gap-2 text-gray-800">
            <button onClick={() => onOpenModal('favorites')} className="p-2">
              <Heart size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="lg:hidden mt-2 mb-1">
          <div className="relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-10 px-4 pl-10 rounded-full bg-white border-0 shadow-sm focus:outline-none placeholder-gray-400 text-sm"
              placeholder="Estou buscando por..."
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Bottom Row: Navigation (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700 h-[32px] mt-1">
          <button onClick={() => { onHomeClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors h-full">
            <Home size={14} /> <span translate="no">Página Inicial</span>
          </button>

          {/* Categories Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors h-full">
              Categorias <ChevronDown size={14} className={`transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isCategoriesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-md py-2 min-w-[220px] z-[60]"
                >
                  {isMenuLoading ? (
                    <div className="py-8 flex flex-col items-center justify-center gap-2">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-6 h-6 border-2 border-ml-blue border-t-transparent rounded-full"
                      />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Carregando...</span>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col py-1"
                    >
                      {sortedCategories.map(cat => (
                        <a 
                          key={cat.id}
                          href={`#${cat.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onCategoryClick(cat.id);
                            setIsCategoriesOpen(false);
                          }}
                          className="px-6 py-2.5 hover:bg-gray-50 transition-colors text-gray-700 flex items-center gap-3 text-sm"
                        >
                          <span className="text-gray-400 scale-75">{cat.icon}</span>
                          <span className="font-medium">{cat.title}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#mais-vendidos" className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors">
            <TrendingUp size={14} /> Mais Vendidos
          </a>
          <a href="#eletronicos" className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors">
            <Smartphone size={14} /> Eletrônicos
          </a>
          <a href="#casa-e-cozinha" className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors">
            <Utensils size={14} /> Casa e Cozinha
          </a>
          <a href="#moda" className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors">
            <Shirt size={14} /> Moda
          </a>
          <a href="#livros-e-revistas" className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors">
            <BookOpen size={14} /> Livros e Revistas
          </a>
          <button onClick={onViewHighDiscounts} className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors">
            <Tag size={14} /> Ofertas
          </button>
          <div className="ml-auto flex items-center gap-6">
            <button onClick={() => onOpenModal('favorites')} className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors font-medium">
              <Heart size={14} /> Favoritos
            </button>
            <button onClick={() => onOpenModal('about')} className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors font-medium">
              <Info size={14} /> Sobre
            </button>
            <button onClick={() => onOpenModal('contact')} className="flex items-center gap-1 cursor-pointer hover:text-[#1E2A78]/70 transition-colors font-medium">
              <Headset size={14} /> Contato
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col"
            >
              <div className="bg-[#FFE600] p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <img src={LOGO_URL} alt="Logo" className="h-8 w-auto" />
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-black/5 rounded-full"
                  >
                    <X size={20} className="text-gray-800" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <Heart size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-none">Bem-vindo</h4>
                    <p className="text-[10px] text-gray-600 mt-1 uppercase font-black">Confira nossas ofertas!</p>
                  </div>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto py-2 no-scrollbar">
                <div className="px-6 py-4">
                  <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Navegação</h5>
                  <div className="space-y-1">
                    {navLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (link.onClick) link.onClick();
                          else if (link.href) window.location.hash = link.href;
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 py-3 text-sm font-medium transition-colors ${link.highlight ? 'text-red-500 font-bold' : 'text-gray-700 active:text-ml-blue'}`}
                      >
                        <span className={link.highlight ? 'text-red-500' : 'text-gray-400'}>{link.icon}</span>
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-100">
                  <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Categorias</h5>
                  <div className="grid grid-cols-1 gap-1">
                    {sortedCategories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onCategoryClick(cat.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-4 py-3 text-sm font-medium text-gray-700 active:text-ml-blue transition-colors"
                      >
                        <span className="text-gray-400 scale-75">{cat.icon}</span>
                        {cat.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-6 border-t border-gray-100 space-y-4">
                  <button onClick={() => { onOpenModal('about'); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 text-xs font-bold text-gray-500 hover:text-gray-800">
                    <Info size={16} /> Sobre o Mercado Compras
                  </button>
                  <button onClick={() => { onOpenModal('contact'); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 text-xs font-bold text-gray-500 hover:text-gray-800">
                    <Headset size={16} /> Fale Conosco
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

const BannerCarousel = ({ onInternalLink }: { onInternalLink: (link: string) => void }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % CAROUSEL_PRODUCTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const product = CAROUSEL_PRODUCTS[current];

  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    if (link.startsWith('internal:')) {
      e.preventDefault();
      onInternalLink(link.replace('internal:', ''));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white mb-6 lg:mb-12 overflow-hidden relative group rounded-xl lg:rounded-3xl shadow-md border border-gray-100">
      <div className="max-w-[1231px] w-full aspect-[2/1] sm:aspect-[3/1] md:aspect-[1231/360] mx-auto relative flex items-center rounded-xl lg:rounded-3xl overflow-hidden bg-[#F5F5F5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full rounded-xl lg:rounded-3xl overflow-hidden"
          >
            {product.isFullImage ? (
              <a 
                href={product.affiliateLink} 
                target={product.affiliateLink.startsWith('internal:') ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(e, product.affiliateLink)}
                className="w-full h-full flex items-center justify-center cursor-pointer"
              >
                <img 
                  src={product.imageUrl} 
                  alt="Promoção" 
                  className="w-full h-full object-cover object-center transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
              </a>
            ) : (
              <div className="flex flex-col md:flex-row items-center gap-12 w-full h-full px-8 md:px-20 py-4 bg-gradient-to-r from-white to-gray-50">
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#1E2A78] text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-[0.15em] shadow-sm">
                      {product.badge}
                    </span>
                    <span className="bg-[#00A650]/10 text-[#00A650] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tight">
                      {product.releaseDate}
                    </span>
                  </div>
                  
                  <h2 className="text-xl md:text-3xl font-black text-[#1E2A78] leading-[1.1] tracking-tighter max-w-xl">
                    {product.title}
                  </h2>

                  <div className="flex items-center gap-4 text-gray-900 pt-1 md:pt-2">
                    <p className="text-2xl md:text-3xl font-black tracking-tighter">{product.price}</p>
                    {product.installments && (
                      <p className="text-xs md:text-base font-semibold text-[#00A650] bg-[#00A650]/10 px-2 py-0.5 rounded">{product.installments}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <a 
                      href={product.affiliateLink}
                      target={product.affiliateLink.startsWith('internal:') ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, product.affiliateLink)}
                      className="inline-flex items-center gap-3 bg-[#3483FA] text-white font-extrabold py-2.5 md:py-3.5 px-8 md:px-10 rounded-sm text-sm md:text-base hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest shadow-xl shadow-blue-100 group/btn"
                    >
                      <ShoppingCart size={20} className="transition-transform group-hover/btn:scale-110" />
                      <span>{product.affiliateLink.startsWith('internal:') ? 'Ver Ofertas' : 'Quero Comprar'}</span>
                    </a>
                  </div>
                </div>

                <div className="relative w-full md:w-[400px] h-full flex justify-center items-center p-4">
                  <motion.img 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
          {CAROUSEL_PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 shadow-sm ${current === i ? 'bg-[#3483FA] scale-125' : 'bg-white/60 hover:bg-white/80'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setCurrent(prev => (prev - 1 + CAROUSEL_PRODUCTS.length) % CAROUSEL_PRODUCTS.length)}
          className="absolute left-4 p-2 bg-white/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        <button 
          onClick={() => setCurrent(prev => (prev + 1) % CAROUSEL_PRODUCTS.length)}
          className="absolute right-4 p-2 bg-white/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

const ProductCard = ({ product, isFavorite, onToggleFavorite, onExpand }: { product: any; isFavorite: boolean; onToggleFavorite: (p: any) => void; onExpand: (p: any) => void; key?: any }) => {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  // Helper to split price into main and cents for styling
  const formatPrice = (priceStr: string) => {
    if (!priceStr) return { main: '0', cents: '00' };
    const parts = priceStr.replace('R$', '').trim().split(',');
    return {
      main: parts[0],
      cents: parts[1] || '00'
    };
  };

  const { main, cents } = formatPrice(product.price);

  const shareText = `Olha esse produto que encontrei no Mercado Compras: ${product.name}`;
  const shareLink = product.link;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareLink)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
        break;
      case 'instagram':
        navigator.clipboard.writeText(shareLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    if (url) window.open(url, '_blank');
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.025, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col min-h-[380px] sm:min-h-[480px] relative group hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Product Image Area */}
      <div className="h-[140px] sm:h-[180px] w-full bg-white p-4 flex items-center justify-center relative overflow-hidden border-b border-gray-50 cursor-zoom-in"
          onClick={() => onExpand(product)}
        >
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-2" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => onToggleFavorite(product)}
              className={`transition-all transform hover:scale-125 ${isFavorite ? 'text-[#3483FA]' : 'text-gray-300 hover:text-[#3483FA]'}`} 
              title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              <Heart size={22} fill={isFavorite ? "currentColor" : "none"} strokeWidth={isFavorite ? 0 : 2} />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowShare(!showShare)}
                className={`transition-all transform hover:scale-125 ${showShare ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}`}
                title="Compartilhar"
              >
                <Share2 size={22} />
              </button>
              
              <AnimatePresence>
                {showShare && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 10 }}
                    className="absolute right-full mr-2 top-0 bg-white shadow-xl border border-gray-100 rounded-lg p-2 flex gap-3 z-20"
                  >
                    <button 
                      onClick={() => handleShare('whatsapp')}
                      className="text-green-500 transition-transform"
                      title="WhatsApp"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50"
                      >
                        <Zap size={16} fill="currentColor" />
                      </motion.div>
                    </button>
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="text-blue-600 hover:scale-110 transition-transform"
                      title="Facebook"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50">
                        <Facebook size={16} fill="currentColor" />
                      </div>
                    </button>
                    <button 
                      onClick={() => handleShare('instagram')}
                      className="text-pink-600 hover:scale-110 transition-transform relative"
                      title="Copiar link para Instagram"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-50">
                        {copied ? <Check size={16} /> : <Instagram size={16} />}
                      </div>
                      {copied && (
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap">
                          Copiado!
                        </span>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-gray-300 group-hover:text-ml-blue transition-colors opacity-0 group-hover:opacity-100">
            <ZoomIn size={18} />
          </div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
            referrerPolicy="no-referrer"
          />
        </div>

      <div className="flex-1 flex flex-col p-4 pt-3">
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {product.isBestSeller && (
            <span className="bg-[#FF7733] text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase">
              MAIS VENDIDO
            </span>
          )}
          {product.discount && parseInt(product.discount) > 30 && (
            <span className="bg-[#3483FA] text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase flex items-center gap-1">
              <span className="text-[10px]">⚡</span> OFERTA IMPERDÍVEL
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-[12px] sm:text-sm text-[#333] leading-tight font-normal mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-3 min-h-[36px] sm:min-h-[42px]">
          {product.name}
        </h3>

        {/* Subtitle / Ranking */}
        {product.subTitle && (
          <p className="text-[10px] sm:text-[11px] text-[#00A650] font-medium mb-1.5 leading-tight">
            {product.subTitle}
          </p>
        )}

        {/* Rating Area */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-1.5">
            <span className="text-[11px] sm:text-[12px] font-bold text-[#3483FA]">{product.rating}</span>
            <div className="flex items-center text-[#3483FA]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={8} fill={i < Math.floor(parseFloat(product.rating)) ? "currentColor" : "none"} className="stroke-[2px] sm:size-[10px]" />
              ))}
            </div>
            <span className="text-[11px] sm:text-[12px] text-gray-400">({product.reviewsCount})</span>
          </div>
        )}

        {/* Price Area */}
        <div className="mb-2">
          {product.originalPrice && (
            <p className="text-[11px] sm:text-[12px] text-gray-400 line-through leading-none mb-0.5">{product.originalPrice}</p>
          )}
          <div className="flex items-start gap-1 sm:gap-2 mb-1">
            <div className="flex items-start">
              <span className="text-sm sm:text-lg font-medium text-gray-900 mt-1 mr-0.5 sm:mr-1">R$</span>
              <span className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tighter">{main}</span>
              <span className="text-[10px] sm:text-sm font-medium text-gray-900 mt-1 sm:mt-1.5 ml-0.5">{cents}</span>
            </div>
            {product.discount && (
              <span className="text-xs sm:text-sm text-[#00A650] font-medium ml-0.5 sm:ml-1 mt-1 sm:mt-1.5">
                {product.discount}
              </span>
            )}
          </div>
          
          {product.installments ? (
            <p className="text-[11px] sm:text-[12px] text-gray-600 mb-2 min-h-[1.25rem] leading-tight">
              em <span className="text-[#00A650] font-medium">{product.installments}</span>
            </p>
          ) : (
            <p className="text-[11px] sm:text-[12px] text-gray-600 mb-2 min-h-[1.25rem]">Parcelamento disponível</p>
          )}
        </div>
          
        {/* Action Button */}
        <div className="mt-auto">
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3483FA] text-white py-2.5 rounded-full flex items-center justify-center gap-2 w-full hover:bg-blue-600 transition-all shadow-md group/btn"
          >
            <ShoppingCart size={16} className="transition-transform group-hover/btn:scale-110" />
            <span className="text-xs font-bold uppercase tracking-tight">Quero Comprar</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Section = ({ id, title, icon, products, favorites, onToggleFavorite, onExpand, onViewAll }: { id?: string; title: string; icon?: React.ReactNode; products: any[]; favorites: any[]; onToggleFavorite: (p: any) => void; onExpand: (p: any) => void; onViewAll?: () => void; key?: any }) => (
  <section id={id} className="mb-12 scroll-mt-24">
    <div className="flex items-center justify-between mb-6">
      <div 
        className={`flex items-center gap-4 ${onViewAll ? 'cursor-pointer group' : ''}`}
        onClick={onViewAll}
      >
        <div className={`w-9 h-9 md:w-11 md:h-11 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-ml-blue flex-shrink-0 ${onViewAll ? 'group-hover:scale-110 transition-all group-hover:border-ml-blue' : 'transition-all'}`}>
          {icon ? React.cloneElement(icon as React.ReactElement, { size: 18 }) : <TrendingUp size={18} />}
        </div>
        <h2 className={`text-xl md:text-2xl font-semibold text-gray-800 ${onViewAll ? 'group-hover:text-ml-blue transition-colors' : ''}`}>{title}</h2>
      </div>
      {onViewAll && products.length > 8 && (
        <button 
          onClick={onViewAll}
          className="text-ml-blue text-sm font-semibold hover:underline flex items-center gap-1"
        >
          Ver todos <ChevronRight size={16} />
        </button>
      )}
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      {products.slice(0, onViewAll ? 8 : undefined).map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          isFavorite={favorites.some(f => f.id === product.id)}
          onToggleFavorite={onToggleFavorite}
          onExpand={onExpand}
        />
      ))}
    </div>
  </section>
);

const Footer = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => (
  <footer className="bg-[#1E224F] text-[#A5A9CC] pt-12 pb-8 border-t border-[#343D7B]">
    <div className="max-w-7xl mx-auto px-6">
      {/* Bottom Footer Row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-left space-y-4">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
            © 2026 Mercado Compras — Todos os direitos reservados
          </div>
          <p className="text-[11px] max-w-2xl opacity-60 font-medium leading-relaxed">
            O Mercado Compras é um participante do Programa de Afiliados do Mercado Livre, um programa de publicidade de afiliados projetado para fornecer um meio para sites ganharem taxas de publicidade por meio de links.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-4 text-[11px] font-medium">
          <button 
            onClick={() => onOpenModal('privacy')} 
            className="hover:text-white transition-colors"
          >
            Política de Privacidade
          </button>
          <button 
            onClick={() => onOpenModal('terms')} 
            className="hover:text-white transition-colors"
          >
            Termos de Uso
          </button>
          <button 
            onClick={() => onOpenModal('contact')} 
            className="hover:text-white transition-colors"
          >
            Contato
          </button>

          <div className="flex items-center gap-4 ml-2 md:ml-4 border-l border-white/10 pl-4 md:pl-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5A9CC] hover:text-white transition-all transform hover:scale-110" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5A9CC] hover:text-white transition-all transform hover:scale-110" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5A9CC] hover:text-white transition-all transform hover:scale-110" aria-label="X (Twitter)">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const ContentModal = ({ isOpen, type, onClose, favorites, onToggleFavorite, onExpand }: { isOpen: boolean; type: string; onClose: () => void; favorites: any[]; onToggleFavorite: (p: any) => void; onExpand: (p: any) => void }) => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  
  useEffect(() => {
    if (isOpen && type !== 'favorites') {
      setIsPageLoading(true);
      const timer = setTimeout(() => setIsPageLoading(false), 800);
      return () => clearTimeout(timer);
    } else {
      setIsPageLoading(false);
    }
  }, [isOpen, type]);

  const handleExpand = (p: any) => {
    onExpand(p);
    onClose();
  };

  if (type === 'favorites') {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Heart size={24} className="text-[#3483FA] fill-current" />
                  <h2 className="text-xl font-bold text-gray-900">Meus Favoritos</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto no-scrollbar flex-grow">
                {favorites.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="bg-gray-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
                      <Heart size={32} className="text-gray-300" />
                    </div>
                    <p className="text-gray-500 font-medium">Você ainda não tem produtos favoritos.</p>
                    <button 
                      onClick={onClose}
                      className="text-ml-blue font-bold hover:underline"
                    >
                      Começar a comprar
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        isFavorite={true}
                        onToggleFavorite={onToggleFavorite}
                        onExpand={handleExpand}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  const meta = MODAL_CONTENT[type];
  if (!meta) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">{meta.title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto no-scrollbar min-h-[250px]">
              {isPageLoading ? (
                <div className="py-16 flex flex-col items-center justify-center gap-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-10 h-10 border-4 border-ml-blue border-t-transparent rounded-full"
                  />
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest animate-pulse text-center">Buscando informações...</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {meta.content}
                </motion.div>
              )}
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <button 
                onClick={onClose}
                className="btn-blue text-sm px-6"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const CookieBanner = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-[#1E224F] text-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#343D7B]">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-lg font-bold flex items-center justify-center md:justify-start gap-2">
                <span className="text-[#FFE600] text-xl">🍪</span> Nós valorizamos sua privacidade
              </h4>
              <p className="text-[#A5A9CC] text-sm max-w-3xl leading-relaxed">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar ofertas. 
                Ao continuar navegando, você concorda com o uso de cookies de acordo com nossa 
                <button 
                  onClick={() => onOpenModal('privacy')}
                  className="text-[#FFE600] hover:underline font-bold mx-1"
                >
                  Política de Privacidade
                </button>.
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                onClick={handleAccept}
                className="bg-[#FFE600] text-[#1E2A78] font-black px-8 py-3 rounded-full hover:brightness-110 shadow-lg transition-all uppercase text-xs tracking-widest flex-grow md:flex-grow-0"
              >
                Aceitar tudo
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FilterBar = ({ 
  sortBy, 
  onSortChange, 
  selectedCategory, 
  onCategoryChange 
}: { 
  sortBy: string; 
  onSortChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-500">Ordenar por:</span>
          <select 
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer"
          >
            <option value="relevance">Relevância</option>
            <option value="price_asc">Menor Preço</option>
            <option value="price_desc">Maior Preço</option>
            <option value="best_sellers">Mais Vendidos</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-500">Categoria:</span>
          <select 
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer"
          >
            <option value="all">Todas as Categorias</option>
            <option value="mais-vendidos">Mais Vendidos</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.title}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full hidden sm:block">
        Encontramos as melhores ofertas para você
      </div>
    </div>
  );
};

export default function App() {
  useGoogleAnalytics(gaId);
  const [modalType, setModalType] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewAllCategory, setViewAllCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterType, setFilterType] = useState<'category' | 'discount'>('category');

  useEffect(() => {
    const saved = localStorage.getItem('favoritos-shop');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (product: any) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.id === product.id);
      const newFavs = isFav 
        ? prev.filter(f => f.id !== product.id)
        : [...prev, product];
      localStorage.setItem('favoritos-shop', JSON.stringify(newFavs));
      return newFavs;
    });
  };

  const getSortedProducts = (products: any[]) => {
    const list = [...products];
    if (sortBy === 'price_asc') {
      return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    if (sortBy === 'price_desc') {
      return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    if (sortBy === 'best_sellers') {
      return list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }
    return list;
  };

  const filterProducts = (products: any[]) => {
    let result = [...products];
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
    }
    return getSortedProducts(result);
  };

  // Aggregate all products for global views - ensure absolute uniqueness by normalized Name
  const uniqueAllProducts = (() => {
    const rawList = [
      ...BEST_SELLERS.map(p => ({ ...p, categoryId: (p as any).categoryId || 'mais-vendidos' })),
      ...CATEGORIES.flatMap(cat => cat.products.map(p => ({ ...p, categoryId: cat.id })))
    ];
    
    const seen = new Set();
    return rawList.filter(item => {
      // Use normalized Name as the primary unique identifier because IDs in the static data might vary for same products
      const identifier = item.name.trim().toLowerCase();
      if (seen.has(identifier)) return false;
      seen.add(identifier);
      return true;
    });
  })();

  const getFilteredViewAll = () => {
    let list = uniqueAllProducts;
    if (filterType === 'discount') {
      list = list.filter(p => {
        const discount = parseDiscount(p.discount || '');
        return discount > 0 && discount <= 70;
      }).sort((a, b) => parseDiscount(b.discount || '') - parseDiscount(a.discount || ''));
    } else if (selectedCategory !== 'all') {
      list = list.filter(p => p.categoryId === selectedCategory);
    }
    
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(term));
    }
    return getSortedProducts(list);
  };

  const filteredBestSellers = filterProducts(BEST_SELLERS);
  const filteredCategories = CATEGORIES.map(cat => ({
    ...cat,
    products: filterProducts(cat.products)
  })).filter(cat => cat.products.length > 0 && cat.id !== 'brinquedos');

  const viewAllContent = getFilteredViewAll();
  const isViewingDeep = viewAllCategory !== null || !!searchTerm;

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    if (val) setViewAllCategory(null);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setViewAllCategory(null);
    setSortBy('relevance');
    setSelectedCategory('all');
    setFilterType('category');
  };

  return (
    <div className="min-h-screen bg-ml-bg-gray text-gray-800">
      <Header 
        onOpenModal={setModalType} 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
        onViewAll={() => {
          setFilterType('category');
          setViewAllCategory('all');
          setSelectedCategory('all');
        }}
        onViewHighDiscounts={() => {
          setFilterType('discount');
          setViewAllCategory('top-discounts');
        }}
        onCategoryClick={(id) => {
          setFilterType('category');
          setViewAllCategory(id);
          setSelectedCategory(id);
        }}
        onHomeClick={() => {
          setViewAllCategory(null);
          setSelectedCategory('all');
        }}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 font-sans">
        <main className="w-full">
          {!searchTerm && !viewAllCategory && (
            <>
              <BannerCarousel onInternalLink={(link) => {
                setFilterType('category');
                setViewAllCategory(link);
                setSelectedCategory(link === 'all' ? 'all' : link);
              }} />
            </>
          )}
          
          {isViewingDeep && (
            <FilterBar 
              sortBy={sortBy}
              onSortChange={setSortBy}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          )}

          {viewAllCategory ? (
            <div className="mb-12">
              <button 
                onClick={() => setViewAllCategory(null)}
                className="flex items-center gap-2 text-ml-blue font-bold mb-6 hover:underline"
              >
                <ChevronLeft size={20} /> Voltar para o início
              </button>
              
              {filterType === 'discount' ? (
                <Section 
                  title="OFERTAS" 
                  icon={<Flame size={22} />} 
                  products={viewAllContent} 
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onExpand={setSelectedProduct}
                />
              ) : viewAllCategory === 'all' ? (
                <Section 
                  title="TODAS AS OFERTAS" 
                  icon={<TrendingUp size={22} />} 
                  products={viewAllContent} 
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onExpand={setSelectedProduct}
                />
              ) : viewAllCategory === 'mais-vendidos' ? (
                <Section 
                  title="MAIS VENDIDOS - TODOS" 
                  icon={<Star size={22} />} 
                  products={filterProducts(BEST_SELLERS)} 
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onExpand={setSelectedProduct}
                />
              ) : (
                (() => {
                  const cat = CATEGORIES.find(c => c.id === viewAllCategory);
                  return cat ? (
                    <Section 
                      title={`${cat.title} - TODOS`} 
                      icon={cat.icon} 
                      products={filterProducts(cat.products)} 
                      favorites={favorites}
                      onToggleFavorite={toggleFavorite}
                      onExpand={setSelectedProduct}
                    />
                  ) : null;
                })()
              )}
            </div>
          ) : searchTerm ? (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Resultados para "{searchTerm}"
              </h2>
              <Section 
                title="PRODUTOS ENCONTRADOS" 
                icon={<TrendingUp size={22} />} 
                products={viewAllContent} 
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onExpand={setSelectedProduct}
              />
            </div>
          ) : (
            <>
              {filteredBestSellers.length > 0 && (
                <Section 
                  id="mais-vendidos" 
                  title="MAIS VENDIDOS" 
                  icon={<Star size={22} />} 
                  products={filteredBestSellers} 
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onExpand={setSelectedProduct}
                  onViewAll={() => setViewAllCategory('mais-vendidos')}
                />
              )}

              {filteredCategories.map(category => (
                <Section 
                  key={category.id} 
                  id={category.id} 
                  title={category.title} 
                  icon={category.icon} 
                  products={category.products} 
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onExpand={setSelectedProduct}
                  onViewAll={() => setViewAllCategory(category.id)}
                />
              ))}
            </>
          )}

          {isViewingDeep && viewAllContent.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Nenhum produto encontrado</h3>
              <p className="text-gray-500 mt-2">Tente buscar por termos diferentes ou ajuste os filtros.</p>
              <button 
                onClick={clearFilters}
                className="mt-6 font-bold text-ml-blue hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer onOpenModal={setModalType} />
      
      <ContentModal 
        isOpen={modalType !== null} 
        type={modalType || ''} 
        onClose={() => setModalType(null)} 
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onExpand={setSelectedProduct}
      />

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors text-gray-800"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 p-12 bg-white flex items-center justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-h-[60vh] max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 bg-gray-50 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProduct.isBestSeller && (
                    <span className="bg-[#FF7733] text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase">
                      MAIS VENDIDO
                    </span>
                  )}
                  {selectedProduct.discount && (
                    <span className="bg-[#00A650] text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase">
                      {selectedProduct.discount} OFF
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {selectedProduct.name}
                </h3>
                
                {selectedProduct.subTitle && (
                  <p className="text-sm text-[#00A650] font-bold mb-6">
                    {selectedProduct.subTitle}
                  </p>
                )}

                <div className="mb-8">
                  {selectedProduct.originalPrice && (
                    <p className="text-lg text-gray-400 line-through mb-1">{selectedProduct.originalPrice}</p>
                  )}
                  <p className="text-4xl font-bold text-gray-900">{selectedProduct.price}</p>
                  {selectedProduct.installments && (
                    <p className="text-gray-600 mt-2">
                      em <span className="text-[#00A650] font-medium">{selectedProduct.installments}</span>
                    </p>
                  )}
                </div>

                <a 
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3483FA] text-white py-4 px-8 rounded-full font-black text-center hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
                >
                  <ShoppingCart size={22} />
                  COMPRAR AGORA NO MERCADO LIVRE
                </a>
                
                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-widest">
                  Compra Segura Garantida
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <CookieBanner onOpenModal={setModalType} />
    </div>
  );
}
