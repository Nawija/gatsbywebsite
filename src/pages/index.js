import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>

    <Hero />

    <section class="text-gray-800 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-col text-center p-12 w-full">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Strony Internetowe z Systemami SEO
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-black capitalize px-2">
            Tworzenie stron internetowych
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Jako agencja stron internetowych, oferujemy szeroki zakres usług, od
            projektowania i tworzenia stron pod kątem SEO, po ich hosting i
            utrzymanie. Dbamy o to, aby nasze projekty były przyjazne dla
            użytkownika i skutecznie promowały biznes naszych klientów.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-black font-medium title-font mb-2">
              SEO
            </h2>
            <p class="leading-relaxed text-base mb-4">
              Tworząc strony przyjazne dla SEO, skupiamy się na tym, aby
              zwiększyć widoczność strony w wynikach wyszukiwania, poprawić jej
              ranking i zwiększyć ruch na stronie. Dzięki temu, Twoja strona
              internetowa będzie lepiej widoczna dla potencjalnych klientów
            </p>
            <a
              href="./src/html/showMore.html#seo"
              class="text-indigo-500 inline-flex items-center hover:tracking-widest transition-all duration-500"
            >
              Zobacz więcej
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-black font-medium title-font mb-2">
              Design
            </h2>
            <p class="leading-relaxed text-base mb-4">
              Nasze projekty to połączenie piękna i użyteczności, tworzymy
              strony internetowe, które zachwycają swoim designem i skutecznie
              promują biznes
            </p>
            <a
              href="./src/html/showMore.html"
              class="text-indigo-500 inline-flex items-center hover:tracking-widest transition-all duration-500"
            >
              Zobacz więcej
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-black font-medium title-font mb-2">
              Krok Po Kroku
            </h2>
            <p class="leading-relaxed text-base mb-4">
              Jeśli chcesz zakupić profesjonalną stronę internetową, jesteśmy
              tutaj, aby Ci pomóc. Przeprowadzimy Cię przez cały proces zakupu,
              krok po kroku, aby zapewnić Ci najlepsze rozwiązania dostosowane
              do Twoich potrzeb i wymagań
            </p>
            <a
              href="./src/html/showMore.html"
              class="text-indigo-500 inline-flex items-center hover:tracking-widest transition-all duration-500"
            >
              Zobacz więcej
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-black font-medium title-font mb-2">
              Regulamin
            </h2>
            <p class="leading-relaxed text-base mb-4">
              warunki i zasady zakupu strony internetowej od naszej firmy.
              Zawiera on informacje dotyczące cen, warunków płatności, terminów
              realizacji, prawa autorskiego oraz warunków gwarancji i serwisu
            </p>
            <a
              href="./src/html/showMore.html"
              class="text-indigo-500 inline-flex items-center hover:tracking-widest transition-all duration-500"
            >
              Zobacz więcej
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
