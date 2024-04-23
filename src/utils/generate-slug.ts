export function generateSlug(text: string): string {
    return text
        .normalize("NFD") // Normaliza para remover acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove caracteres diacríticos
        .replace(/[^\w\s]/g, "") // Remove símbolos
        .trim() // Remove espaços em branco no início e no final
        .replace(/\s+/g, "-") // Substitui espaços por hífens
        .toLowerCase(); // Converte para minúsculas
}


