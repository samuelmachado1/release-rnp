import { useState } from "react"
import { EditionRelease } from "./components/editionRelease/editionRelease"
export function App() {
  const [edition, setEdition] = useState(0)
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
                  setEdition(11)
                }>
                11a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(10)
                }>
                10a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(9)
                }>
                9a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(8)
                }>
                8a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(7)
                }>
                7a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(6)
                }>
                6a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(5)
                }>
                5a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(4)
                }>
                4a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(3)
                }>
                3a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(2)
                }>
                2a Edição
              </button>
            </li>
            <li className="m-5 text-1xl font-bold">
              <button
                onClick={() =>
                  setEdition(1)
                }>
                1a Edição
              </button>
            </li>
          </ol>
        </div>
        <div className="h-full row-span-5 col-span-11 bg-cyan-200 p-5">
          {edition === 11 && <EditionRelease year="11" />}
          {edition === 10 && <EditionRelease year="10" />}
          {edition === 9 && <EditionRelease year="9" />}
          {edition === 8 && <EditionRelease year="8" />}
          {edition === 7 && <EditionRelease year="7" />}
          {edition === 6 && <EditionRelease year="6" />}
          {edition === 5 && <EditionRelease year="5" />}
          {edition === 4 && <EditionRelease year="4" />}
          {edition === 3 && <EditionRelease year="3" />}
          {edition === 2 && <EditionRelease year="2" />}
          {edition === 1 && <EditionRelease year="1" />}
        </div>
      </div>
    </>
  )
}