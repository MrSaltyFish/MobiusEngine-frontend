import HeroHeader from "../components/shared/HeroHeader";
import IconButton from "../components/ui/IconButton";

export default function HomePage() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-red-500 bg-[#111111]">
        <HeroHeader />
        <span className="sora-semibold block text-2xl md:text-4xl font-semibold text-white text-center px-4">
          It's Time Your Resume Told the Right Story.
        </span>
        <span className="sora-semibold block text-2xl md:text-4xl font-semibold text-white text-center px-4">
          <p>Go to Development Page</p>
          <IconButton
            to={{
              pathname: "/dev",
            }}
          />
        </span>
      </div>
    </main>
  );
}
