export const Home = () => {
  
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-green-300 snap-start">
        <h1 className="text-4xl">안녕하세요!</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green-300 to-green-400 snap-start">
        <h1 className="text-4xl">사용 기술 스택</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green-400 to-green-500 snap-start">
        <h1 className="text-4xl">주요 활동</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green-500 to-green-600 snap-start">
        <h1 className="text-4xl">밥팅</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green-600 to-green-700 snap-start">
        <h1 className="text-4xl">FMS/SMS</h1>
      </section>
    </main>
  );
}

export default Home;