let defaultHoldTime = 5,
    longHoldTime    = 15,
    shortHoldTime   = 3;

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
      holdTime: defaultHoldTime
    },
    {
      keyName: 'KEY_5',
      holdTime: defaultHoldTime
    },
    {
      keyName: 'KEY_0',
      holdTime: defaultHoldTime
    }
  ]
}
