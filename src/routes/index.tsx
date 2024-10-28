import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgSkeleton from "../components/skeleton.jpg";

export default component$(() => {
  return (
    <div
      class="flex min-h-svh bg-black"
      style={{ backgroundImage: `url(${ImgSkeleton})` }}
    >
      <div
        class="flip-container m-auto h-full max-w-full md:max-w-[598px]"
        style={{ perspective: "1000px" }}
      >
        <div class="flipper cursor-pointer">
          <div class="front max-w-full p-4">
            <img src={ImgSkeleton} class="max-w-full" />
          </div>
          <div class="back max-w-full p-4">
            <img src={ImgSkeleton} class="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "It never gets better",
};
