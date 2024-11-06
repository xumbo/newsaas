export default function Header() {
  return (
    <header className="bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">NewSaaS</span>
          </div>
          <div className="flex items-center">
            {/* Menu do usuário será adicionado depois */}
          </div>
        </div>
      </div>
    </header>
  )
} 