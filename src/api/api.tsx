
export function getApiUrl(): string | undefined {
    const apiUrl = process.env.NEXT_PUBLIC_API_URI;
    if (!apiUrl) {
      console.error("A variável de ambiente NEXT_PUBLIC_API_URI não está definida.");
    }
    return apiUrl;
  }
  