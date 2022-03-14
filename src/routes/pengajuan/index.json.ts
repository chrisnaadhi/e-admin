export async function get() {
  const suratList: Array<object> = [
    { id: 1, jenis: "Surat 1", deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 2, jenis: "Surat 2", deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 3, jenis: "Surat 3", deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 4, jenis: "Surat 4", deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, jenis: "Surat 5", deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 6, jenis: "Surat 6", deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  return {
    status: 200,
    body: { suratList }
  }
}