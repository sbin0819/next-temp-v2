import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Detail: NextPage = () => {
  return (
    <div className={styles.container}>
      <nav aria-label="fastcampus">fastcampus</nav>
      <div role="banner">
        <h1>배너</h1>
      </div>
      <div title="lectureList">
        <h1>강의목록</h1>
      </div>
    </div>
  );
};

export default Detail;
