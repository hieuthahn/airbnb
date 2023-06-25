"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Search = () => {
  const t = useTranslations("Index");

  return (
    <div className="px-6">
      <div>
        <button className="px-3 h-[48px]">
          <Link href="#" locale="vi">
            {t("title")}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Search;
