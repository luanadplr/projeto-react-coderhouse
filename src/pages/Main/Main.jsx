import Video from "../../img/video/video-mamamoo-home.mp4"

export default function Main(){

    return(
        <div>
            <video loop autoPlay muted src={Video} width="100%"></video>
        </div>
    )
}