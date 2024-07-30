let myTruck = {
  truckId: 1,
  size: "40x34ft",
  type: "Flatbed",
  color: "blue",
  hasSnowTires: true,
};

console.log(myTruck.hasSnowTires);

function displayTruck(truck) {
  console.log(`Truck: ${truck.truckId}`);
  console.log(`Size: ${truck.size}`);
  console.log(`Type: ${truck.type}`);
}

displayTruck(myTruck);

