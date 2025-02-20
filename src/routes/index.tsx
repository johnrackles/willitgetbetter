import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import orb from "../components/ponder-orb.jpg";

export default component$(() => {
  return (
    <div class="flex min-h-svh flex-col justify-center space-y-8 bg-black text-white">
      <h1 class="text-center text-4xl lg:text-6xl">Will it get better?</h1>
      <img
        src={orb}
        alt="Ponder the orb"
        width={1920}
        height={1080}
        class="aspect-auto h-auto w-full"
      />
      <Link
        href="/never"
        class="block place-self-center rounded-2xl border-2 border-white p-4 text-xl font-bold transition-colors hover:bg-blue-400 lg:text-2xl"
      >
        Ponder the orb
      </Link>
    </div>
  );
});

export const head: DocumentHead = { title: "Will it get better?" };
