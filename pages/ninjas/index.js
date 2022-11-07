import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = res.data;
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas page</h1>
      {ninjas.map((ninja) => (
        <Link
          href={`/ninjas/${ninja.id}`}
          className={styles.single}
          key={ninja.id}
        >
          <h1> {ninja.name}</h1>{' '}
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
