import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:info@mudanzasexpress.com"
                className="text-lg hover:underline"
              >
                info@mudanzasexpress.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:+123456789" className="text-lg hover:underline">
                +1 (234) 567-89
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg">Bogotá, Colombia</span>
            </div>
            <div className="flex space-x-6 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Facebook className="h-8 w-8 text-primary hover:text-primary/80" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Instagram className="h-8 w-8 text-primary hover:text-primary/80" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Twitter className="h-8 w-8 text-primary hover:text-primary/80" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Button className="w-full text-lg py-6" size="lg" asChild>
              <a
                href="https://wa.me/+573112243343"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
