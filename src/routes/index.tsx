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
        class="flip-container m-auto h-full max-w-[598px]"
        style={{ perspective: "1000px" }}
      >
        <div class="flipper cursor-pointer">
          <div class="front">
            <img src={ImgSkeleton} width={598} height={588} />
          </div>
          <div class="back">
            <img src={ImgSkeleton} width={598} height={588} />
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "It never gets better",
};
