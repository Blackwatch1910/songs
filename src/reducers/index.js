
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'In the End', duration: '4:05' },
        { title: 'Numb', duration: '3:32' },
        { title: 'Starboy', duration: '4:02' },
        { title: 'Perfect', duration: '5:12' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});