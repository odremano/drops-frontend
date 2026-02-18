import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.PUBLIC_PB_URL);

export interface Product {
  id: string;
  collectionId: string;
  name: string;
  price: number;
  color: string;
  size: string;
  image: string[];
  state: string[];
}

export function getImageUrl(collectionId: string, recordId: string, filename: string): string {
  return `${import.meta.env.PUBLIC_PB_URL}/api/files/${collectionId}/${recordId}/${filename}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);
}

export function buildWhatsAppLink(item: Product): string {
  const number = import.meta.env.PUBLIC_WA_NUMBER;
  const text = encodeURIComponent(
    `Hola! Quiero reservar el ${item.name} (Talle ${item.size}). ID: ${item.id}`
  );
  return `https://wa.me/${number}?text=${text}`;
}
