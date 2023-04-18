import { createSignal, type JSX } from "solid-js";
import { getPosts } from "../api/jsonplaceholder";

const SimpleForm = () => {
  const [inputVal, setInputVal] = createSignal("");
  const formSubmitHandler: JSX.EventHandler<
    HTMLFormElement,
    Event & {
      submitter: HTMLElement;
    }
  > = async (e) => {
    e.preventDefault();
    console.log(inputVal());

    const posts = await getPosts();
    console.log(posts);
  };

  return (
    <>
      <section class="p-4">
        <h1 class="mb-2 text-lg font-semibold text-slate-700">
          Simple Form Submission (Solid Form)
        </h1>
        <form
          class="flex flex-row gap-2"
          // onSubmit={formSubmitHandler}
          method="post"
          action="/backend/custom-form"
        >
          <input
            name="submittedValue"
            class="rounded bg-gray-200 px-4 py-2"
            type="text"
            placeholder="Submit Me"
            value={inputVal()}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button class="rounded bg-blue-200 px-4 py-2" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default SimpleForm;
