import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";
import type { ConfettiOptions } from "@tsparticles/confetti";
import { confetti } from "@tsparticles/confetti";
import ImgSkeleton from "../components/skeleton.jpg";

const fireConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio: number, opts: ConfettiOptions) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      }),
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const end = Date.now() + 5 * 1000;
    if (!isServer) {
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  });

  return (
    <div
      class="flex min-h-svh bg-black"
      style={{ backgroundImage: `url(${ImgSkeleton})` }}
    >
      <div
        class="flip-container m-auto h-full max-w-full md:max-w-[598px]"
        style={{ perspective: "1000px" }}
        onClick$={() => {
          fireConfetti();
        }}
      >
        <div class="flipper cursor-pointer">
          <div class="front max-w-full p-4">
            <img
              src={ImgSkeleton}
              class="max-w-full"
              width={598}
              height={588}
            />
          </div>
          <div class="back max-w-full p-4">
            <img
              src={ImgSkeleton}
              class="max-w-full"
              width={598}
              height={588}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "It never gets better",
};
