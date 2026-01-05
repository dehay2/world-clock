function updateTime() {
  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTimeZone = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTimeZone = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTimeZone.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1);
