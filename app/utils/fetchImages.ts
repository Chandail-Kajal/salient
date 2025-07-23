export async function fetchWpImageById(id : any) {
  try {
    const res = await fetch(`https://staging.ekarigar.com/wordpress/wp-json/custom/v1/image/${id}`);
    if (!res.ok) {
      throw new Error(`Image not found (ID: ${id})`);
    }
    const data = await res.json();
    return data; // { id, url, alt, title }
  } catch (error) {
    console.error("Failed to fetch image:", error);
    return null;
  }
}