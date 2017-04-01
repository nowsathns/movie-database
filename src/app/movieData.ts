 import {Movie, MovieDetail} from './movie';
 const AllMovies: Movie[] = [{
      id: 1,
      name: 'Matrix',
      des: ' A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL50_SY1000_CR0,0,665,1000_AL_.jpg'
    },
  {
      id: 2,
      name: 'Baahubali 2: The Conclusion',
      des: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
      img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDM0ZmM5MWMtMDEyYS00NTRmLWE4NGQtNzVhMDgwYWUzMjM4L2ltYWdlXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_QL50_SY1000_CR0,0,705,1000_AL_.jpg'
    },
  {
      id: 3,
      name: '2.0',
      des: 'In the near future, a scientist builds a robot called Chitti.',
      img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDE4MGI3MzgtZTYyYi00ZmMyLThlZWQtMDVjYTcxMzk1MmI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzg1ODc5NTc@._V1_QL50_SY1000_CR0,0,691,1000_AL_.jpg'
    },

];
 const AllMovieDetail: MovieDetail[] = [{
   id: 1,
   name: 'Matrix',
   story: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
   img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL50_SY1000_CR0,0,665,1000_AL_.jpg'
 },
   {
     id: 2,
     name: 'Baahubali 2: The Conclusion',
     story: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
     img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDM0ZmM5MWMtMDEyYS00NTRmLWE4NGQtNzVhMDgwYWUzMjM4L2ltYWdlXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_QL50_SY1000_CR0,0,705,1000_AL_.jpg'
   },
   {
     id: 3,
     name: '2.0',
     story: 'In the near future, a scientist builds a robot called Chitti.',
     img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDE4MGI3MzgtZTYyYi00ZmMyLThlZWQtMDVjYTcxMzk1MmI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzg1ODc5NTc@._V1_QL50_SY1000_CR0,0,691,1000_AL_.jpg'
   },

 ];

export { AllMovies, AllMovieDetail }
