import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import heroVideo from "../video/heroVideo.mp4"

const IndexPage = () => (
  <Layout>
    <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
      <video
        class="w-full h-full object-cover object-center absolute inset-0"
        src={heroVideo}
        autoPlay
        muted
        loop
      /> 

      <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>

      <div class="sm:max-w-xl flex flex-col items-center relative p-4">
        <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
          Nowoczesny design
        </p>
        <h2 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
          Stwórz swoją wizytówkę w internecie z nami!
        </h2>

        <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <a
            href="./src/html/showMore.html"
            class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200  hover:scale-105 px-8 py-3"
          >
            Wiecej Informacji
          </a>

          <a
            href="./src/html/gallery.html"
            class="inline-block bg-gray-200 hover:bg-gray-300 hover:text-white focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 hover:scale-105 px-8 py-3"
          >
            Nasze Strony
          </a>
        </div>
      </div>
    </section>

    <section class="text-gray-800 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
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
