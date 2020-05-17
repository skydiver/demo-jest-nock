const nock = require('nock');
const { writeFile } = require('fs');

exports.startNockRecording = () => {
  nock.recorder.rec({
    dont_print: true,
    enable_reqheaders_recording: true,
    output_objects: true,
  });
};

exports.storeNockRecordings = pathToTape => {
  const nockCallObjects = nock.recorder.play();
  writeFile(pathToTape, JSON.stringify(nockCallObjects, null, 2), () => {});
};

exports.playbackNockTapes = pathToTape => {
  nock.load(pathToTape);
  nock.recorder.play();
};
