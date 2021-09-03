import React from "react"

function App() {
  const [Value, setValue] = React.useState()
  const [Data, setData] = React.useState()

  // Get Data from API
  const getData = async (location) => {
    const response = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${Value}&units=metric`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "b8442541a0msh3e3a3e1ed20cf13p17391cjsn6db72ae58944",
        },
      }
    )

    const data = await response.json()

    response.status === 200 && setData(data);
  }

  return (
    <div className="app">
      <header className="header">
        <input
          type="search"
          className="input"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={() => getData(Value)}>Search</button>
      </header>

      <main>
        {Data ? (
          <section>
            <div className="group">
              <strong>Location: </strong>
              <span>{Data.name}</span>
            </div>

            <div className="group">
              <strong>Temperature: </strong>
              <span>{Data.main.temp} &#176;C</span>
            </div>
          </section>
        ) : (
          <h2>Search by location</h2>
        )}
      </main>
    </div>
  )
}

export default App
