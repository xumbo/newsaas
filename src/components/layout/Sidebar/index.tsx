export default function Sidebar() {
  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Configurações', path: '/settings' },
    { label: 'Perfil', path: '/profile' },
  ]

  return (
    <aside className="w-64 bg-card border-r min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="block px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
} 