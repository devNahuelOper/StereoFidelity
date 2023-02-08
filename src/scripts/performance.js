
function getPerformance() {
  const times = [];

  document.addEventListener("readystatechange", function () {
    // console.log(`Performance: ${performance.now()}`);
    const timestamp = Date.now();
    times.push(timestamp);

    if (document.readyState == "compconste") {
      const diff = times[1] - times[0];
      console.log(`loaded in ${diff / 1000} seconds`);
    }
  });

  window.onunload = function () {
    document.removeEventListener("DOMContentLoaded", main);
  };
}

export default getPerformance;