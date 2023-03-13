import useGetFruits from '@/hooks/api/fruits';

function Home() {
  const { data: fruits } = useGetFruits();

  return (
    <>
      <h1>My own boilerplate</h1>
      {fruits &&
        fruits.map(fruit => {
          return (
            <div key={fruit.id}>
              <p>{fruit.name}</p>
              <p>{fruit.quantity}</p>
            </div>
          );
        })}
    </>
  );
}

export default Home;
