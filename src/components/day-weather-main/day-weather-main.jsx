import React from "react";
import { LocationForm } from "../location-form/location-form";
import { ResultInformationDay } from "../result-information-day/result-information-day";

export function DayWeatherMain() {
  return (
    <main className='main-page'>
      <LocationForm />
      <section className='result-information'>
        <h2 className='result-information__title'>Nigeria, NG</h2>
        <ul className='result-information__list'>
          <ResultInformationDay />
        </ul>
      </section>
    </main>
  );
}
