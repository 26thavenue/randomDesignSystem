import { MDXProvider } from "@mdx-js/react";
import DocsLayout from "./DocsLayout";

type DocsProps = {
  Component: React.ComponentType;
};

const components = {
  h1: (props:any) => <h1 className="text-4xl font-bold mt-6 mb-4" {...props} />,
  h2: (props:any) => <h2 className="text-3xl font-semibold mt-5 mb-3" {...props} />,

};


const Docs = ({ Component }: DocsProps) => {
  return (
    <DocsLayout>
      <MDXProvider  components={components} >
        <div className="docs-container">
          <Component />
        </div>
     </MDXProvider>
    </DocsLayout>
    
  );
};

export default Docs;
