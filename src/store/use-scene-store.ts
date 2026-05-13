import { create } from "zustand";

type Scene = "hero" | "performance" | "interior";

interface SceneState {
  active: Scene;
  previous: Scene | null;
  setScene: (scene: Scene) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  active: "hero",
  previous: null,
  setScene: (scene) =>
    set((state) => ({
      active: scene,
      previous: state.active,
    })),
}));
