import { MDXProvider } from "@mdx-js/react";

type DocsProps = {
  Component: React.ComponentType;
};

const Docs = ({ Component }: DocsProps) => {
  return (
    <MDXProvider>
      <div className="docs-container">
        <Component />
      </div>
    </MDXProvider>
  );
};

export default Docs;
