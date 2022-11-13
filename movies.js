function movies (input){
    const inputLength = input.length;
    let movies = [];

    for (let i = 0; i<inputLength;i++){
        let line = input[i];
        if (line.includes('addMovie ')){
            let name = line.split('addMovie ')[1];
            movies.push({name: name}); 
        }else if (line.includes('directedBy')){
            let name = line.split(' directedBy ')[0];
            let director = line.split(' directedBy ')[1];
            let movie = movies.find(el => el.name === name);
            if(movie){
                movie.director = director;
            }
        }else if (line.includes('onDate')){
            let name = line.split(' onDate ')[0];
            let date = line.split(' onDate ')[1]; 
            let movie = movies.find(el => el.name === name);
            if(movie){
                movie.date = date;
            }
        }
    }
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );