import axios from 'axios';
import AddSongToPlay from './AddSongToPlay';

export default function AddAlbumToPlay(albumId) {
    const getSongInfo = async (id) => {
        const data = {
            albumId: id,
        }

        const res = await axios.post('/api/getSongOfAlbum', data);
        if (res.data.status === 200) {
            res.data.songs.map((song) => {
                AddSongToPlay(song.songId);
            })
        }
    }

    getSongInfo(albumId);
}