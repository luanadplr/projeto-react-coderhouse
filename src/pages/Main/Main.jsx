import Video from "../../img/video/video-mamamoo-home.mp4"

export default function Main(){
    return(
        <div style={{backgroundColor: "rgba(128, 128, 128, 0.289)"}}>
            <video loop autoPlay muted src={Video} width="100%"></video>
        </div>
    )
}