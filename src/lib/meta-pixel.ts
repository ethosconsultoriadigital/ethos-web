type MetaEventParams = {
  content_name?: string;
  content_category?: string;
};

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: MetaEventParams
    ) => void;
  }
}

/** Dispara eventos del píxel sin datos personales. */
export function trackMetaEvent(
  event: "ViewContent" | "Lead" | "Contact" | "PageView",
  params?: MetaEventParams
) {
  if (typeof window === "undefined") {
    return;
  }

  if (!process.env.NEXT_PUBLIC_META_PIXEL_ID) {
    return;
  }

  if (typeof window.fbq !== "function") {
    return;
  }

  if (params) {
    window.fbq("track", event, params);
    return;
  }

  window.fbq("track", event);
}
