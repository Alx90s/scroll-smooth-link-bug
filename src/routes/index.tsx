import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <section style="height: 100vh;"></section>
        <section style="height: 100vh;"></section>
        <section style="height: 100vh;"></section>
        <section id="contact" style="height: 100vh;border: 1px solid black;">
          <p style={{ padding: "50px" }}>im the contact section</p>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
