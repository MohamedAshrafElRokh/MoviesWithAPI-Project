const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4cc4cbc810msh4ddca2d11b1dcf2p193a28jsn3dd5a0403278',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    const getMovies = async ()=>
    {
        const response = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
        if(response.status === 404)
        {
            alert("la la la")
        }else
        {
            const data = await response.json();
            const list = data.d;
            list.map((item)=>
                {
                    console.log(item);
                    const name = item.l;
                    const post = item.i.imageUrl;
                    const show = `<li> <img src ='${post}'> <h2>'${name}'</h2> </li>`;
                    document.querySelector(".shows").innerHTML += show; 

                })
            
        }
       
    }

    getMovies();
   