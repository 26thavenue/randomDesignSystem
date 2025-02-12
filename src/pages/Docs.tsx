import { MDXProvider } from "@mdx-js/react";
import { Button } from "../components";
import DocsLayout from "./DocsLayout";

type DocsProps = {
  Component: React.ComponentType;
};
const components = {
  Button, 
};

const Docs = ({ Component }: DocsProps) => {
  return (
    <DocsLayout>
      <MDXProvider components={components}>
        <div className="docs-container">
          <Component />
        </div>
     </MDXProvider>
    </DocsLayout>
    
  );
};

export default Docs;
