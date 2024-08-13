import { useState } from "react"
import { YearRelease } from "./components/yearRelease"
export function App() {
  const [year, setYear] = useState(0)
  return (
    <>
      <div className="p-10 bg-white grid grid-cols-12 grid-rows-10 gap-2 flex-row">
        <div className="h-20 col-span-12 bg-orange-300">
          <h1 className="m-5 text-2xl font-bold">Reggae na Praça - 10 anos</h1>
        </div>
        <div className="h-full col-span-1 row-span-5 bg-red-300">
          <ol>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2024)
                }>
                2024
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2023)
                }>
                2023
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2022)
                }>
                2022
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2021)
                }>
                2021
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2020)
                }>
                2020
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2019)
                }>
                2019
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2018)
                }>
                2018
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2017)
                }>
                2017
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2016)
                }>
                2016
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2015)
                }>
                2015
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setYear(2014)
                }>
                2014
              </button>
            </li>
          </ol>
        </div>
        <div className="h-full row-span-5 col-span-11 bg-cyan-200 p-5">
          {year === 2024 && <YearRelease year="2024" />}
          {year === 2023 && <YearRelease year="2023" />}
          {year === 2022 && <YearRelease year="2022" />}
          {year === 2021 && <YearRelease year="2021" />}
          {year === 2020 && <YearRelease year="2020" />}
          {year === 2019 && <YearRelease year="2019" />}
          {year === 2018 && <YearRelease year="2018" />}
          {year === 2017 && <YearRelease year="2017" />}
          {year === 2016 && <YearRelease year="2016" />}
          {year === 2015 && <YearRelease year="2015" />}
          {year === 2014 && <YearRelease year="2014" />}
        </div>
      </div>
    </>
  )
}