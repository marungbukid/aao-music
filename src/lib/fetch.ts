export const fetcher = async (
  input: string | URL | globalThis.Request,
  init?: RequestInit
) =>
  await fetch(process.env.BASE_URL! + input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
    },
  });
