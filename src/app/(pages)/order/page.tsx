import { ClientProviders } from "@/motion/client-providers";
import { ProductNav } from "@/components/soul/navigation/product-nav";
import { FooterSection } from "@/components/soul/footer/footer-section";
import { OrderConfiguratorSection } from "@/sections/order/order-configurator-section";

export default function OrderPage() {
  return (
    <ClientProviders>
      <ProductNav />
      <main className="pt-18">
        <OrderConfiguratorSection />
      </main>
      <FooterSection />
    </ClientProviders>
  );
}
