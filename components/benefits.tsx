"use client";

import { useState } from "react";
import {
  Truck,
  Clock,
  Shield,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Definir los beneficios con iconos de Lucide React
const benefits = [
  {
    icon: Truck,
    title: "Servicio rápido y eficiente",
    description:
      "Realizamos mudanzas en tiempo récord sin comprometer la calidad. Nuestro equipo altamente capacitado utiliza técnicas modernas y equipos especializados para garantizar que su mudanza se realice de manera rápida y segura. Entendemos que el tiempo es valioso, por lo que nos esforzamos por completar cada mudanza de manera eficiente, minimizando las interrupciones en su vida diaria.",
    images: [
      "/delivery-man-with-stack-packages.jpg",
      "/4342804.jpg",
      "/front-view-delivery-men-job-concept.jpg",
    ],
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Estamos disponibles a cualquier hora para adaptarnos a tu horario. Entendemos que las mudanzas pueden ser necesarias en cualquier momento, por lo que ofrecemos servicios flexibles que se ajustan a su agenda. Ya sea que necesite una mudanza urgente en medio de la noche o prefiera programar su mudanza durante el fin de semana, estamos aquí para ayudarle. Nuestra disponibilidad constante garantiza que siempre tendrá acceso a nuestros servicios cuando más los necesite.",
    images: [
      "/delivery-man-with-stack-packages.jpg",
      "/4342804.jpg",
      "/front-view-delivery-men-job-concept.jpg",
    ],
  },
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description:
      "Tus pertenencias están aseguradas durante todo el proceso de mudanza. Utilizamos materiales de embalaje de alta calidad y técnicas avanzadas para proteger sus objetos valiosos. Nuestro personal está capacitado en el manejo adecuado de artículos frágiles y de alto valor. Además, contamos con un seguro integral que cubre cualquier imprevisto durante el transporte. Con nosotros, puede estar tranquilo sabiendo que sus posesiones están en buenas manos.",
    images: [
      "/delivery-man-with-stack-packages.jpg",
      "/4342804.jpg",
      "/front-view-delivery-men-job-concept.jpg",
    ],
  },
  {
    icon: ThumbsUp,
    title: "Satisfacción del cliente",
    description:
      "Nuestro objetivo principal es tu completa satisfacción con nuestro servicio. Nos enorgullecemos de mantener altos estándares de calidad en cada aspecto de nuestro trabajo. Escuchamos atentamente sus necesidades y nos esforzamos por superar sus expectativas. Nuestro equipo está comprometido con la excelencia en el servicio al cliente, y trabajamos incansablemente para garantizar que su experiencia de mudanza sea lo más positiva y libre de estrés posible.",
    images: [
      "/delivery-man-with-stack-packages.jpg",
      "/4342804.jpg",
      "/front-view-delivery-men-job-concept.jpg",
    ],
  },
];

interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Tipo adecuado para los iconos de lucide-react
  images: string[]; // Un arreglo de URLs de imágenes
}

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? benefit.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === benefit.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const Icon = benefit.icon; // Se asigna el icono dinámicamente

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-4">
      <div className="text-primary">
        <Icon className="h-12 w-12" /> {/* Renderizamos el icono */}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
      <div className="relative w-full pt-[56.25%] mt-4">
        <Image
          src={benefit.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${benefit.title} imagen ${currentImageIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 z-10"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 z-10"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Beneficios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
