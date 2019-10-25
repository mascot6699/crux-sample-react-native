if (typeof __dirname === 'undefined') global.__dirname = '/'
if (typeof __filename === 'undefined') global.__filename = ''
if (typeof process === 'undefined') {
  global.process = require('process')
} else {
  const bProcess = require('process')
  for (var p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p]
    }
  }
}

process.browser = false

// global.location = global.location || { port: 80 }
const isDev = typeof __DEV__ === 'boolean' && __DEV__
process.env['NODE_ENV'] = isDev ? 'development' : 'production'
if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : ''
}

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
if (require('./package.json').dependencies['react-native-randombytes']) {
  // important that this comes before require('crypto')

  let crypto
  if (typeof window === 'object') {
    if (!window.crypto) window.crypto = {}
    crypto = window.crypto
  } else {
    crypto = require('crypto')
  }

  if (!crypto.getRandomValues) {
    crypto.getRandomValues = getRandomValues
  }

  let randomBytes

  function getRandomValues (arr) {
    if (!randomBytes) randomBytes = require('react-native-randombytes').randomBytes

    const bytes = randomBytes(arr.length)
    for (var i = 0; i < bytes.length; i++) {
      arr[i] = bytes[i]
    }
  }
  console.log("00000000000000000000000000000000000000000000000000000000000000000000000000")
}
