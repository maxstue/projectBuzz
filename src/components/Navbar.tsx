
export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <header className="text-xl font-bold flex justify-between px-4 py-3 border-b border-gray-600">
      <span>Home</span>
      {/* <IconNew className="text-primary" /> */}
    </header>
  )
}
