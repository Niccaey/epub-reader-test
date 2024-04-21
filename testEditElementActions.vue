<div v-if="action.modelName === 'GridActionEbook'">
<div class="srow">
  <div class="twelve columns">
    <label for="ebActions" class="four columns normal-text">{{ $t('eBookAction') }}</label>
    <select id="ebActions" class="eight columns" v-model="action.action">
      <option v-for="elmAction in GridActionEbook.actions" :value="elmAction">
        {{elmAction | translate}}
      </option>
    </select>
  </div>
</div>
<div class="srow" v-show="[GridActionYoutube.actions.YT_PLAY, GridActionYoutube.actions.YT_TOGGLE, GridActionYoutube.actions.YT_RESTART].indexOf(action.action) !== -1">
  <div class="twelve columns">
    <label for="ytPlayType" class="four columns normal-text">{{ $t('playType') }}</label>
    <select id="ytPlayType" class="eight columns" v-model="action.playType">
      <option v-for="playType in Object.keys(GridActionYoutube.playTypes).filter(t => t !== GridActionYoutube.playTypes.YT_PLAY_RELATED)" :value="playType">{{playType | translate}}</option>
    </select>
  </div>
</div>
<div v-show="action.playType && [GridActionYoutube.actions.YT_PLAY, GridActionYoutube.actions.YT_TOGGLE, GridActionYoutube.actions.YT_RESTART].indexOf(action.action) !== -1">
  <div class="srow" v-show="action.playType !== GridActionYoutube.playTypes.YT_PLAY_RELATED">
    <div class="twelve columns">
      <label for="ytList" class="four columns normal-text">
        <span v-show="action.playType === GridActionYoutube.playTypes.YT_PLAY_VIDEO">{{ $t('videoLink') }}</span>
        <span v-show="action.playType === GridActionYoutube.playTypes.YT_PLAY_SEARCH">{{ $t('youtubeSearchQuery') }}</span>
        <span v-show="action.playType === GridActionYoutube.playTypes.YT_PLAY_PLAYLIST">{{ $t('youtubePlaylistLink') }}</span>
        <span v-show="action.playType === GridActionYoutube.playTypes.YT_PLAY_CHANNEL">{{ $t('youtubeChannelLink') }}</span>
      </label>
      <input id="ytList" type="text" class="eight columns" v-model="action.data"/>
    </div>
  </div>
  <div class="srow">
    <input id="showCC" type="checkbox" v-model="action.showCC"/>
    <label for="showCC" class="normal-text">{{ $t('showVideoSubtitlesIfAvailable') }}</label>
  </div>
  <div class="srow">
    <input id="playMuted" type="checkbox" v-model="action.playMuted"/>
    <label for="playMuted" class="normal-text">{{ $t('startVideoMuted') }}</label>
  </div>
  <div class="srow">
    <input id="afterNav" type="checkbox" v-model="action.performAfterNav"/>
    <label for="afterNav" class="normal-text">{{ $t('performActionAfterNavigation') }}</label>
  </div>
</div>
<div class="srow" v-show="[GridActionYoutube.actions.YT_STEP_FORWARD, GridActionYoutube.actions.YT_STEP_BACKWARD].indexOf(action.action) !== -1">
  <div class="twelve columns">
    <label for="stepSeconds" class="four columns normal-text">{{ $t(action.action) }} {{ $t('secondsBracket') }}</label>
    <input id="stepSeconds" type="number" class="eight columns" v-model="action.stepSeconds" min="0"/>
  </div>
</div>
<div class="srow" v-show="[GridActionYoutube.actions.YT_VOLUME_UP, GridActionYoutube.actions.YT_VOLUME_DOWN].indexOf(action.action) !== -1">
  <div class="twelve columns">
    <label for="stepVolume" class="four columns normal-text">{{ $t(action.action) }} {{ $t('percentBracket') }}</label>
    <input id="stepVolume" type="number" class="eight columns" v-model="action.stepVolume" min="0" max="100"/>
  </div>
</div>
</div>
<script setup>
import {GridActionEbook} from "./GridActionEbook";
</script>