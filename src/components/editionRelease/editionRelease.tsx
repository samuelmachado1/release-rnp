

interface EditionReleaseProps {
  year: string;
}

export const EditionRelease = (data: EditionReleaseProps) => {
  const eventsData = [
    {
      year: "2024",
      flyer: "../../../public/assets/edition-11/flyer.jpg",
      description: "Evento de 2024",
      edition: "11"
    },
    {
      year: "2023",
      flyer: "../../../public/assets/edition-10/flyer.jpg",
      description: "Evento de 2023",
      edition: "10"
    },
    {
      year: "2022",
      flyer: "../../../public/assets/edition-09/flyer.jpg",
      description: "Evento de 2022",
      edition: "9"
    },
    {
      year: "2021",
      flyer: "../../../public/assets/edition-08/flyer.jpg",
      description: "Evento de 2021",
      edition: "8"
    },
    {
      year: "2020",
      flyer: "../../../public/assets/edition-07/flyer.jpg",
      description: "Evento de 2020",
      edition: "7"
    },
    {
      year: "2019",
      flyer: "../../../public/assets/edition-06/flyer.jpg",
      description: "Evento de 2019",
      edition: "6"
    },
    {
      year: "2018",
      flyer: "../../../public/assets/edition-05/flyer.jpg",
      description: "Evento de 2018",
      edition: "5"
    },
    {
      year: "2017",
      flyer: "../../../public/assets/edition-04/flyer.jpg",
      description: "Evento de 2017",
      edition: "4"
    },
    {
      year: "2016",
      flyer: "../../../public/assets/edition-03/flyer.jpg",
      description: "Evento de 2016",
      edition: "3"
    },
    {
      year: "2015",
      flyer: "../../../public/assets/edition-02/flyer.jpg",
      description: "Evento de 2015",
      edition: "2"
    },
    {
      year: "2014",
      flyer: "../../../public/assets/edition-01/flyer.jpg",
      description: "Evento de 2014",
      edition: "1"
    }
  ]

  return (
    <div className="h-4/5 w-full flex flex-row gap-1">
      {eventsData.map((event) => {
        if (event.edition === data.year) {
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