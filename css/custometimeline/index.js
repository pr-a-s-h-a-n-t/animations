var items = document.querySelectorAll("li");
const coursecurriculum = [
  {
    title: "1st Month",
    contentTitle: "Introduction to programming",
    contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
  },
  {
    title: "2nd Month",
    contentTitle: "Data Structures and Algorithm",
    contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
  },
  {
    title: "3rd Month",
    contentTitle: "Data Structures and Algorithm",
    contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
  },
  {
    title: "4th Month",
    contentTitle: "Data Structures and Algorithm",
    contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
  },
];
function isItemInView(item) {
  var rect = item.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isItemInView(items[i])) {
      items[i].classList.add("show");
    }
  }
}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
