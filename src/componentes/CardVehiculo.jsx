export default function CardVehiculo({ vehiculo }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={vehiculo.image}
        alt={vehiculo.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">{vehiculo.name}</h2>
        <p className="text-gray-500 text-sm">{vehiculo.year}</p>

        <p className="mt-2 font-bold text-blue-600">
          ${vehiculo.price.toLocaleString()}
        </p>
      </div>
    </div>
  )
}
