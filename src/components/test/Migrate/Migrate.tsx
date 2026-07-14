import MigrateBackground from "./MigrateBackground";
import MigrateContent from "./MigrateContent";

export default function Migrate() {
  return (
    <section className="relative z-0 flex w-full min-h-[400px] py-20 md:py-0 md:h-[624px] flex-col items-center justify-center bg-transparent">
      <MigrateBackground />
      <MigrateContent />
    </section>
  );
}
