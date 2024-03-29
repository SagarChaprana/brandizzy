import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import styled from "styled-components";

export default function Product({ frontmatter, markdown }) {
  return (
    <Container>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <H1>{frontmatter.title}</H1>
      {/* <span>{frontmatter.date}</span> */}
      <hr />
      <br />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/products/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/products");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
`;

const H1 = styled.h1`
  margin-bottom: 1rem;
`;
