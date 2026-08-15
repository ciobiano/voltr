"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Dialog, DialogTitle } from "@/components/primitives/dialog";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  aspect?: "portrait" | "video";
}

export function VideoModal({
  open,
  onOpenChange,
  title,
  subtitle,
  description,
  thumbnail,
  aspect = "video",
}: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="max-w-[var(--container-dialog,42rem)]">
      <div className="flex flex-col gap-lg sm:flex-row">
        <div
          className={cn(
            "relative w-full shrink-0 overflow-hidden rounded-lg sm:w-2/5",
            aspect === "portrait" ? "aspect-[9/16]" : "aspect-video",
          )}
        >
          <Image src={thumbnail} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
              <Play size={20} className="ml-0.5 text-text-primary" fill="currentColor" />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-md sm:w-3/5">
          <div className="flex flex-col gap-xs">
            <DialogTitle className="text-subhead text-text-primary">{title}</DialogTitle>
            <p className="text-caption text-text-secondary">{subtitle}</p>
          </div>
          <p className="text-body text-text-secondary">{description}</p>
        </div>
      </div>
    </Dialog>
  );
}
