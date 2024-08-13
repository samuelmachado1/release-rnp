

interface YearReleaseProps {
  year: string;
}

export const YearRelease = (data: YearReleaseProps) => {
  const eventsData = [
    {
      year: "2024",
      flyer: "../../../public/assets/edition-11/flyer.jpg",
      description: "Evento de 2024"
    },
    {
      year: "2023",
      flyer: "../../../public/assets/edition-10/flyer.jpg",
      description: "Evento de 2023"
    },
    {
      year: "2022",
      flyer: "../../../public/assets/edition-09/flyer.jpg",
      description: "Evento de 2022"
    },
    {
      year: "2021",
      flyer: "../../../public/assets/edition-08/flyer.jpg",
      description: "Evento de 2021"
    },
    {
      year: "2020",
      flyer: "../../../public/assets/edition-07/flyer.jpg",
      description: "Evento de 2020"
    },
    {
      year: "2019",
      flyer: "../../../public/assets/edition-06/flyer.jpg",
      description: "Evento de 2019"
    },
    {
      year: "2018",
      flyer: "../../../public/assets/edition-05/flyer.jpg",
      description: "Evento de 2018"
    },
    {
      year: "2017",
      flyer: "../../../public/assets/edition-04/flyer.jpg",
      description: "Evento de 2017"
    },
    {
      year: "2016",
      flyer: "../../../public/assets/edition-03/flyer.jpg",
      description: "Evento de 2016"
    },
    {
      year: "2015",
      flyer: "../../../public/assets/edition-02/flyer.jpg",
      description: "Evento de 2015"
    },
    {
      year: "2014",
      flyer: "../../../public/assets/edition-01/flyer.jpg",
      description: "Evento de 2014"
    }
  ]

  return (
    <div className="h-4/5 w-full flex flex-row gap-1">
      {eventsData.map((event) => {
        if (event.year === data.year) {
          return (
            <>
              <div className="bg-gray-400 border-x w-80 h-68 m-3">
                <img className="h-full w-full" src={event.flyer} alt="Imagem do evento" />
              </div>
              <div className="bg-blue-300 border-x w-full h-32 m-3">
                <p className="m-5 text-2xl font-bold">{event.description}</p>
              </div>
            </>
          )
        }
      })}

    </div>
  )
}