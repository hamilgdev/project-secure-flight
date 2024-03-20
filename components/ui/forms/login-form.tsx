export const LoginForm = () => {
  return (
    <form className='flex flex-col place-items-center w-full'>
      <div className="mb-4 w-full">
        <input
          type="email"
          id="email"
          className="bg-white text-[var(--neutral-thin)] text-sm rounded-md  block w-full p-2.5"
          placeholder="correo electrónico"
          required />
      </div>

      <div className="mb-16 w-full">
        <input
          type="password"
          id="password"
          className="bg-white text-[var(--neutral-thin)] text-sm rounded-md  block w-full p-2.5"
          placeholder="contraseña"
          required />
      </div>

      <button type="submit" className="uppercase bg-[var(--complementary)] text-white py-2 px-4 rounded-md min-w-[190px]">Comenzar</button>
    </form>

  )
}
