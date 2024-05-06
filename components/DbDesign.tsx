import { SectionTitle } from "@vivekkv178/library";

const DbDesign = () => {
  return (
    <section id="db-design" className="px-8 mx-4">
      <SectionTitle title="DB Design" />
      <div className="h-screen tw-mb-20 border border-black border-double rounded-lg">
        <iframe
          src={"https://dbdocs.io/Vivek KV/ecomm-order"}
          width="100%"
          height="100%"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default DbDesign;
