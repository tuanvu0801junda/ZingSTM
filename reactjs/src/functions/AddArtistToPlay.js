import axios from 'axios';
import AddSongToPlay from './AddSongToPlay';

export default function AddArtistToPlay(artistId) {
    const getSongInfo = async (id) => {
        const data = {
            artistId: id,
        }

        const res = await axios.post('/api/getArtistsSong', data);
        if (res.data.status === 200) {
            res.data.songs.map((song) => {
                AddSongToPlay(song.songId);
            })
        }
    }

    getSongInfo(artistId);
}