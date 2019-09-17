$(function () {
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('submitting')
    const query = $('#query').val()

    processRequest(query)
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
    $('#results').html(``)
  }


  function SC.initialize({
    client_id: 'cc9a68be6a2bb7223494dae134d1a0ad',
    // redirect_uri: 'https://example.com/callback'
  });

  // initiate auth popup
  SC.connect().then(function() {
    return SC.get('/me');
  }).then(function(me) {
    alert('Hello, ' + me.username);
  })

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
