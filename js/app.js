$(function () {
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('submitting')
    const query = $('#query').val()

    // processRequest(query)
  })

  $('#connectSoundcloud').click(() => {
    //a new pop-up window should appear
  })
  
  function displayResults (data) {
    console.log('data in displayResults:', data)

    // // 1. print out date
    // $('#date').html(`
    //   <p></p>
    //
    // `)
    //
    // // 2. print out name of the event
    // $('#eventName').html(`
    //   <p></p>
    // `)
    //
    // // 3. print out lineup
    // $('#lineup').html(`
    //   <p></p>
    // `)
    //
    // // 3. print out SongKick link
    // $('#link').html(`
    //   <p></p>
    // `)

  }



  // async function SoundCloud (data) {
  //    try {
  //      const url = 'https://api.soundcloud.com'
  //      const apiKey = 'cc9a68be6a2bb7223494dae134d1a0ad'
  //
  //      // make api request using axios
  //      const response = await axios.get(url, {
  //        params: {
  //          client_ID: apiKey,
  //        }
  //      })
  //
  //      console.log(response)
  //      return response.data
  //    } catch (e) {
  //      console.log(e)
  //    }
  //  }
 }
