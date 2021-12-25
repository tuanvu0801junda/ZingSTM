import axios from 'axios';
import AddSongToPlay from './AddSongToPlay';

export default function AddGenreToPlay(genreId) {
    const getSongInfo = async (id) => {
        const data = {
            genreId: id,
        }

        const res = await axios.post('/api/getGenresSong', data);
        if (res.data.status === 200) {
            res.data.songs.map((song) => {
                AddSongToPlay(song.songId);
            })
        }
    }

    getSongInfo(genreId);
}