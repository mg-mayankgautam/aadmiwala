const moviesDB = require("../models/moviesDB.js");
const path = require('path');
const download = require('image-downloader');
const https = require('https');
//const oscarsDB= require('../models/oscarsDB.js');

module.exports.getTop10 = async(req,res)=>{
    let movie= await moviesDB.find({}, {'moviefromapi.short.name':1}).limit(10);

    let name = movie.map(e=>({ id: e._id.toString(), name: e.moviefromapi.short.name, img:`http://localhost:4700/posters/${e._id.toString()}.jpg`}));

   // console.log(name);

   
    res.send(name);
}


module.exports.getMovies = async(req, res)=>{



    let movie= await moviesDB.find({}, {'moviefromapi.short.name':1})

    let name = movie.map(e=>({ id: e._id.toString(), name: e.moviefromapi.short.name, img:`http://localhost:4700/posters/${e._id.toString()}.jpg`}));

    //  ,e.moviefromapi.short.name
    // console.log(name);

   
    res.send(name);


}

module.exports.getMovie=async(req,res)=>{

const {id} = req.query
console.log('req.session.Username',req.session.Username)
console.log('req')



try{

    if(!req.session.Username){
        let movie= await moviesDB.find({_id:id})
  
        const release_date=movie[0].moviefromapi.top.releaseDate;
        const name = movie[0].moviefromapi.top.titleText;
        const runtime = movie[0].moviefromapi.top.runtime.displayableProperty.value.plainText;
        const plot = movie[0].moviefromapi.top.plot.plotText;
        const actors = movie[0].moviefromapi.short.actor;
        const allcast = movie[0].moviefromapi.main.cast.edges;
        const director= movie[0].moviefromapi.short.director;
        const genres = movie[0].moviefromapi.top.genres;
        const url = `http://localhost:4700/posters/${id}.jpg`
    
        const movierating = movie[0].totalMovieRatings;
        const totalwatched= movie[0].totalWatched;

    //let short = movie.moviefromapi.short
    res.send({release_date,name,runtime,plot, actors, director,genres,allcast, url,auth:false, movierating, totalwatched})}


        else if(req.session.Username){

            let movie= await moviesDB.find({_id:id})
            // console.log(movie[0])
                 // console.log(movie[0].moviefromapi.top.releaseDate)
                 // //console.log(movie[0].moviefromapi.runtime)
                 // console.log(movie[0].moviefromapi.top.titleText)
                 // console.log(movie[0].moviefromapi.top.genres)
                 // console.log(movie[0].moviefromapi.top.plot.plotText)
                 // console.log(movie[0].moviefromapi.short.actor)
                 // console.log(movie[0].moviefromapi.short.director)
                 req.session.CurrentmovieID = id; 
                 const release_date=movie[0].moviefromapi.top.releaseDate;
                 const name = movie[0].moviefromapi.top.titleText;
                 const runtime = movie[0].moviefromapi.top.runtime.displayableProperty.value.plainText;
                 const plot = movie[0].moviefromapi.top.plot.plotText;
                 const actors = movie[0].moviefromapi.short.actor;
                 const allcast = movie[0].moviefromapi.main.cast.edges;
                 const director= movie[0].moviefromapi.short.director;
                 const genres = movie[0].moviefromapi.top.genres;
                 const url = `http://localhost:4700/posters/${id}.jpg`
             
                const movierating = movie[0].totalMovieRatings;
                const totalwatched= movie[0].totalWatched;
         
             //let short = movie.moviefromapi.short
             res.send({release_date,name,runtime,plot, actors, director,genres,allcast, url,auth:req.session.Username, movierating, totalwatched})}


        }


        catch(e){console.log(e)}

}



module.exports.postMovie = async(req,res) =>{
    const {moviefromapi} = req.body;
    
// console.log(moviefromapi, 'hereeeeeee')

//   async function downloadImage(url, filepath) {
//         return download.image({
//            url,
//            dest: filepath 
//         });
//     }

    const movie = await moviesDB.findOne({moviefromapi});
    console.log(movie);
 
     

    if(!movie){
      //  console.log('inside')
      const addedDate = new Date();
      //const datenow = Date.now();
          console.log('datessss',addedDate);
                     
          let newmovie = new moviesDB ({moviefromapi,addedDate});
                      newmovie.save()
                      .then((saved)=>{
                        
                            const postername = saved._id.toString() 
                            const imageurl = saved.moviefromapi.short.image;
                           // console.log(saved,'movie image link');
                    
                                            
                    
                    
                            const options = {
                            url: `${imageurl}`,
                            dest: path.resolve(`./public/posters/${postername}.jpg`),  
                            
                            
                             };
                             res.send(postername)
                          
                            download.image(options)

                           

                          .then(({ filename }) => {
                            console.log('Saved to', filename); 
                                                  })
                         .catch((err) => console.error(err));
                                            
                                            })
                 .catch(err =>{console.log(err);});
        
        }
                    
    else{
        console.log('movie already in DB')
    res.send(movie._id.toString());
    }   
    
                   
}


module.exports.getBoxOffice = async(req,res)=>{

    // console.log('jei wala',req.query.id)
    const id = req.query.id

    try{
        
        let movie= await moviesDB.find({_id:id})
        
        // console.log(movie[0].moviefromapi.main)
        // const lifetimeGross = movie[0].moviefromapi.main.lifetimeGross.total.amount;
        const worldwideGross =movie[0].moviefromapi.main.worldwideGross.total.amount;
        const productionBudget = movie[0].moviefromapi.main.productionBudget.budget.amount;
        const addedDate = movie[0].addedDate;
        const seconds =addedDate.getTime()
        // console.log(seconds)

        res.send({ worldwideGross, productionBudget, addedDate, seconds});
    }
    catch(err){console.log(err)}
}


module.exports.updateBoxOffice = async(req,res)=>{
    const id = req.query.id;
    try{
        const todaysdate = new Date();
        const todaymillisec = todaysdate.getTime();

        const find = await moviesDB.findOne({_id:id},{addedDate:1, 'moviefromapi.imdbId':1, 'moviefromapi.top.releaseDate':1})
        const addeddate= (find.addedDate)
        const imdbId = (find.moviefromapi.imdbId);
        const releasedateDB = find.moviefromapi.top.releaseDate;

        const releasedate = Date.parse(`${releasedateDB.year}/${releasedateDB.month}/${releasedateDB.day}`);
        // var releasedateobj = new Date(releasedate);
        // milisecondsdiff = (todaysdate.getTime()-releasedateobj.getTime());
        // daysdiff=(secondsdiff/3600*24);
        // var d = Math.floor(milisecondsdiff / (1000*3600*24));
        // var sixmonthsago = todaysdate.setMonth(todaysdate.getMonth()- 6);
        const sixmonthsago = todaymillisec - 15724800000
        // const threedaysago = todaysdate.setDate(todaysdate.getDate()- 3)
        const threedaysago = todaymillisec - 259200000
        console.log(todaysdate)
        
        if(sixmonthsago < releasedate){
            // console.log(addeddate.getTime());

            if(addeddate>threedaysago){//testing for ulta sign rn
                console.log('here');

                    const URL = `https://search.imdbot.workers.dev/?tt=${imdbId}`;

                    fetch(URL)
                    .then((res)=>{
                        return res.json();
                    })
                    .then(async(boxoffice)=>{
                        const update= boxoffice.main.worldwideGross.total.amount;
                        console.log(update, todaysdate)
                            
                        // await moviesDB.findOneAndUpdate({_id:id},{'moviefromapi.main.worldwideGross.total.amount': update, addedDate: todaysdate}, {returnDocument: 'after'})

                        // .then((saved)=>{res.send(saved.moviefromapi.main.worldwideGross.total.amount)})
                        // .catch((e)=>{console.log(e)})
                        })  
                    .catch((err)=> {console.log(err)})

            }

        }
        else{
            console.log('movie older than 6 months')
        }
    }
    catch(err){console.log(err)}
}