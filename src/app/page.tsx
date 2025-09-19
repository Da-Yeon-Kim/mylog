export const Home = () => {
  
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-green1 snap-start">
        <h1 className="text-4xl">안녕하세요!</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green1 to-green2 snap-start">
        <h1 className="text-4xl">사용 기술 스택</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green2 to-green3 snap-start">
        <h1 className="text-4xl text-background">주요 활동</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green3 to-green4 snap-start">
        <h1 className="text-4xl text-background">밥팅</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green4 to-green5 snap-start">
        <h1 className="text-4xl text-background">FMS/SMS</h1>
      </section>
    </main>
  );
}

export default Home;