import type { NextPage } from 'next';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import LectureList from '../components/Lecture/LectureList';

const Home: NextPage = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <div title="lectureList">
        <h1>강의목록</h1>
      </div>
      <LectureList />
    </div>
  );
};

export default Home;
