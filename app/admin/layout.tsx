export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        <header className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Admin</p>
          <h1 className="font-display text-3xl font-bold text-ink">Launch HQ Control Tower</h1>
          <p className="text-sm text-neutral-600">
            Manage wizard content, review submissions, and push CRM syncs. This starter layout uses placeholder data until backend services are ready.
          </p>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
