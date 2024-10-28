import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgSkeleton from "../components/skeleton.jpg";

export default component$(() => {
  return (
    <div class="flex min-h-svh bg-black">
      <img
        src={ImgSkeleton}
        width={223}
        height={223}
        class="m-auto h-full max-w-[223px]"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "It never gets better",
};
