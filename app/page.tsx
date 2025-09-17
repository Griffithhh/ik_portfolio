"use client";
import { useEffect, useState } from "react";
import MainWrapper from "@/MainWrapper/MainWrapper";
import { Loader } from "@/Loader/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_TIME = 1500; // минимальное время лоадера в мс
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = MIN_TIME - elapsed;
      if (remaining > 0) {
        setTimeout(() => setIsLoading(false), remaining);
      } else {
        setIsLoading(false);
      }
    };

    // Если страница уже загружена
    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    // Ждём полной загрузки всех ресурсов
    const handleLoad = () => finishLoading();
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <>{isLoading ? <Loader /> : <MainWrapper />}</>;
}
