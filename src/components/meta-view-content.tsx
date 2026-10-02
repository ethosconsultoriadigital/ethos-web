"use client";

import { useEffect } from "react";

import { trackMetaEvent } from "@/lib/meta-pixel";

type MetaViewContentProps = {
  contentName: string;
  contentCategory: string;
};

/** ViewContent al cargar una página de servicio. */
export function MetaViewContent({
  contentName,
  contentCategory,
}: MetaViewContentProps) {
  useEffect(() => {
    trackMetaEvent("ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
    });
  }, [contentName, contentCategory]);

  return null;
}
