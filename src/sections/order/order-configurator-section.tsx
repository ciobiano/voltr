"use client";

import { useState } from "react";
import { OrderImageViewer, type OrderView } from "@/sections/order/order-image-viewer";
import { OrderConfiguratorPanel } from "@/sections/order/order-configurator-panel";

interface ConfiguratorState {
  view: OrderView;
  exteriorColor: string;
  interiorColor: string;
  upgrades: Record<string, boolean>;
  accessories: Record<string, boolean>;
}

const initialState: ConfiguratorState = {
  view: "interior",
  exteriorColor: "SnowLine",
  interiorColor: "Dune",
  upgrades: {},
  accessories: {},
};

export function OrderConfiguratorSection() {
  const [state, setState] = useState<ConfiguratorState>(initialState);

  return (
    <section className="bg-surface-primary font-display">
      <div className="grid grid-cols-1 items-start gap-sm px-2 pt-2 md:grid-cols-[1fr_500px]">
        <OrderImageViewer
          view={state.view}
          onChangeView={(view) => setState((s) => ({ ...s, view }))}
        />

        <OrderConfiguratorPanel
          exteriorColor={state.exteriorColor}
          interiorColor={state.interiorColor}
          onSelectExterior={(name) => setState((s) => ({ ...s, exteriorColor: name }))}
          onSelectInterior={(name) => setState((s) => ({ ...s, interiorColor: name }))}
          selectedUpgrades={state.upgrades}
          onToggleUpgrade={(name) =>
            setState((s) => ({
              ...s,
              upgrades: { ...s.upgrades, [name]: !s.upgrades[name] },
            }))
          }
          selectedAccessories={state.accessories}
          onToggleAccessory={(name) =>
            setState((s) => ({
              ...s,
              accessories: { ...s.accessories, [name]: !s.accessories[name] },
            }))
          }
        />
      </div>
    </section>
  );
}
