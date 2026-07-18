const supabaseUrl = "https://qekczymcxxrkszoxnijx.supabase.co";
const supabaseKey = "sb_publishable_JxxKjUdNSK2Pb6FbEG5vRg_fCPw4O0c";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

async function buscarPuntos() {

  const telefono = document.getElementById("telefono").value;

  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .eq("telefono", telefono)
    .single();

  if (error) {
    document.getElementById("resultado").innerHTML =
      "No encontramos tu cuenta.";
    console.log(error);
    return;
  }

  document.getElementById("resultado").innerHTML =
    "Hola " + data.nombre + "! Tienes " + data.puntos + " puntos.";
}
