import { millisToMinutesAndSeconds } from '../lib/time'

function Song({ order, track }) {
    // console.log(track)
    return (
        <div className="grid grid-cols-2">
            <div className="flex items-center space-x-4">
                <p>{order + 1}</p>
                <img
                    className="w-10 h-10"
                    src={track.track.album.images[0].url}
                    alt="track image"
                />
                <div>
                    <p>{track.track.name}</p>
                    <p>{track.track.artists[0].name}</p>
                </div>
            </div>
            <div
                className="flex items-center justify-between
             ml-auto md:ml-0"
            >
                <p className="hidden md:inline">{track.track.album.name}</p>
                <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
            </div>
        </div>
    )
}

export default Song
