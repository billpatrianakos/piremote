// Remote commands config
// ======================
// This file should work with any generic
// LIRC configuration but feel free to
// modify it to your needs and liking. 
// The multi-button commands will need to be
// changed based on your own preferences.
let defaultHoldTime = 3,
    longHoldTime    = 7,
    shortHoldTime   = 1;

module.exports = {
  // Basic single key commands
  mute: {
    keyName: 'KEY_MUTE',
    holdTime: defaultHoldTime
  },
  volumeUp: {
    keyName: 'KEY_VOLUMEUP',
    holdTime: defaultHoldTime
  },
  volumeDown: {
    keyName: 'KEY_VOLUMEDOWN',
    holdTime: defaultHoldTime
  },
  channelUp: {
    keyName: 'KEY_CHANNELUP',
    holdTime: defaultHoldTime
  },
  channelDown: {
    keyName: 'KEY_CHANNELDOWN',
    holdTime: defaultHoldTime
  },
  rewind: {
    keyName: 'KEY_REWIND',
    holdTime: defaultHoldTime
  },
  playPause: {
    keyName: 'KEY_PLAYPAUSE',
    holdTime: defaultHoldTime
  },
  fastForward: {
    keyName: 'KEY_FASTFORWARD',
    holdTime: defaultHoldTime
  },
  guide: {
    keyName: 'KEY_EPG',
    holdTime: defaultHoldTime
  },
  menu: {
    keyName: 'KEY_MENU',
    holdTime: defaultHoldTime
  },
  last: {
    keyName: 'KEY_LAST',
    holdTime: defaultHoldTime
  },
  // Multi-button commands
  // Use these as a template to create your own
  // frequently used combination of key presses.
  // Multi-press combinations are just an array of
  // single key press objects.
  hbo: [
    {
      keyName: 'KEY_5',
      holdTime: shortHoldTime
    },
    {
      keyName: 'KEY_5',
      holdTime: shortHoldTime
    },
    {
      keyName: 'KEY_0',
      holdTime: shortHoldTime
    }
  ]
};
