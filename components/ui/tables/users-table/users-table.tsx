interface User {
  id: number
  documento: string
  nombre: string
  email: string
  telefono: string
  rol: string
  estado: string
}

export const UsersTable = ({ users = [] }: { users: User[]}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-[var(--neutral-default)] text-xs bg-[var(--neutral-luminous)] rounded-tl-md rounded-tr-md">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Documento</th>
            <th scope="col" className="px-6 py-3">Nombre</th>
            <th scope="col" className="px-6 py-3">Correo electrónico</th>
            <th scope="col" className="px-6 py-3">Teléfono</th>
            <th scope="col" className="px-6 py-3">Rol</th>
            <th scope="col" className="px-6 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} className="odd:bg-[var(--neutral-background)] even:bg-[var(--neutral-luminous)]">
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.documento}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.telefono}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.rol}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.estado}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>

  )
}
