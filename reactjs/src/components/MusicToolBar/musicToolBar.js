import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
// import song from "../songs/1.mp3"

function MusicToolBar() {
    const audioList1 = [
        {
            name: 'Lemon Kenshi',
            singer: 'Luis Fonsi',
            cover:
                'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLemon-Kenshi-00.png?alt=media&token=f1d10f6d-2622-4616-86de-db5cdf945da5',
            musicSrc:
                'https://firebasestoage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLemon-Kenshi-00.mp3?alt=media&token=82e098a3-d697-4cf8-a994-12b9e4c005de',
            // support async fetch music src. eg.
            // musicSrc: async () => {
            //   return await fetch('/api')
            // },
        },
        {
            name: 'Dorost Nemisham',
            singer: 'Sirvan Khosravi',
            cover:
                'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
            musicSrc:
                'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
        },
    ]

    const options = {
        audioLists: audioList1,
        defaultPlayIndex: 0,
        theme: 'auto',
        bounds: 'body',
        quietUpdate: false,
        clearPriorAudioLists: false,
        autoPlayInitLoadPlayList: false,
        preload: false,
        glassBg: false,
        remember: false,
        remove: true,
        defaultPosition: {
            right: 100,
            bottom: 120,
        },
        defaultPlayMode: 'order',
        mode: 'full',
        once: false,
        autoPlay: false,
        toggleMode: true,
        showMiniModeCover: true,
        showMiniProcessBar: false,
        drag: true,
        seeked: true,
        showMediaSession: true,
        showProgressLoadBar: true,
        showPlay: true,
        showReload: true,
        showDownload: true,
        showPlayMode: true,
        showThemeSwitch: true,
        showLyric: false,
        showDestroy: false,
        extendsContent: null,
        defaultVolume: 1,
        playModeShowTime: 600,
        loadAudioErrorPlayNext: true,
        autoHiddenCover: false,
        spaceBar: true,
        responsive: true,

        mobileMediaQuery: '(max-width: 1024px)',

        volumeFade: {
            fadeIn: 1000,
            fadeOut: 1000,
        },

        restartCurrentOnPrev: false,

        // https://github.com/SortableJS/Sortable#options
        sortableOptions: {},

        // Music is downloaded handle
        onAudioDownload(audioInfo) {
            console.log('audio download', audioInfo)
        },

        // audio play handle
        onAudioPlay(audioInfo) {
            console.log('audio playing', audioInfo)
        },

        // audio pause handle
        onAudioPause(audioInfo) {
            console.log('audio pause', audioInfo)
        },

        // When the user has moved/jumped to a new location in audio
        onAudioSeeked(audioInfo) {
            console.log('audio seeked', audioInfo)
        },

        // When the volume has changed  min = 0.0  max = 1.0
        onAudioVolumeChange(currentVolume) {
            console.log('audio volume change', currentVolume)
        },

        // The single song is ended handle
        onAudioEnded(currentPlayId, audioLists, audioInfo) {
            console.log('audio ended', currentPlayId, audioLists, audioInfo)
        },

        // audio load abort
        onAudioAbort(currentPlayId, audioLists, audioInfo) {
            console.log('audio abort', currentPlayId, audioLists, audioInfo)
        },

        onAudioProgress(audioInfo) {
            // console.log('audio progress', audioInfo)
        },

        // audio reload handle
        onAudioReload(audioInfo) {
            console.log('audio reload:', audioInfo)
        },

        // audio load failed error handle
        onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
            console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo)
        },

        onAudioListsChange(currentPlayId, audioLists, audioInfo) {
            console.log('audio lists change:', currentPlayId, audioLists, audioInfo)
        },

        onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
            console.log(
                'audio play track change:',
                currentPlayId,
                audioLists,
                audioInfo,
            )
        },

        onAudioListsPanelChange(panelVisible) {
            console.log('audio lists panel visible:', panelVisible)
        },

        onAudioListsSortEnd(oldIndex, newIndex) {
            console.log('audio lists sort end:', oldIndex, newIndex)
        },

        onAudioLyricChange(lineNum, currentLyric) {
            console.log('audio lyric change:', lineNum, currentLyric)
        },

        // custom music player root node
        getContainer() {
            return document.body
        },

        getAudioInstance(audio) {
            console.log('audio instance', audio)
        },

        onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
            console.log('onBeforeDestroy currentPlayId: ', currentPlayId)
            console.log('onBeforeDestroy audioLists: ', audioLists)
            console.log('onBeforeDestroy audioInfo: ', audioInfo)
            return new Promise((resolve, reject) => {
                if (window.confirm('Are you confirm destroy the player?')) {
                    resolve()
                } else {
                    reject()
                }
            })
        },

        onDestroyed(currentPlayId, audioLists, audioInfo) {
            console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
        },

        onCoverClick(mode, audioLists, audioInfo) {
            console.log('onCoverClick: ', mode, audioLists, audioInfo)
        },
    }

    return (
        <ReactJkMusicPlayer {...options} />
    );
}

export default MusicToolBar;
