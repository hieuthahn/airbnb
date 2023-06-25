"use client";

import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return <h1>{"13132 " + t("title")}</h1>;
}
