"use client";
import React, { useEffect, useState } from "react";
import styles from "./MainWrapper.module.scss";
import Header from "@/Header/Header";
import { MainSection } from "@/MainSection/MainSection";
import { About } from "@/About/About";

import { Loader } from "@/Loader/Loader";
import InfiniteTextScroll from "@/InfiniteText/ InfiniteText";
import {Experience} from "@/Expirience/Experience";
import {Scale} from "@/Scale/Scale";
import EducationSection from "@/Education/Education";
import {PlasmaBallCanvas} from "@/canvasContainer/Ball";
import {Footer} from "@/Footer/Footer";

export default function MainWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Можно подождать пока все изображения и динамические данные загрузятся
    const images = Array.from(document.images);
    const promises = images.map(
      (img) =>
        new Promise((res) => {
          if (img.complete) res(true);
          else img.onload = img.onerror = () => res(true);
        })
    );

    Promise.all(promises).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
      <div className={styles.wrapper}>
          {isLoading && <Loader/>} {/* Показываем локальный лоадер пока контент грузится */}

          <MainSection setLoader={setIsLoading}/>
          <InfiniteTextScroll/>
          <Scale/>

          <Experience/>
          <section id="education" className="py-20 px-6 bg-surface/30">
              <div className="animate-fade-in-up">
                  <EducationSection/>
              </div>
          </section>
          <Footer />
<div className={styles["wrapper--ball"]}>
<  PlasmaBallCanvas />
    </div>
      </div>
  );
}
