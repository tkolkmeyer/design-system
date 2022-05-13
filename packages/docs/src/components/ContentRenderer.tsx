import React from 'react';
import { Link } from 'gatsby';
import Prism from 'prismjs';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { toKebabCase } from '../helpers/casingUtils';

import EmbeddedExample from './EmbeddedExample';

interface MdxProviderProps {
  children: string;
}

// adds id to heading elements for in-page linking
const HeadingWithId = (props: MdxProviderProps, Component) => {
  return <Component {...props} id={toKebabCase(props.children)} />;
};

// adds DS styling to tables from markdown
const TableWithClassnames = (props) => {
  return <table className="ds-c-table" {...props}></table>;
};

// Using gatsby link for internal links and regular anchor for external links
// internal markdown links don't include http* preface
// external links do
const LinkWrapper = ({ href, ...props }) => {
  if (href.includes('http')) {
    return <a href={href} {...props} />;
  }
  return <Link to={href} {...props} />;
};

// using prismjs to do syntax highlighting in code blocks
const CodeWithSyntaxHighlighting = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  let language = className?.replace('language-', '');
  // catch all in case the language defined isn't supported by Prismjs
  if (!Prism.languages[language]) {
    language = 'text';
  }

  const highlightedContent = Prism.highlight(children, Prism.languages[language]);
  // eslint-disable-next-line react/no-danger
  return <code className={className} dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
};

// for preformatted text that has code as it's child, set language class on <pre> too
// this allows scrolling in code block on small screens
const PreformattedWithLanguageClass = (props: any) => {
  if (props.children?.props?.mdxType === 'code' && props.children?.props?.className) {
    return <pre className={props.children.props.className} {...props} />;
  }
  return <pre {...props} />;
};

/**
 * A mapping of custom components for mdx syntax
 * Each mapping has a key with the element name and a value of a functional component to be used for that element
 */
const customComponents = {
  h2: (props) => HeadingWithId(props, 'h2'),
  h3: (props) => HeadingWithId(props, 'h3'),
  h4: (props) => HeadingWithId(props, 'h4'),
  h5: (props) => HeadingWithId(props, 'h5'),
  h6: (props) => HeadingWithId(props, 'h6'),
  table: TableWithClassnames,
  a: LinkWrapper,
  code: CodeWithSyntaxHighlighting,
  pre: PreformattedWithLanguageClass,
  EmbeddedExample,
};

interface ContentRendererProps {
  /**
   * A string of mdx data returned from graphQL
   * Usually the `data.body.mdx` property from a `mdx` graphQL query
   */
  data: string;
}

/**
 * ContentRenderer - a component to standardize the steps needed to display MDX content as page content
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components for details
 */
const ContentRenderer = ({ data }: ContentRendererProps) => {
  return (
    <MDXProvider components={customComponents}>
      <MDXRenderer>{data}</MDXRenderer>
    </MDXProvider>
  );
};

export default ContentRenderer;
