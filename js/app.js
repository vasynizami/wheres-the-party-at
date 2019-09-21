$(function () {

  // let'd declare var for the map (we'll need to use it for coordinates later)
  let mymap

  // searching city
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('submitting')
    const query = $('#query').val()
    // here we call the fx to make an api call to SongKick to find the metro area Id
    songKickMetroId (query)
  })


  // finding metro area Id of the city in the imput field
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

     // we need to call mymap from Leafletjs.com library for the given metro area ID
     // "!mymap" means "not mymap"(if it hasn't been defined yet), run this code; else mymap has been defined so we just shift position - we do this in order to not have to refresh the page after every search imput
     // 13 in setView params means zoom
      if (!mymap){
        mymap = L.map('mapid').setView([response.data.resultsPage.results.location[0].metroArea.lat, response.data.resultsPage.results.location[0].metroArea.lng], 13)
        // adding tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap)
      } else {
        mymap.setView([response.data.resultsPage.results.location[0].metroArea.lat, response.data.resultsPage.results.location[0].metroArea.lng])
     }

      console.log(response)
      songKickEvents (response.data.resultsPage.results.location[0].metroArea.id)

    } catch (e) {
        console.log(e)
    }
  }

  // finding events in certain metro area
  async function songKickEvents (metroAreaId) {

     try {

       console.log(metroAreaId)
       const url = `https://api.songkick.com/api/3.0/metro_areas/${metroAreaId}/calendar.json`
       const apiKey = 'TqavoctyFoq8jj9i'
       // this fx allows our app to access today's date; slice(0,10) allows us to look at the first 10 characters in ISO standard date
       let today = new Date().toISOString().slice(0,10)
       // make api request using axios
       const response = await axios.get(url, {
         params: {
           apikey: apiKey,
           metro_area_id: metroAreaId,
           min_date: today,
           max_date: today
         }
       })

       console.log(response)

       let arr = response.data.resultsPage.results.event

       // this loop allows us to iterate through each element of the array, we don't need to know the index
       for(let event of arr){
         let a = `<a href = "${event.uri}"> SongKick Link </a>`
         L.marker([event.location.lat, event.location.lng]).addTo(mymap)
          .bindPopup(event.displayName + a)
          .openPopup()
       }

     } catch (e) {
       console.log(e)
     }
   }

 })
