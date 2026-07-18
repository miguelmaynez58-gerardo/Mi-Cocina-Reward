const supabaseUrl = "https://qekczymcxxrkszoxnijx.supabase.co";
const supabaseKey = "sb_publishable_JxxKjUdNSK2Pb6FbEG5vRg_fCPw4O0c";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

async function buscarPuntos() {

  const telefono = document.getElementById("telefono").value;

  alert("Buscando teléfono: " + telefono);

  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .eq("telefono", telefono);

  console.log(data);
  console.log(error);

  if (error) {
    document.getElementById("resultado").innerHTML =
      "Error: " + error.message;
    return;
  }

  if (!data || data.length === 0) {
    document.getElementById("resultado").innerHTML =
      "No encontramos tu cuenta.";
    return;
  }

  document.getElementById("resultado").innerHTML =
    "Hola " + data[0].nombre + "! Tienes " + data[0].puntos + " puntos.";
}
