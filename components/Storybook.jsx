import { SectionTitle } from "@vivekkv178/library";

const Storybook = () => {
  return (
    <section id="storybook" className="px-8 mx-4">
      <SectionTitle title="Storybook" />
      <div className="h-screen mb-20 border border-black border-double rounded-lg">
        <iframe
          src={process?.env?.NEXT_PUBLIC_STORYBOOK_URL}
          width="100%"
          height="100%"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Storybook;
