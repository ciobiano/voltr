"use client";

import { useEffect } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { VOLTR_EASING } from "@/motion/easing";
import {
  dialogOverlayVariants,
  dialogContentVariants,
  dialogPanelVariants,
  dialogCloseVariants,
} from "@/design-system/variants";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children, className }: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <RadixDialog.Portal forceMount>
            <RadixDialog.Overlay asChild forceMount>
              <motion.div
                className={dialogOverlayVariants()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: VOLTR_EASING.card }}
              />
            </RadixDialog.Overlay>

            <RadixDialog.Content asChild forceMount>
              <motion.div
                className={cn(dialogContentVariants(), className)}
                initial={{ opacity: 0, scale: 0.96, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.96, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.3, ease: VOLTR_EASING.card }}
              >
                <div className={dialogPanelVariants()}>{children}</div>
                <RadixDialog.Close asChild>
                  <button type="button" className={dialogCloseVariants()} aria-label="Close">
                    <X size={18} strokeWidth={2.5} />
                  </button>
                </RadixDialog.Close>
              </motion.div>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        )}
      </AnimatePresence>
    </RadixDialog.Root>
  );
}

export const DialogTitle = RadixDialog.Title;
export const DialogDescription = RadixDialog.Description;
