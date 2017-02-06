﻿var Conference = Conference || {};

Conference.checkInService = function(checkInRecorder) {
  "use strict";

  // 주입된 checkInRecorder의 참조값을 담아둔다
    //todo 왜 담아둘까?
  var recorder = checkInRecorder;

  // todo attendee에 checkIn 메소드가 있는 걸 어떻게 알 수 있나
  return {
    checkIn: function(attendee) {
      attendee.checkIn(attendee);
      recorder.recordCheckIn(attendee);
    }
  };
};

