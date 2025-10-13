export function injectVariables(template: string, vars: Record<string, string>) {
  return template.replace(/{{(.*?)}}/g, (_, key) => vars[key.trim()] ?? '')
}
