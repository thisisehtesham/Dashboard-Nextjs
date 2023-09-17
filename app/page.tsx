import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className='flex'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Navbar />
        <Content />
      </div>
    </main>
  )
}
