// Remote commands config
// ======================
// This file should work with any generic
// LIRC configuration but feel free to
// modify it to your needs and liking. 
// The multi-button commands will need to be
// changed based on your own preferences.
let defaultHoldTime = 3, // How long to hold down a button if using 'hold' mode
    longHoldTime    = 7,
    shortHoldTime   = 1,
    timesToPress    = 2, // How many times to press the button if using 'press' mode
    defaultRemote   = 'CHANGE_ME', // This is the name of the remote you want to default to. This name comes from your lircd.conf file
    defaultMode     = 'press'; // Options are: 'press' or 'hold'. Press is like pressing a button X times. Hold is like holding down a button for X seconds

module.exports = {
  // Basic single key commands
  mute: {
    keyName: 'KEY_MUTE',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  volumeUp: {
    keyName: 'KEY_VOLUMEUP',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  volumeDown: {
    keyName: 'KEY_VOLUMEDOWN',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  channelUp: {
    keyName: 'KEY_CHANNELUP',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  channelDown: {
    keyName: 'KEY_CHANNELDOWN',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  rewind: {
    keyName: 'KEY_REWIND',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  playPause: {
    keyName: 'KEY_PLAYPAUSE',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  fastForward: {
    keyName: 'KEY_FASTFORWARD',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  guide: {
    keyName: 'KEY_EPG',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  menu: {
    keyName: 'KEY_MENU',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  last: {
    keyName: 'KEY_LAST',
    holdTime: defaultHoldTime,
    remoteToUse: defaultRemote,
    mode: defaultMode
  },
  // Multi-button commands
  // Use these as a template to create your own
  // frequently used combination of key presses.
  // Multi-press combinations are just an array of
  // single key press objects.
  hbo: [
    {
      keyName: 'KEY_5',
      holdTime: shortHoldTime,
      remoteToUse: defaultRemote,
      mode: defaultMode
    },
    {
      keyName: 'KEY_5',
      holdTime: shortHoldTime,
      remoteToUse: defaultRemote,
      mode: defaultMode
    },
    {
      keyName: 'KEY_0',
      holdTime: shortHoldTime,
      remoteToUse: defaultRemote,
      mode: defaultMode
    }
  ]
};
