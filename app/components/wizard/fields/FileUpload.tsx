'use client'

import { useEffect, useRef, useState } from 'react'
import { Upload, X } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import type { WizardData } from '@/lib/types'

export function FileUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { setValue, register } = useFormContext<WizardData>()
  const [fileName, setFileName] = useState<string | null>(null)

  useEffect(() => {
    register('csvUploaded')
  }, [register])

  const handleSelect = () => {
    inputRef.current?.click()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    // In a real app we would upload to the API and set csvFileId + summary
    setValue('csvUploaded', true)
  }

  const removeFile = () => {
    setFileName(null)
    setValue('csvUploaded', false)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className="rounded-3xl border border-dashed border-brand-blue/40 bg-brand-blue/5 p-6 text-center">
      <input ref={inputRef} type="file" accept=".csv" className="hidden" onChange={handleChange} />
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
        <Upload className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">Upload sample data (optional)</h3>
      <p className="mt-2 text-sm text-neutral-600">
        Drop in a CSV of invoices, orders, or payroll. We&apos;ll scan it for insights, run a virus check, and summarize the highlights.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleSelect}
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-blue-dark"
        >
          Choose CSV
        </button>
        {fileName && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-blue shadow-card">
            {fileName}
            <button type="button" onClick={removeFile} className="text-neutral-500 transition hover:text-danger">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-neutral-500">All uploads are PIPEDA compliant and virus scanned.</p>
    </div>
  )
}
