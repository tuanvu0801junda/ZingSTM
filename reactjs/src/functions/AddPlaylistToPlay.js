import axios from 'axios';
import AddSongToPlay from './AddSongToPlay';

export default function AddPlaylistToPlay(playlistId) {
    const getSongInfo = async (id) => {
        const data = {
            playlistId: id,
        }

        const res = await axios.post('/api/getPlaylistSong', data);
        if (res.data.status === 200) {
            res.data.songs.map((song) => {
                AddSongToPlay(song.songId);
            })
        }
    }

    getSongInfo(playlistId);
}