import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder";

function App() {

  const {removeItem, order, addItem }= useOrder();
  

  return (
    <>
        <header className="bg-teal-400 py-5">
          <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y consumo</h1>
        </header>

        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

          <div className="p-5">
            <h2 className="text-3xl font-black">Menu</h2>
            <div className="space-y-2 mt-10">
              {menuItems.map(item => (
                <MenuItem
                    key={item.id}
                    item={item}
                    addItem={addItem}
                />
              ))}
            </div>

          </div>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            
            <OrderContent
              order={order}
              removeItem={removeItem}
            />

          </div>

        </main>

    </>
  )
}

export default App
