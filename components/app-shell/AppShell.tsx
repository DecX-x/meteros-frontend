import { AppMobileDock } from "@/components/app-shell/AppMobileDock";
import { AppSidebar } from "@/components/app-shell/AppSidebar";
import { AppTopbar } from "@/components/app-shell/AppTopbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground lg:h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-10 h-96 w-96 rounded-full bg-[#d6a8ff]/18 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-2rem] h-[28rem] w-[28rem] rounded-full bg-[#ff9a5a]/14 blur-3xl" />
        <div className="absolute bottom-16 left-[30%] h-72 w-72 rounded-full bg-[#b8df4e]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-[1600px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:gap-6 lg:px-8 xl:px-10 2xl:px-12">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col overflow-visible pb-24 lg:overflow-hidden lg:pb-0">
          <AppTopbar />
          <div className="mt-4 min-h-0 flex-1 overflow-visible overflow-x-hidden lg:overflow-y-auto lg:pr-1">{children}</div>
        </div>
      </div>

      <AppMobileDock />
    </main>
  );
}
