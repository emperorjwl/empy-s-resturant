import Header from "./ui/component/header";
import Slides from "./ui/component/slides";
import Story from "./ui/component/story";
import Chefs from "./ui/component/chefs";
import Menu from "./ui/component/menu";

export default function Page() {
  return (
    <main>
      <Header />
      <Slides />
      <Story />
      <Chefs />
      <Menu />
    </main>
  );
}
