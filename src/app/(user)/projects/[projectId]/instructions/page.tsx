import CopyBtn from "@/components/copy-btn";

interface Props {
  params: {
    projectId: string;
  };
}

export default function Page({ params }: Props) {
  const code = `
      <my-widget project="${params.projectId}"></my-widget>
      <script src="${process.env.WIDGET_URL}/widget.umd.js"></script>}
`;
  if (!params.projectId) return <p>No Project</p>;
  if (!process.env.WIDGET_URL) return <p>Missing WIDGET_URL</p>;
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-2">Start collecting feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed this code in your site
      </p>
      <div className="bg-blue-950 py-6 pr-12 pl-6 rounded-md mt-6 relative w-max">
        <code className="text-white">
          {`<my-widget project="${params.projectId}"></my-widget>`} <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn text={code} />
      </div>
    </div>
  );
}
