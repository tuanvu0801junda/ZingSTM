import axios from 'axios';
import store from "index";
import actionAddSongToPlay from 'redux/actions/actionAddSongToPlay';

function AddSongToPlay(songId) {
    const getSongInfo = async (id) => {
        var song;
        const data = {
            songId: id,
        }

        const res = await axios.post('/api/getSongInfo', data);
        if (res.data.status === 200) {
            song = {
                name: res.data.song.title,
                singer: res.data.song.artistName,
                cover: res.data.song.imagePath,
                musicSrc: res.data.song.songPath,
            }
        }
        console.log(res);
        console.log(song);
        store.dispatch(actionAddSongToPlay(song));
    }

    getSongInfo(songId);
}

export default AddSongToPlay