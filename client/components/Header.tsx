import { Bell, Search, User } from 'lucide-react'

const Header = () => {
  return (
    <header className=" shadow-sm px-6 py-4 bg-slate-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Employee Productivity Tracker</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="text-gray-600 cursor-pointer" />
          <User className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header