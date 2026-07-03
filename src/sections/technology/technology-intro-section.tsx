import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { Label } from "@/components/primitives/label";
import { MascotIcon } from "@/components/primitives/mascot-icon";
import { RevealLines } from "@/components/primitives/reveal-lines";
import { SplitSection } from "@/components/primitives/split-section";

export function TechnologyIntroSection() {
  return (
    <section className="bg-surface-primary">
      <Container size="lg">
        <RevealLines className=" pr-0 pt-6 pb-24  md:pt-8 md:pb-28 text-heading-xl  text-text-primary">
          From our aerodynamic profile to our integrated battery systems, every
          element of the platform is engineered to unlock more performance,
          enhance comfort, and deliver more freedom on the road — whether
          you&apos;re towing across the Sierras or boondocking in the desert.
        </RevealLines>
      </Container>

      <Container
        size="lg"
        className="flex flex-col mx-auto items-center gap-6 text-center py-20 md:py-28"
      >
        <div className="flex justify-center gap-4 pt-20 pb-16 md:pt-24 md:pb-20">
          <MascotIcon size="4.25rem" className="text-text-primary" />
          <MascotIcon size="4.25rem" className="text-text-primary " />
        </div>
        <Label className="tracking-[var(--tracking-mono)]">
          Aero-Electric Platform
        </Label>
        <Heading level="h1" as="h2" className="items-center justify-center text-size-2xl leading-heading tracking-mono text-stroke   ">
          Built to Move. 
          <br />
          Built to last a Lifetime.
        </Heading>
      </Container>

      <Container
        size="lg"
        className="flex flex-col md:max-w-10/12 mt-20 mx-auto gap-16 md:gap-40 pb-20 md:pb-28"
      >
        <SplitSection
          textWidth="max-w-[30rem]"
          media={
            <Image
              src="/images/rv-images/lifestyle.png"
              alt="Aerodynamic on the Road, Expansive at Camp"
              fill
            />
          }
          mediaPosition="right"
          mediaClassName="md:h-[40vh] md:w-[60vw] aspect-[4/3]"
          eyebrow="Shape-Shifting Design"
          heading={
            <>
              Aerodynamic on the Road,
              <br />
              Expansive at Camp
            </>
          }
          body="The Aero-Electric platform reshapes itself for whatever's ahead — low and slippery at highway speed, tall and livable the moment you park. No cranks, no manual setup, just a cabin that adapts to the trip."
        />

        <SplitSection
          media={
            <Image
              src="/images/rv-images/interior.png"
              alt="Stress-Tested for Rock-Solid Towing"
              fill
            />
          }
          textWidth="max-w-[30rem] "
          mediaPosition="left"
          mediaClassName="md:h-[39vh] md:w-[60vw] aspect-[8/8]"
          eyebrow="Confidence in Motion"
          heading={
            <>
              Stress-Tested for
              <br />
              Rock-Solid Towing
            </>
          }
          body="TrekDrive pairs intelligent vehicle assist with a proprietary smart hitch, sensing force between trailer and tow vehicle to add power on climbs and controlled braking on descents — proven durable, wherever you roam."
        />
      </Container>
    </section>
  );
}
