import axios from 'axios';

// Using getStaticPaths to tell Nextjs how many static pages to be made based on the incoming data
export const getStaticPaths = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = res.data;

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Fetching individual items
// If you export a function called getStaticProps
//  (Static Site Generation) from a page, Next.js will pre-render this page at
// build time using the props returned by getStaticProps.
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = res.data;
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1> {ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
