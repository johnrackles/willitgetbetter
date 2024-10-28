import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgSkeleton from "../components/skeleton.jpg";

export default component$(() => {
  return (
    <div class="flex min-h-svh">
      <img
        src={ImgSkeleton}
        width={600}
        height={600}
        class="m-auto h-full max-w-[600px]"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "It never gets better",
};
