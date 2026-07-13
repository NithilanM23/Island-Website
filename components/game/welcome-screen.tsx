import { ArrowRight, MapPin, Gamepad2, UserCircle2 } from 'lucide-react'

export function WelcomeScreen({
  onStartExploring,
  onBypass,
}: {
  onStartExploring: () => void
  onBypass: () => void
}) {
  return (
    <div className="flex w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/18 bg-[#151b28]/80 text-left shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl duration-300 animate-in slide-in-from-bottom-4 zoom-in-95">
      {/* Header */}
      <div className="relative border-b border-white/10 p-6 sm:p-8" style={{ background: 'linear-gradient(115deg, rgba(6,182,212,0.15) 0%, rgba(21,27,40,0.58) 44%, rgba(21,27,40,0.24) 100%)' }}>
        <h2 className="font-pixel text-2xl leading-none text-foreground sm:text-3xl">Welcome to my Island!</h2>
        <p className="mt-2 text-sm font-semibold text-cyan-400">A fully interactive, playable portfolio.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
          I've built this interactive world to showcase my work, skills, and experience. You can walk around, step inside buildings to read about my projects, and interact with the environment.
        </p>
      </div>

      {/* Instructions */}
      <div className="flex flex-col gap-4 bg-white/[0.02] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
            <Gamepad2 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Move around</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">Use <strong className="text-foreground">WASD</strong> or the on-screen <strong className="text-foreground">Joystick</strong> to walk and run.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Explore buildings</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">Walk up to doors and press <strong className="text-foreground">E</strong> (or tap) to enter and read about my projects.</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:p-8 sm:flex-row-reverse sm:items-center">
        <button
          onClick={onStartExploring}
          className="font-pixel group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm text-primary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-all hover:brightness-[1.07] active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)] sm:w-auto"
        >
          Start Exploring
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <button
          onClick={onBypass}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-6 text-[13px] font-semibold text-muted-foreground transition hover:bg-white/5 hover:text-foreground sm:w-auto"
        >
          <UserCircle2 className="h-4 w-4" />
          I'm busy, standard portfolio
        </button>
      </div>
    </div>
  )
}
