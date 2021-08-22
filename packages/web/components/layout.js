import GameFooter from "./game-footer";
import GameMenu from "./game-menu";
export default function Layout({ children }) {
  return (
    <div className="bg-trust-background">
      <GameMenu />
      <main>{children}</main>
      <GameFooter />
    </div>
  );
}
