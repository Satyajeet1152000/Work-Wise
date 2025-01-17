import { Home, Users, ClipboardList, BarChart2, Target, Settings } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Users, label: 'Team', href: '/team' },
    { icon: ClipboardList, label: 'Tasks', href: '/tasks' },
    { icon: BarChart2, label: 'Analytics', href: '/analytics' },
    { icon: Target, label: 'Goals', href: '/goals' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <aside className="w-64 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-bold">EPT</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 px-6 py-3 text-gray-600 hover:bg-gray-50"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar