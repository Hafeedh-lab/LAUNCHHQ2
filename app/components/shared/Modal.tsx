'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

interface ModalProps {
  trigger: React.ReactNode
  title: string
  description?: string
  children: React.ReactNode
}

export function Modal({ trigger, title, description, children }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-neutral-200 bg-white p-8 shadow-wizard focus:outline-none">
          <Dialog.Title className="font-display text-2xl font-semibold text-ink">{title}</Dialog.Title>
          {description && <Dialog.Description className="mt-2 text-sm text-neutral-600">{description}</Dialog.Description>}
          <div className="mt-6 max-h-[70vh] overflow-y-auto pr-2 text-sm text-neutral-700">{children}</div>
          <Dialog.Close className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-neutral-200" aria-label="Close">
            <X className="h-4 w-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
