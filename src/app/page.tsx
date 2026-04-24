"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Начало",          id: "hero"},
        {
          name: "Услуги",          id: "features"},
        {
          name: "Контакти",          id: "contact"},
      ]}
      brandName="Web Studio BG"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Web Studio BG - Вашият дигитален партньор"
      description="Правим модерни сайтове, които превръщат посетителите в реални клиенти. Увеличете бизнеса си с професионално присъствие онлайн."
      buttons={[
        {
          text: "Свържи се с нас",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-boardroom-with-digital-monitor_482257-123487.jpg?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_1098-21013.jpg",          alt: "Portrait of confident businessman"},
        {
          src: "http://img.b2bpic.net/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg",          alt: "Dark blonde bearded man"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-businessman-smiling-camera_1163-4660.jpg",          alt: "Happy businessman smiling"},
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blond-male-dressed-suit-dark-grey-background_613910-14130.jpg",          alt: "Attractive blond male"},
        {
          src: "http://img.b2bpic.net/free-photo/creative-portrait-beautiful-woman_23-2149150308.jpg",          alt: "Creative portrait of woman"},
      ]}
      avatarText="Над 50 доволни клиенти"
      marqueeItems={[
        {
          type: "text",          text: "UI/UX Дизайн"},
        {
          type: "text",          text: "Web Development"},
        {
          type: "text",          text: "SEO Оптимизация"},
        {
          type: "text",          text: "Брандинг"},
        {
          type: "text",          text: "Поддръжка"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Ние създаваме опит, не просто сайтове."},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/cool-different-office-stationery-arranged-white-table-co-working-office_285396-1791.jpg",          alt: "Studio process"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Сайтове за малък бизнес",          description: "Бързи и оптимизирани уебсайтове.",          imageSrc: "http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301538.jpg?_wi=1",          titleImageSrc: "http://img.b2bpic.net/free-photo/rag-doll-with-dollar-sign_1156-149.jpg",          buttonText: "Научи повече"},
        {
          title: "Мобилен дизайн",          description: "Сайтове, които изглеждат перфектно на всеки телефон.",          imageSrc: "http://img.b2bpic.net/free-photo/responsive-design-layout-internet-concept_53876-124371.jpg?_wi=1",          titleImageSrc: "http://img.b2bpic.net/free-photo/worker-examines-phone-with-greenscreen_482257-76605.jpg",          buttonText: "Научи повече"},
        {
          title: "Повече клиенти",          description: "Фокус върху конверсии и резултати.",          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904303.jpg?_wi=1",          titleImageSrc: "http://img.b2bpic.net/free-photo/business-report-graphs-charts-business-concept_1150-2270.jpg",          buttonText: "Научи повече"},
      ]}
      title="Какво предлагаме"
      description="Пълно обслужване за вашия бизнес в дигиталния свят."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Иван Петров",          date: "2024",          title: "CEO",          quote: "Страхотна работа и бърза комуникация.",          tag: "Успех",          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-entrepreneur-posing-camera_1262-3636.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/modern-boardroom-with-digital-monitor_482257-123487.jpg?_wi=2",          imageAlt: "professional man portrait"},
        {
          id: "2",          name: "Мария Иванова",          date: "2024",          title: "Мениджър",          quote: "Сайтът увеличи запитванията ни двойно.",          tag: "Успех",          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-painter-white-shirt-chair-dreamily-looking-camera-while-holding-paint-brushes-hand-home_574295-3798.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/cool-different-office-stationery-arranged-white-table-co-working-office_285396-1791.jpg",          imageAlt: "professional man portrait"},
        {
          id: "3",          name: "Георги Колев",          date: "2024",          title: "Предприемач",          quote: "Професионално отношение и модерен дизайн.",          tag: "Успех",          avatarSrc: "http://img.b2bpic.net/free-photo/american-african-black-beautiful-business_1303-1344.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301538.jpg?_wi=2",          imageAlt: "professional man portrait"},
        {
          id: "4",          name: "Елена Димитрова",          date: "2024",          title: "Собственик",          quote: "Много доволна от крайния резултат.",          tag: "Успех",          avatarSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-with-curly-hair-isolated_273609-48186.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/responsive-design-layout-internet-concept_53876-124371.jpg?_wi=2",          imageAlt: "professional man portrait"},
        {
          id: "5",          name: "Николай Николов",          date: "2024",          title: "Директор",          quote: "Препоръчвам горещо услугите им.",          tag: "Успех",          avatarSrc: "http://img.b2bpic.net/free-photo/business-man-working-tablet-sitting-sofa_1303-24087.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904303.jpg?_wi=2",          imageAlt: "professional man portrait"},
      ]}
      title="Какво казват клиентите ни"
      description="Доволни партньори от цялата страна."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={true}
      names={[
        "Google",        "Microsoft",        "Amazon",        "Apple",        "Stripe",        "Adobe",        "Shopify"]}
      title="Партньори"
      description="Доверени от водещи компании."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "100+",          title: "Проекта",          description: "Успешно реализирани",          icon: CheckCircle,
        },
        {
          id: "m2",          value: "50+",          title: "Клиенти",          description: "Доволни партньори",          icon: Star,
        },
        {
          id: "m3",          value: "99%",          title: "Удовлетвореност",          description: "Средна оценка",          icon: Award,
        },
      ]}
      title="Нашите успехи"
      description="Резултатите говорят сами по себе си."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Колко време отнема?",          content: "Обикновено от 2 до 4 седмици."},
        {
          id: "2",          title: "Мога ли да си редактирам сайта?",          content: "Да, предоставяме лесен за управление интерфейс."},
        {
          id: "3",          title: "Предлагате ли поддръжка?",          content: "Да, предлагаме абонаментни планове за поддръжка."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lot-gingerbread-candy-cane-shaped-cookies-red-background_169016-26737.jpg"
      title="Чести въпроси"
      description="Всичко, което трябва да знаете."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Свържете се с нас"
      description="Get a free consultation today. Готови ли сте да започнем вашия проект?"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Вашето име",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Вашият имейл",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Съобщение",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/spacious-room-with-transparent-walls_1203-622.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Навигация",          items: [
            {
              label: "Начало",              href: "#hero"},
            {
              label: "Услуги",              href: "#features"},
          ],
        },
        {
          title: "Правни",          items: [
            {
              label: "Политика за поверителност",              href: "#"},
          ],
        },
      ]}
      logoText="Web Studio BG"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}