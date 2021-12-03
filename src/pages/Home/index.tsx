import { getUser } from '../../services/api/user';
import { useUserData } from '../../stores/useUserData';
import { Title } from './styles';

export default function Home() {
  const { name, age } = useUserData();

  async function changeUser() {
    const { data } = await getUser('lukemorales');

    useUserData.setState({
      name: data.name,
      age: data.followers,
    });
  }

  return (
    <>
      <Title>Home</Title>

      <h2>{name}</h2>
      <h3>{age}</h3>
      <button type="button" onClick={changeUser}>
        Mudar usuário
      </button>
    </>
  );
}
