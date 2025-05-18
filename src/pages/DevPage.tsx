import Header from "../components/shared/Header";
import HeroHeader from "../components/shared/HeroHeader";
import IconButton from "../components/ui/IconButton";

export default function DevPage() {
  return (
    <main className="h-screen flex items-center justify-center bg-red-500 bg-[#111111]">
      <Header />
      <HeroHeader />
      <span className="sora-semibold block text-2xl md:text-4xl font-semibold text-white text-center px-4">
        This is the Dev Page to check individual components throughout their
        development.
      </span>
      <IconButton
        to={{
          pathname: "/",
        }}
      />
    </main>
  );
}
