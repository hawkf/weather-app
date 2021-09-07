import React from "react";
import { LocationForm } from "../location-form/location-form";
import { ResultInformationDay } from "../result-information-day/result-information-day";

const testArray = [1, 2, 3, 4, 5, 6, 7];

export function WeekWeatherMain() {
  return (
    <main className='main-page'>
      <LocationForm />
      <section className='result-information'>
        <h2 className='result-information__title'>Nigeria, NG</h2>
        <ul className='result-information__list'>
          {testArray.map((item) => {
            return <ResultInformationDay key={item} />;
          })}
        </ul>
      </section>
    </main>
  );
}
