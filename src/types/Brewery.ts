export namespace Brewery {
  export interface Model {
    id: string;
    name: string;
    brewery_type: string;
    address_1?: string;
    address_2?: string;
    address_3?: string;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    longitude?: number;
    latitude?: number;
    phone?: string;
    website_url?: string;
    state: string;
    street?: string;
  }

  // return a formatted address string
  export function getAddress(brewery: Brewery.Model): string {
    const segments = [
      brewery.street?.trim(),
      brewery.city?.trim(),
      `${brewery.state} ${brewery.postal_code}`.trim(),
    ].filter((s): s is string => Boolean(s));
    return segments.join(", ");
  }
}

