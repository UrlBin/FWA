<script language="javascript">
startdate = new Date();
clockStart = startdate.getTime();
function initStopwatch() {
  var thisTime = new Date();
  return (thisTime.getTime() - clockStart)/1000;
}
function getSecs() {
  var tSecs = Math.round(initStopwatch());
  var iSecs = tSecs % 60;
  var iMins = Math.round((tSecs-30)/60);
  var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
  var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
  document.getElementById("timer-counter").innerHTML = sMins+":"+sSecs;
  setTimeout('getSecs()', 1000);
}
</script>
