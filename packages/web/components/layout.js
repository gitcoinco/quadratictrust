import GameFooter from "./game-footer";
import GameMenu from "./game-menu";
export default function Layout({ children }) {
  return (
    <>
      <GameMenu />
      <main>{children}</main>
      <GameFooter />
    </>
  );
}
