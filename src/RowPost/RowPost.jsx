import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { imageUrl,API_KEY} from '../constants/constants'
import axios from '../axios'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlid, seturlid] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
    
  };
  const handleMovie = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?&api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlid(response.data.results[0])
      }else{
        console.log('Array Empty');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
          <img  onclick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster' } src={`${imageUrl+obj.backdrop_path}`}/>
        )}
        </div>
       { urlid && <YouTube opts={opts} videoId={urlid.key}  />}
  
    </div>

  )
}

export default RowPost