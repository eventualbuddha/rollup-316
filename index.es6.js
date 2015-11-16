import * as Emoji from './emoticons/emoji';
import * as Smiley from './emoticons/smiley';

if (BUILD_EMOJI) {
  console.log(Emoji);
}

if (BUILD_SMILEY) {
  console.log(Smiley);
}
