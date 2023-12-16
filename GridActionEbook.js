import { modelUtil } from '../util/modelUtil';
import { constants } from '../util/constants';
import { Model } from '../externals/objectmodel';

class GridActionYoutube extends Model({
    id: String,
    modelName: String,
    modelVersion: String,
    action: [String],
    //playType: [String],
    //data verwendbar für E-book-Link bzw. Download?
    data: [String], // video link / playlist link / search query / channel link -> depending on "playType"
    stepSite: [Number],
    stepChapter: [Number],
    showCC: [Boolean], // Was ist das?
    performAfterNav: [Boolean] //??
}) {
    constructor(properties, elementToCopy) {
        properties = modelUtil.setDefaults(properties, elementToCopy, GridActionEbook);
        super(properties);
        this.id = this.id || modelUtil.generateId(GridActionEbook.getModelName());
    }

    static getModelName() {
        return 'GridActionEbook';
    }

    static getActions() {
        return Object.keys(GridActionEbook.actions);
    }

    static getReadTypes() {
        return Object.keys(GridActionEbook.readTypes);
    }
}

GridActionEbook.canBeTested = false;

GridActionEbook.actions = {
    YT_START: 'YT_PLAY',
    YT_PAUSE: 'YT_PAUSE',
    //YT_TOGGLE: 'YT_TOGGLE',
    YT_RESTART: 'YT_RESTART',
    YT_STOP: 'YT_STOP',
    YT_STEP_FORWARD: 'YT_STEP_FORWARD',
    YT_STEP_BACKWARD: 'YT_STEP_BACKWARD',
    YT_NEXT_VIDEO: 'YT_NEXT_VIDEO',
    YT_PREV_VIDEO: 'YT_PREV_VIDEO',
    YT_ENTER_FULLSCREEN: 'YT_ENTER_FULLSCREEN',
    YT_VOLUME_UP: 'YT_VOLUME_UP',
    YT_VOLUME_DOWN: 'YT_VOLUME_DOWN',
    YT_VOLUME_MUTE: 'YT_VOLUME_MUTE'
};

GridActionEbook.playTypes = {
    YT_PLAY_VIDEO: 'YT_PLAY_VIDEO',
    YT_PLAY_PLAYLIST: 'YT_PLAY_PLAYLIST',
    YT_PLAY_SEARCH: 'YT_PLAY_SEARCH',
    YT_PLAY_CHANNEL: 'YT_PLAY_CHANNEL',
    YT_PLAY_RELATED: 'YT_PLAY_RELATED'
};

GridActionEbook.defaults({
    id: '', //will be replaced by constructor
    modelName: GridActionYoutube.getModelName(),
    modelVersion: constants.MODEL_VERSION,
    stepSeconds: 10,
    stepVolume: 20,
    playType: GridActionEbook.playTypes.YT_PLAY_VIDEO
});

export { GridActionEbook };
