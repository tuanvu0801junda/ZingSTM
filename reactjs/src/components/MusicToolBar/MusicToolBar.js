import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useSelector } from "react-redux";

function MusicToolBar() {
    const audioList = useSelector((state) => state.reducerMusicToolBar);

    const options = {
        audioLists: audioList,
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
        showReload: false,
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
        responsive: false,

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