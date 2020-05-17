# demo-jest-nock
> Demo project to use Nock with Jest

## Record requests

Edit `tests/request.spec.js`:
* uncomment `// startNockRecording();`
* uncomment `// storeNockRecordings('./tape.json');`

Run `npm run test`.


## Playback requests

Edit `tests/request.spec.js`:
* comment `// startNockRecording();`
* comment `// storeNockRecordings('./tape.json');`
* uncommnet `// playbackNockTapes('./tape.json');`

Run `npm run test`.