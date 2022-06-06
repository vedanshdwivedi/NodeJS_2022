const mission = process.argv[2] || "hello";

if (mission === "hello") {
  console.log("You Did Not Pass Any Arguments");
} else {
  console.log(`You passed an argument : ${mission}`);
}
