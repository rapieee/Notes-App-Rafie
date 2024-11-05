const getInitialData = () => [
  {
    id: 1,
    title: "ReactJS",
    body: "ReactJS adalah library JavaScript popular yang dibuat oleh Facebook yang digunakan dalam proses pengembangan aplikasi mobile dan web. untuk memfasilitasi pembuatan daripada komponen antarmuka yang interaktif, stateful, serta mudah untuk digunakan ulang. ReactJS sangatlah cocok digunakan untuk rendering antarmuka yang kompleks dengan performa tinggi (Kumar & Singh, 2016).",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Laravel",
    body: "Laravel dirilih oleh Taylor Otwell pada tahun 2011 sebagai proyek pribadi dengan tujuan untuk menyempurnakan CodeIgniter yang pada saat itu merupakan framework yang terkenel dan banyak digunakan oleh para pengembang aplikasi. Setelah beberapa kali iterasi, Taylor membuat Laravel menjadi open source di bawah Lisensi MIT, sehingga tersedia secara gratis untuk komunitas pengembang. Kerangka kerja Laravel dengan cepat mendapatkan daya tarik dan mendapatkan pengikut setia karena sintaksis, fitur, dan kemudahan penggunaannya. Komunitas pengembang yang aktif mulai berkontribusi pada pengembangan, dokumentasi, dan ekosistem Laravel. Upaya kolaboratif ini terus memantapkan posisi Laravel sebagai framework PHP open source terkemuka hingga saat ini.",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Kotlin",
    body: "Kotlin adalah bahasa pemrograman open source berjenis statis yang mendukung pemrograman berorientasi objek dan fungsional. Kotlin memberikan sintaksis dan konsep serupa dari bahasa lain, di antaranya termasuk C#, Java, dan Scala. Kotlin tidak dimaksudkan agar unik, melainkan mengambil inspirasi dari perkembangan bahasa selama puluhan tahun. Kotlin ada dalam varian yang menargetkan JVM (Kotlin/JVM), JavaScript (Kotlin/JS), dan kode native (Kotlin/Native).",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Flutter",
    body: "Flutter developer adalah seseorang yang memiliki kemampuan untuk mengembangkan perangkat lunak dan fokusnya adalah untuk menciptakan dan mengembangkan aplikasi mobile menggunakan Flutter. Flutter developer banyak dibutuhkan di banyak perusahaan untuk mengembangkan aplikasi dari perusahaan tersebut.",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "Dart",
    body: "Apa itu dart? Dart adalah bahasa pemrograman yang dikembangkan oleh Google dan pertama kali diperkenalkan pada tahun 2011. Tujuannya adalah untuk menyediakan bahasa yang dapat digunakan untuk membangun aplikasi lintas platform dengan kinerja tinggi dan produktivitas pengembang yang optimal. Dart telah berkembang pesat dan menjadi basis dari framework Flutter, yang digunakan untuk mengembangkan aplikasi mobile, web, dan desktop dengan satu basis kode.",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: false,
  },
  
  {
    id: 7,
    title: "Test Archive 1",
    body: "Ini Tambahan data untuk test archived: true",
    createdAt: "2024-12-05T04:27:34.572Z",
    archived: true,
  },
  {
    id: 8,
    title: "Test Archive 2",
    body: "Ini Tambahan data untuk test archived: true",
    createdAt: "2024-12-05T04:27:34.572Z",
    archived: true,
  },
  {
    id: 9,
    title: "Test Archive 3",
    body: "Ini Tambahan data untuk test archived: true",
    createdAt: "2024-12-05T04:27:34.572Z",
    archived: true,
  },
  {
    id: 10,
    title: "Test Archive 4",
    body: "Ini Tambahan data untuk test archived: true",
    createdAt: "2024-12-05T04:27:34.572Z",
    archived: true,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
