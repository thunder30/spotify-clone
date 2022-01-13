import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState } from '../atoms/songAtom'
import useSpotify from './useSpotify'

function useSongInfo() {
    const spotifyApi = useSpotify()
    const [currentTrackId, setCurrentTrackId] =
        useRecoilState(currentTrackIdState)
    const [songInfo, setSongInfo] = useState(null)

    useEffect(() => {
        async function fetchSong() {
            if (currentTrackId) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentTrackId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                        },
                    }
                )
                    .then((res) => res.json())
                    .catch((err) => console.error(err))
                setSongInfo(trackInfo)
            }
        }
        fetchSong()
    }, [currentTrackId, spotifyApi])

    return songInfo
}

export default useSongInfo
