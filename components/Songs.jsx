import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'

function Songs() {
    const playlist = useRecoilValue(playlistState)

    return (
        <div className="flex flex-col px-8 space-y-1 pb-20 text-white">
            {playlist?.tracks.items.map((track, index) => (
                <Song key={track.track.id} order={index} track={track} />
            ))}
        </div>
    )
}

export default Songs
