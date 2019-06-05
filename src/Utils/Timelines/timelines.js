import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  timeline.from(node, 0.3, {
    display: "none",
    autoAlpha: 0,
    delay,
    ease: Power1.easeIn
  });

  return timeline;
};

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const header = node.querySelector("#header");

  timeline
    .from(node, 0.3, {
      display: "none",
      autoAlpha: 0,
      delay,
      ease: Power1.easeIn
    })
    .from(header, 0.3, { autoAlpha: 0, x: -25, ease: Power1.easeInOut });

  return timeline;
};

const getRoomsTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const gallery = node.querySelector(".image-gallery");

  timeline
    .from(node, 0.3, {
      display: "none",
      autoAlpha: 0,
      delay,
      ease: Power1.easeIn
    })
    .from(gallery, 0.3, { autoAlpha: 0, y: 25, ease: Power1.easeInOut });

  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;

  if (pathname === "/") {
    timeline = getHomeTimeline(node, delay);
  } else if (pathname === "/rooms") timeline = getRoomsTimeline(node, delay);
  else {
    timeline = getDefaultTimeline(node, delay);
  }
  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = node => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
};
