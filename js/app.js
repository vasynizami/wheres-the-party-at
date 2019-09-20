$(function () {
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('submitting')
    const query = $('#query').val()

    songKickMetroId (query)
    // processRequest (query)
  })

  $('#connectSoundcloud').click(() => {
    //a new pop-up window should appear
  })

  // function displayResults (data) {
  //   console.log('data in displayResults:', data)

    // // 1. print out date
    // $('#date').html(`
    //   <p></p>
    // `)
    //
    // // 2. print out name of the event
    // $('#eventName').html(`
    //   <p></p>
    // `)

    // // 3. print out lineup
    // $('#lineup').html(`
    //   <p></p>
    // `)
    //
    // // 4. print out SongKick link
    // $('#link').html(`
    //   <p></p>
    // `)

  // }

  // async function processRequest (query) {
  //     try {
  //       // 1. make an API request to SongKick to find metroAreaId
  //       const locationData = await songKickMetroId (query)
  //       console.log(locationData)
  //
  //
  //       // 2. make an API request to SongKick to find events
  //       const calendarData = await songKick (metroAreaId)
  //       console.log(calendarData)
  //
  //
  //
  //       // es6 syntax
  //       // displayResults({ weatherData, giphyData, giphyWeatherDesc })
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }

  // finding metro area Id by location
  async function songKickMetroId (query) {
     try {
       const url = 'https://api.songkick.com/api/3.0/search/locations.json'
       const apiKey = 'TqavoctyFoq8jj9i'

       // make api request using axios (JSON = response)
       const response = await axios.get(url, {
         params: {
           apikey: apiKey,
           query: query
         }
       })

        console.log(response)
        // songKick (response, query)

      } catch (e) {
        console.log(e)
      }
  }


  // // finding calendar of events in certain metro area
  // async function songKick (metroAreaId) {
  //    try {
  //
  //      const url = 'https://api.songkick.com/api/3.0/metro_areas'
  //      const apiKey = 'TqavoctyFoq8jj9i'
  //
  //      // make api request using axios
  //      const response = await axios.get(url, {
  //        params: {
  //          apikey: apiKey,
  //          metro_area_id: metroAreaId.data.resultsPage.results.location[0].metroArea.id,
  //          min_date: '2019-09-14',
  //          max_date: '2019-10-14'
  //        }
  //      })
  //
  //      console.log(response)
  //
  //    } catch (e) {
  //      console.log(e)
  //    }
  //  }

   // async function soundCloud (data) {
   //    try {
   //      const url = 'https://api.soundcloud.com'
   //      const apiKey = 'cc9a68be6a2bb7223494dae134d1a0ad'
   //
   //      // make api request using axios
   //      const response = await axios.get(url, {
   //        params: {
   //          client_ID: apiKey,
   //
   //        }
   //      })
   //
   //      console.log(response)
   //      return response.data
   //    } catch (e) {
   //      console.log(e)
   //    }
   //  }
 })
