export function URLEncoder(raw: string): string {
  return encodeURI(raw);
}

export function URLDecoder(raw: string): string {
  return decodeURI(raw);
}
